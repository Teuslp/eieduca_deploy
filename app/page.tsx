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
    <div className="flex min-h-screen flex-col md:flex-row">

      {/* LADO ESQUERDO — FORMULÁRIO */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-background p-6 md:p-10">
        <Card className="w-full max-w-md shadow-none border-none">
          <CardHeader className="space-y-4 text-center">
            
            <div className="mx-auto flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-primary">
              <Image
                src="/logo-inicio.png"
                alt="Logo EiEduca+"
                width={32}
                height={32}
                className="h-7 w-7 md:h-8 md:w-8 object-contain"
              />
            </div>

            <div>
              <CardTitle className="text-2xl md:text-3xl font-bold">EiEduca+</CardTitle>
              <CardDescription className="text-sm md:text-base text-[#64748B]">
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

              {/* BOTÃO */}
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
                  className="text-[#1E40AF] hover:underline"
                >
                  Esqueceu a senha?
                </button>

                <p className="text-muted-foreground">
                  Não tem uma conta?{" "}
                  <button
                    type="button"
                    className="text-[#1E40AF] hover:underline"
                  >
                    Cadastre-se
                  </button>
                </p>
              </div>

            </form>

            {/* RODAPÉ */}
            <div className="mt-6 border-t border-border pt-5">
              <p className="text-[#1E40AF] text-center text-xs opacity-80">
                Plataforma desenvolvida com foco em acessibilidade e inclusão digital
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* LADO DIREITO — GRADIENTE */}
      <div className="relative hidden md:flex w-1/2 items-center justify-center">
        <Image
          src="/gradient-1.png"
          alt="Background Azul - Login"
          fill
          priority
          className="object-cover"
        />

        <div className="relative z-10 text-white text-center px-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Transformando a educação com inclusão e tecnologia
          </h1>
          <p className="text-base md:text-lg opacity-90 leading-relaxed">
            Uma plataforma desenvolvida para conectar, apoiar e ampliar oportunidades de aprendizado.
          </p>
        </div>
      </div>
    </div>
  )
}
