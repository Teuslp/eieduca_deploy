"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X, Home, Library, Award, GraduationCap, LogOut, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar" // Importe o Avatar

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/cursos", label: "Cursos", icon: GraduationCap },
  { href: "/biblioteca", label: "Biblioteca", icon: Library },
  { href: "/certificacao", label: "Certificação", icon: Award },
  { href: "/perfil", label: "Meu Perfil", icon: User }, // Adicionei explicitamente
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    setIsOpen(false)
    router.push("/")
  }

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <>
          {/* Fundo Escuro (Overlay) */}
          <div
            className="fixed inset-0 top-16 z-40 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* O Menu em Si */}
          <nav
            className="fixed left-0 right-0 top-16 z-50 border-b border-border bg-card p-4 shadow-lg animate-in slide-in-from-top-5 duration-200"
            role="navigation"
          >
            <div className="space-y-4">
              
              {/* --- NOVO: SEÇÃO DE PERFIL NO TOPO --- */}
              <div className="flex items-center gap-3 px-2 mb-4">
                 <Avatar className="h-10 w-10 border border-border">
                    <AvatarImage src="/avatar-placeholder.png" />
                    <AvatarFallback>MP</AvatarFallback>
                 </Avatar>
                 <div className="flex flex-col">
                    <span className="text-sm font-semibold">Mateus Pereira</span>
                    <span className="text-xs text-muted-foreground">mateus@exemplo.com</span>
                 </div>
              </div>
              
              <Separator />
              {/* ------------------------------------- */}

              <div className="space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-colors",
                        "hover:bg-accent hover:text-accent-foreground",
                        isActive && "bg-primary/10 text-primary hover:bg-primary/20", // Usei suas cores de tema
                      )}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  )
                })}

                <Separator className="my-2" />

                <button
                  onClick={handleLogout}
                  className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-colors text-destructive hover:bg-destructive/10"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Sair</span>
                </button>
              </div>
            </div>
          </nav>
        </>
      )}
    </div>
  )
}