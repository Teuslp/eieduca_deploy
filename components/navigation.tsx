"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Home, Library, Award, GraduationCap, Table2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { MobileNav } from "@/components/mobile-nav"
import Image from "next/image"


const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: Table2 },
  { href: "/cursos", label: "Cursos", icon: GraduationCap },
  { href: "/biblioteca", label: "Biblioteca", icon: Library },
  { href: "/certificacao", label: "Certificação", icon: Award },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="border-b border-[#1E40AF]/20 bg-card" role="navigation" aria-label="Navegação principal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2 text-lg font-bold text-primary sm:text-xl">
          <Image
            src="/logo-inicio.png"
            alt="Logo EiEduca+"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"/>
          
            <span>EiEduca+</span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                    "hover:bg-[#1E40AF]/10 hover:text-[#1E40AF]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isActive && "bg-[#1E40AF]/10 text-[#1E40AF]",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>

          <MobileNav />
        </div>
      </div>
    </nav>
  )
}
