import type { ReactNode } from "react"
import Link from "next/link"
import { Brain, ChevronDown, CreditCard, Home, Settings, Users } from "lucide-react"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-purple-600" />
            <span className="font-bold text-lg">FocoTDAH</span>
          </div>

          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-medium">
                    A
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Perfil</DropdownMenuItem>
                <DropdownMenuItem>Configurações</DropdownMenuItem>
                <DropdownMenuItem>Sair</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 h-[calc(100vh-57px)] sticky top-[57px] hidden md:block">
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <Link href="/dashboard" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100">
                  <Home className="h-5 w-5 text-gray-500" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/vendas"
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 bg-gray-100"
                >
                  <CreditCard className="h-5 w-5 text-gray-500" />
                  <span>Vendas</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/clientes" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100">
                  <Users className="h-5 w-5 text-gray-500" />
                  <span>Clientes</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/configuracoes"
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100"
                >
                  <Settings className="h-5 w-5 text-gray-500" />
                  <span>Configurações</span>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}
