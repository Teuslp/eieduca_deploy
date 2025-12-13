"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { registerUser } from "@/actions/auth-actions" // Ação do servidor
import { toast } from "sonner" // Notificações
import { Eye, EyeOff } from "lucide-react"

export default function CadastroPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  
  // Estados para visibilidade de senha
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)

    const formData = new FormData(event.currentTarget)
    
    // Validação simples de confirmação de senha no front
    const password = formData.get("password") as string
    const confirmPassword = formData.get("confirmPassword") as string

    if (password !== confirmPassword) {
        toast.error("As senhas não coincidem.")
        setLoading(false)
        return
    }

    // Chama a Server Action
    const result = await registerUser(formData)

    setLoading(false)

    if (result.error) {
      toast.error(result.error)
    } else {
      toast.success("Conta criada com sucesso! Faça login.")
      router.push("/") // Redireciona para o Login
    }
  }

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* LADO ESQUERDO - FORMULÁRIO */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-background p-6 md:p-10">
        <Card className="w-full max-w-md border-none shadow-none">
          <CardHeader className="space-y-4 text-left">
            <div className="flex h-16 w-16 items-center justify-start rounded-full bg-[#1E40AF]/10">
               <Image
                src="/logo-inicio.png"
                alt="Logo EiEduca+"
                width={32}
                height={32}
                className="h-10 w-10 ml-1 object-contain"
              />
            </div>
            
            <div>
                <CardTitle className="text-2xl md:text-3xl font-bold text-[#1E40AF]">
                Crie sua conta
                </CardTitle>
                <CardDescription className="text-sm md:text-base text-[#64748B]">
                Preencha seus dados para começar a estudar gratuitamente.
                </CardDescription>
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* CAMPO NOME */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#1E40AF]">Nome Completo</Label>
                <Input 
                    id="name" 
                    name="name" 
                    placeholder="Seu nome" 
                    required 
                    className="h-11 focus-visible:ring-[#1E40AF]"
                />
              </div>

              {/* CAMPO EMAIL */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#1E40AF]">E-mail</Label>
                <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="seu@email.com" 
                    required 
                    className="h-11 focus-visible:ring-[#1E40AF]"
                />
              </div>

              {/* CAMPO SENHA */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-[#1E40AF]">Senha</Label>
                <div className="relative">
                    <Input 
                        id="password" 
                        name="password" 
                        type={showPassword ? "text" : "password"} 
                        placeholder="Mínimo 6 caracteres" 
                        required 
                        minLength={6}
                        className="h-11 pr-10 focus-visible:ring-[#1E40AF]"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-[#1E40AF]"
                    >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                </div>
              </div>

              {/* CAMPO CONFIRMAR SENHA */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-[#1E40AF]">Confirmar Senha</Label>
                <div className="relative">
                    <Input 
                        id="confirmPassword" 
                        name="confirmPassword" 
                        type={showConfirmPassword ? "text" : "password"} 
                        placeholder="Repita a senha" 
                        required 
                        className="h-11 pr-10 focus-visible:ring-[#1E40AF]"
                    />
                     <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-[#1E40AF]"
                    >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                </div>
              </div>

              {/* BOTÃO CADASTRAR */}
              <Button 
                type="submit" 
                className="h-11 w-full text-base font-semibold bg-[#1E40AF] hover:bg-[#1E40AF]/90 text-white mt-2" 
                disabled={loading}
              >
                {loading ? "Criando conta..." : "Cadastrar"}
              </Button>

              <div className="mt-4 text-center text-sm">
                <p className="text-muted-foreground">
                  Já tem uma conta?{" "}
                  <Link href="/" className="text-[#1E40AF] hover:underline font-bold">
                    Faça Login
                  </Link>
                </p>
              </div>
            </form>
            
            {/* RODAPÉ */}
            <div className="mt-6 border-t border-border pt-5">
              <p className="text-[#1E40AF] text-center text-sm opacity-80">
                Ao se cadastrar, você concorda com nossos Termos de Uso e Políticas de Privacidade.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* LADO DIREITO - DECORATIVO (Igual ao Login) */}
      <div className="relative hidden w-1/2 items-center justify-center bg-muted md:flex">
         {/* Imagem de Fundo / Gradiente */}
         <Image
          src="/gradient-1.png" // Certifique-se de que essa imagem existe em public/
          alt="Background Azul - Cadastro"
          fill
          priority
          className="object-cover"
        />
         <div className="relative z-10 px-10 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Junte-se à nossa comunidade</h2>
            <p className="opacity-90 text-lg">
                Crie sua conta e tenha acesso a cursos exclusivos, certificações e muito mais.
            </p>
         </div>
      </div>
    </div>
  )
}