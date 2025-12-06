"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X, Home, Library, Award, GraduationCap, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/cursos", label: "Cursos", icon: GraduationCap },
  { href: "/biblioteca", label: "Biblioteca", icon: Library },
  { href: "/certificacao", label: "Certificação", icon: Award },
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
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 top-16 z-40 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Menu */}
          <nav
            className="fixed left-0 right-0 top-16 z-50 border-b border-border bg-card p-4 shadow-lg animate-in slide-in-from-top-5 duration-200"
            role="navigation"
            aria-label="Menu de navegação mobile"
          >
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
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      isActive && "bg-primary text-primary-foreground hover:bg-primary/90",
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}

              <Separator className="my-2" />

              {/* Botão Sair Mobile */}
              <button
                onClick={handleLogout}
                className={cn(
                  "flex w-full items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-colors",
                  "text-muted-foreground hover:bg-destructive/10 hover:text-destructive",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                )}
              >
                <LogOut className="h-5 w-5" aria-hidden="true" />
                <span>Sair</span>
              </button>
            </div>
          </nav>
        </>
      )}
    </div>
  )
}