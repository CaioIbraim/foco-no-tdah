import { type NextRequest, NextResponse } from "next/server"

// Tipos para os dados do webhook do Kiwify
type KiwifyCustomer = {
  id: string
  name: string
  email: string
  phone?: string
  document?: string
}

type KiwifyProduct = {
  id: string
  name: string
  price: number
}

type KiwifyOrder = {
  id: string
  status: "approved" | "refunded" | "chargeback" | "dispute" | "canceled"
  payment_method: "credit_card" | "boleto" | "pix"
  installments?: number
  total_amount: number
  created_at: string
  paid_at?: string
}

type KiwifyWebhookPayload = {
  event: "order.created" | "order.paid" | "order.completed" | "order.canceled" | "order.refunded"
  data: {
    customer: KiwifyCustomer
    product: KiwifyProduct
    order: KiwifyOrder
  }
}

// Chave secreta para validar o webhook (deve ser configurada no painel do Kiwify)
// Em produção, isso deve vir de uma variável de ambiente
const WEBHOOK_SECRET = "7q19rjfd7bf"

export async function POST(request: NextRequest) {
  try {
    // Verificar se o corpo da requisição existe
    if (!request.body) {
      return NextResponse.json({ error: "Corpo da requisição vazio" }, { status: 400 })
    }

    // Obter o corpo da requisição como JSON
    const payload: KiwifyWebhookPayload = await request.json()

    // Validar a assinatura do webhook (em um ambiente de produção)
    // Isso é um exemplo simplificado - o Kiwify deve fornecer documentação sobre como validar webhooks
    const signature = request.headers.get("x-kiwify-signature")
    if (!signature) {
      console.error("Assinatura do webhook ausente")
      return NextResponse.json({ error: "Assinatura do webhook ausente" }, { status: 401 })
    }

    // Verificar o tipo de evento
    console.log(`Webhook recebido: ${payload.event}`)

    // Processar o evento com base no tipo
    switch (payload.event) {
      case "order.paid":
        await handleOrderPaid(payload)
        break
      case "order.refunded":
        await handleOrderRefunded(payload)
        break
      case "order.canceled":
        await handleOrderCanceled(payload)
        break
      case "order.created":
        await handleOrderCreated(payload)
        break
      case "order.completed":
        await handleOrderCompleted(payload)
        break
      default:
        console.warn(`Evento desconhecido: ${payload.event}`)
    }

    // Responder com sucesso
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erro ao processar webhook do Kiwify:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}

// Funções para lidar com diferentes tipos de eventos

async function handleOrderPaid(payload: KiwifyWebhookPayload) {
  const { customer, product, order } = payload.data

  console.log(`Venda aprovada: ${order.id}`)
  console.log(`Cliente: ${customer.name} (${customer.email})`)
  console.log(`Produto: ${product.name} - R$ ${product.price}`)

  // Aqui você pode:
  // 1. Salvar a venda em seu banco de dados
  // 2. Enviar email de boas-vindas para o cliente
  // 3. Conceder acesso ao produto
  // 4. Registrar a conversão em ferramentas de analytics
  // 5. Etc.

  // Exemplo: Salvar em um banco de dados (pseudocódigo)
  // await db.sales.create({
  //   orderId: order.id,
  //   customerId: customer.id,
  //   customerName: customer.name,
  //   customerEmail: customer.email,
  //   productId: product.id,
  //   productName: product.name,
  //   amount: order.total_amount,
  //   paymentMethod: order.payment_method,
  //   paidAt: order.paid_at,
  //   status: order.status
  // });

  // Exemplo: Enviar email de boas-vindas (pseudocódigo)
  // await sendEmail({
  //   to: customer.email,
  //   subject: `Bem-vindo ao ${product.name}!`,
  //   template: 'welcome',
  //   variables: {
  //     name: customer.name,
  //     productName: product.name,
  //     accessLink: `https://seusite.com/acesso?token=${generateAccessToken(customer.id, product.id)}`
  //   }
  // });
}

async function handleOrderRefunded(payload: KiwifyWebhookPayload) {
  const { customer, product, order } = payload.data

  console.log(`Venda reembolsada: ${order.id}`)

  // Aqui você pode:
  // 1. Atualizar o status da venda no banco de dados
  // 2. Revogar acesso ao produto
  // 3. Enviar email informando sobre o reembolso
  // 4. Etc.
}

async function handleOrderCanceled(payload: KiwifyWebhookPayload) {
  const { customer, product, order } = payload.data

  console.log(`Venda cancelada: ${order.id}`)

  // Lógica para lidar com cancelamentos
}

async function handleOrderCreated(payload: KiwifyWebhookPayload) {
  const { customer, product, order } = payload.data

  console.log(`Venda criada: ${order.id}`)

  // Lógica para lidar com pedidos recém-criados
}

async function handleOrderCompleted(payload: KiwifyWebhookPayload) {
  const { customer, product, order } = payload.data

  console.log(`Venda concluída: ${order.id}`)

  // Lógica para lidar com pedidos concluídos
}
