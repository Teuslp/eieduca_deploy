"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/dashboard")
  }

  return (
    <div className="flex min-h-screen">

      {/* LADO ESQUERDO — FORMULÁRIO */}
      <div className="flex w-1/2 items-center justify-center bg-background p-8">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-4 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary">
              <Image
                src="/logo-inicio.png" 
                alt="Logo EiEduca+"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
            </div>

            <div>
              <CardTitle className="text-2xl font-bold">EiEduca+</CardTitle>
              <CardDescription className="text-base text-[#64748B]">
                Entre com suas credenciais para acessar a plataforma
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* EMAIL */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu.email@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="h-11"
                />
              </div>

              {/* SENHA */}
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                    className="h-11 pr-10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Eye className="h-4 w-4" aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>

              {/* BOTÃO ENTRAR */}
              <Button
                type="submit"
                className="h-11 w-full text-base font-semibold bg-[#1E40AF] hover:bg-[#1E40AF]/90 text-white"
              >
                Entrar
              </Button>

              {/* LINKS */}
              <div className="space-y-2 text-center text-sm">
                <button
                  type="button"
                  className="text-[#1E40AF] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E40AF]"
                >
                  Esqueceu a senha?
                </button>

                <p className="text-muted-foreground color">
                  Não tem uma conta?{" "}
                  <button
                    type="button"
                    className="text-[#1E40AF] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E40AF]"

                  >
                    Cadastre-se
                  </button>
                </p>
              </div>
            </form>

            {/* RODAPÉ */}
            <div className="mt-6 border-t border-border pt-5">
              <p className="text-[#1E40AF] text-center text-xs text-muted-foreground">
                Plataforma desenvolvida com foco em acessibilidade e inclusão digital
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* LADO DIREITO — GRADIENTE */}
      <div className="relative w-1/2 hidden md:flex items-center justify-center">
        <Image
          src="/gradient-1.png"  
          alt="Background Azul - Login"
          fill
          priority
          className="object-cover"
        />

        <div className="relative z-10 text-white text-center px-10">
          <h1 className="text-4xl font-bold mb-4">
            Transformando a educação com inclusão e tecnologia
          </h1>
          <p className="text-lg opacity-90">
            Uma plataforma desenvolvida para conectar, apoiar e ampliar oportunidades de aprendizado.
          </p>
        </div>
      </div>
    </div>
  )
}
