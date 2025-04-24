"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

// Tipos
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

export default function VendasPage() {
  const [sales, setSales] = useState<Sale[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [statusFilter, setStatusFilter] = useState<string>("")
  const [searchTerm, setSearchTerm] = useState("")

  // Função para buscar vendas
  const fetchSales = async () => {
    setLoading(true)
    try {
      // Em um ambiente real, você buscaria dados da sua API
      // Aqui estamos simulando dados para demonstração
      const mockSales: Sale[] = [
        {
          id: "sale_1",
          customerName: "João Silva",
          customerEmail: "joao.silva@exemplo.com",
          productName: "Foco no TDAH: Como Aumentar a Concentração",
          amount: 697.0,
          status: "approved",
          paymentMethod: "credit_card",
          createdAt: "2023-04-15T14:30:00Z",
        },
        {
          id: "sale_2",
          customerName: "Maria Oliveira",
          customerEmail: "maria.oliveira@exemplo.com",
          productName: "Foco no TDAH: Como Aumentar a Concentração",
          amount: 697.0,
          status: "approved",
          paymentMethod: "pix",
          createdAt: "2023-04-16T10:15:00Z",
        },
        {
          id: "sale_3",
          customerName: "Carlos Santos",
          customerEmail: "carlos.santos@exemplo.com",
          productName: "Foco no TDAH: Como Aumentar a Concentração",
          amount: 697.0,
          status: "refunded",
          paymentMethod: "credit_card",
          createdAt: "2023-04-14T09:45:00Z",
        },
      ]

      setSales(mockSales)
    } catch (err) {
      setError("Erro ao carregar vendas")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSales()
  }, [page, statusFilter])

  // Formatar data
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  // Formatar valor
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value)
  }

  // Filtrar vendas pelo termo de busca
  const filteredSales = sales.filter(
    (sale) =>
      sale.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sale.customerEmail.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Dashboard de Vendas</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total de Vendas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{sales.filter((s) => s.status === "approved").length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Receita Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(sales.filter((s) => s.status === "approved").reduce((acc, sale) => acc + sale.amount, 0))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Taxa de Reembolso</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {sales.length > 0
                ? `${((sales.filter((s) => s.status === "refunded").length / sales.length) * 100).toFixed(1)}%`
                : "0%"}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Vendas Recentes</CardTitle>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div className="flex-1">
              <Input
                placeholder="Buscar por nome ou email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full sm:w-48">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filtrar por status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="approved">Aprovado</SelectItem>
                  <SelectItem value="refunded">Reembolsado</SelectItem>
                  <SelectItem value="canceled">Cancelado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={() => fetchSales()}>Atualizar</Button>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8">Carregando...</div>
          ) : error ? (
            <div className="text-center py-8 text-red-500">{error}</div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Produto</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Método</TableHead>
                    <TableHead>Data</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSales.length > 0 ? (
                    filteredSales.map((sale) => (
                      <TableRow key={sale.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{sale.customerName}</div>
                            <div className="text-sm text-muted-foreground">{sale.customerEmail}</div>
                          </div>
                        </TableCell>
                        <TableCell>{sale.productName}</TableCell>
                        <TableCell>{formatCurrency(sale.amount)}</TableCell>
                        <TableCell>
                          <div
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                            ${sale.status === "approved" ? "bg-green-100 text-green-800" : ""}
                            ${sale.status === "refunded" ? "bg-red-100 text-red-800" : ""}
                            ${sale.status === "canceled" ? "bg-gray-100 text-gray-800" : ""}
                          `}
                          >
                            {sale.status === "approved" && "Aprovado"}
                            {sale.status === "refunded" && "Reembolsado"}
                            {sale.status === "canceled" && "Cancelado"}
                          </div>
                        </TableCell>
                        <TableCell>
                          {sale.paymentMethod === "credit_card" && "Cartão de Crédito"}
                          {sale.paymentMethod === "pix" && "PIX"}
                          {sale.paymentMethod === "boleto" && "Boleto"}
                        </TableCell>
                        <TableCell>{formatDate(sale.createdAt)}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8">
                        Nenhuma venda encontrada
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex justify-between items-center">
        <Button variant="outline" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
          Anterior
        </Button>
        <div>Página {page}</div>
        <Button variant="outline" onClick={() => setPage((p) => p + 1)} disabled={filteredSales.length < 10}>
          Próxima
        </Button>
      </div>
    </div>
  )
}
