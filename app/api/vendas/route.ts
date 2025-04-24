import { type NextRequest, NextResponse } from "next/server"

// Tipos para a API de vendas
type Sale = {
  id: string
  customerName: string
  customerEmail: string
  productName: string
  amount: number
  status: string
  paymentMethod: string
  createdAt: string
}

// Simulação de um banco de dados em memória
const sales: Sale[] = []

export async function GET(request: NextRequest) {
  // Verificar autenticação (em um ambiente real, você deve implementar autenticação adequada)
  const authHeader = request.headers.get("authorization")
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
  }

  // Em um ambiente real, você verificaria o token contra um sistema de autenticação
  const token = authHeader.split(" ")[1]
  if (token !== "seu_token_secreto") {
    return NextResponse.json({ error: "Token inválido" }, { status: 401 })
  }

  // Parâmetros de paginação e filtros
  const { searchParams } = new URL(request.url)
  const page = Number.parseInt(searchParams.get("page") || "1")
  const limit = Number.parseInt(searchParams.get("limit") || "10")
  const status = searchParams.get("status")

  // Aplicar filtros
  let filteredSales = [...sales]
  if (status) {
    filteredSales = filteredSales.filter((sale) => sale.status === status)
  }

  // Aplicar paginação
  const startIndex = (page - 1) * limit
  const endIndex = page * limit
  const paginatedSales = filteredSales.slice(startIndex, endIndex)

  // Retornar resultados
  return NextResponse.json({
    total: filteredSales.length,
    page,
    limit,
    data: paginatedSales,
  })
}

export async function POST(request: NextRequest) {
  // Esta rota é apenas para uso interno, não para o Kiwify
  // Pode ser usada para registrar vendas manualmente ou para testes

  try {
    const data = await request.json()

    // Validar dados
    if (!data.customerName || !data.customerEmail || !data.productName || !data.amount) {
      return NextResponse.json({ error: "Dados incompletos" }, { status: 400 })
    }

    // Criar nova venda
    const newSale: Sale = {
      id: `sale_${Date.now()}`,
      customerName: data.customerName,
      customerEmail: data.customerEmail,
      productName: data.productName,
      amount: data.amount,
      status: data.status || "approved",
      paymentMethod: data.paymentMethod || "manual",
      createdAt: new Date().toISOString(),
    }

    // Adicionar ao "banco de dados"
    sales.push(newSale)

    return NextResponse.json({
      success: true,
      message: "Venda registrada com sucesso",
      sale: newSale,
    })
  } catch (error) {
    console.error("Erro ao registrar venda:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}
