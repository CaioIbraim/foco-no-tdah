import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { readFileSync } from "fs";
import { join } from "path";

// Tipos mínimos para o webhook do Kiwify
type ClienteKiwify = {
  id: string;
  nome: string;
  email: string;
};

type ProdutoKiwify = {
  id: string;
  nome: string;
  preco: number;
};

type PedidoKiwify = {
  id: string;
  status: string;
};

type PayloadWebhookKiwify = {
  evento: string;
  dados: {
    cliente: ClienteKiwify;
    produto: ProdutoKiwify;
    pedido: PedidoKiwify;
  };
};

// Inicializar Resend com a chave da API
const resend = new Resend(process.env.RESEND_API_KEY);

// Caminho para o PDF do curso
const CAMINHO_PDF = join(process.cwd(), "public", "Foco_no_TDAH.pdf");

export async function POST(requisicao: NextRequest) {
  try {
    // Verificar se o corpo da requisição existe
    if (!requisicao.body) {
      return NextResponse.json({ erro: "Corpo da requisição vazio" }, { status: 400 });
    }

    // Obter o corpo da requisição como JSON
    let payload: PayloadWebhookKiwify;
    try {
      payload = await requisicao.json();
    } catch {
      return NextResponse.json({ erro: "JSON inválido" }, { status: 400 });
    }

    // Registrar o evento
    console.log(`Evento do webhook: ${payload.evento}`);

    // Processar apenas o evento order.paid
    if (payload.evento === "order.paid") {
      await lidarComPagamentoAprovado(payload);
    } else {
      console.log(`Evento ignorado: ${payload.evento}`);
    }

    // Responder com sucesso
    return NextResponse.json({ sucesso: true });
  } catch (erro) {
    console.error("Erro no webhook:", erro);
    return NextResponse.json({ erro: "Erro no servidor" }, { status: 500 });
  }
}

// Função para lidar com pagamento aprovado
async function lidarComPagamentoAprovado(payload: PayloadWebhookKiwify) {
  const { cliente, produto, pedido } = payload.dados;

  console.log(`Pedido aprovado: ${pedido.id}, Cliente: ${cliente.email}`);

  // Enviar e-mail com o PDF
  try {
    const pdfBuffer = readFileSync(CAMINHO_PDF);
    const pdfBase64 = pdfBuffer.toString("base64");

    await resend.emails.send({
      from: "Foco no TDAH <devcaioibraim@gmail.com>", // Substitua pelo seu domínio
      to: cliente.email,
      subject: `Bem-vindo(a) ao Foco no TDAH, ${cliente.nome}!`,
      text: `
Olá, ${cliente.nome},

Obrigado por adquirir o curso "Foco no TDAH: Como Aumentar a Concentração e Vencer a Procrastinação"!

O e-book inicial do curso está anexado neste e-mail em formato PDF. Baixe-o e comece a aplicar as técnicas práticas hoje mesmo!

Se precisar de suporte, entre em contato pelo e-mail devcaioibraim@gmail.com ou junte-se à nossa comunidade no Telegram (o link está no PDF).

Vamos juntos transformar o TDAH em seu superpoder!

Equipe Foco no TDAH
      `,
      attachments: [
        {
          filename: "Foco_no_TDAH.pdf",
          content: pdfBase64,
          contentType: "application/pdf",
        },
      ],
    });

    console.log(`E-mail enviado para ${cliente.email}`);
  } catch (erro) {
    console.error(`Falha ao enviar e-mail para ${cliente.email}:`, erro);
  }
}