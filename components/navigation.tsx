"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { BookOpen, Home, Library, Award, GraduationCap, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/cursos", label: "Cursos", icon: GraduationCap },
  { href: "/biblioteca", label: "Biblioteca", icon: Library },
  { href: "/certificacao", label: "Certificação", icon: Award },
]

export function Navigation() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    router.push("/")
  }

  return (
    <nav className="border-b border-border bg-card" role="navigation" aria-label="Navegação principal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/dashboard" className="flex items-center gap-2 text-lg font-bold text-primary sm:text-xl hover:opacity-80 transition-opacity">
            <BookOpen className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
            <span>EiEduca+</span>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 text-sm font-medium transition-all duration-200",
                    // Estado Padrão: Cinza
                    "text-muted-foreground",
                    // Hover: Azul + Sublinhado (com afastamento de 4px)
                    "hover:text-blue-600 hover:underline hover:underline-offset-4",
                    // Ativo: Azul Forte + Negrito (mantém o sublinhado para indicar onde está)
                    isActive && "text-blue-600 font-bold underline underline-offset-4"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
            
            {/* Divisor Visual */}
            <div className="mx-2 h-6 w-px bg-border/50" aria-hidden="true" />

            {/* Botão Sair */}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleLogout}
              className="gap-2 text-muted-foreground hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span>Sair</span>
            </Button>
          </div>

          <MobileNav />
        </div>
      </div>
    </nav>
  )
}