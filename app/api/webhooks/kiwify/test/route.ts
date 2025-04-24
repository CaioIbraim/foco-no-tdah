import { type NextRequest, NextResponse } from "next/server"

// Endpoint para testar o webhook do Kiwify
export async function GET(request: NextRequest) {
  // Simular um payload do Kiwify
  const testPayload = {
    event: "order.paid",
    data: {
      customer: {
        id: "cust_123456",
        name: "João Silva",
        email: "joao.silva@exemplo.com",
        phone: "+5511999999999",
      },
      product: {
        id: "prod_123456",
        name: "Foco no TDAH: Como Aumentar a Concentração e Vencer a Procrastinação",
        price: 697.0,
      },
      order: {
        id: "ord_123456",
        status: "approved",
        payment_method: "credit_card",
        installments: 12,
        total_amount: 697.0,
        created_at: new Date().toISOString(),
        paid_at: new Date().toISOString(),
      },
    },
  }

  try {
    // Fazer uma requisição para o endpoint do webhook
    const response = await fetch(new URL("/api/webhooks/kiwify", request.url).toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-kiwify-signature": "test-signature",
      },
      body: JSON.stringify(testPayload),
    })

    const data = await response.json()

    return NextResponse.json({
      success: true,
      message: "Teste de webhook enviado com sucesso",
      response: data,
    })
  } catch (error) {
    console.error("Erro ao testar webhook:", error)
    return NextResponse.json({ error: "Erro ao testar webhook" }, { status: 500 })
  }
}
