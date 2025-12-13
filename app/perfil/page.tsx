"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { usePreferences } from "../contexts/PreferencesContext"

// --- IMPORTANTE: ADICIONANDO A NAVEGAÇÃO AQUI ---
import { Navigation } from "@/components/navigation" 

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { toast } from "sonner"
import { User, Lock, Bell, Settings, Pencil, Save, X, Eye, EyeOff } from "lucide-react"

export default function PerfilPage() {
  const { data: session } = useSession()
  const { preferences, updatePreference } = usePreferences()

  const [isEditing, setIsEditing] = useState(false)
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    birthDate: "",
    institution: "",
    grade: "",
    bio: "",
  })

  useEffect(() => {
    if (session?.user) {
      setFormData(prev => ({
        ...prev,
        name: session.user.name || "",
        email: session.user.email || "",
      }))
    }
  }, [session])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    console.log("Dados salvos:", formData)
    toast.success("Perfil atualizado com sucesso!")
    setIsEditing(false)
  }

  const getInitials = (name: string) => {
    return name
      ?.split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* 1. BARRA DE NAVEGAÇÃO NO TOPO */}
      <Navigation />

      {/* 2. CONTEÚDO DA PÁGINA */}
      <main className="container mx-auto max-w-5xl py-10 space-y-8 px-4">
        
        {/* CABEÇALHO DO PERFIL */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="relative">
            <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-white shadow-xl ring-2 ring-[#1E40AF]/20">
              <AvatarImage src={session?.user?.image || ""} alt="Foto de Perfil" />
              <AvatarFallback className="text-2xl md:text-4xl font-bold bg-[#1E40AF]/10 text-[#1E40AF]">
                {getInitials(session?.user?.name || "U")}
              </AvatarFallback>
            </Avatar>
            <button className="absolute bottom-0 right-0 rounded-full bg-[#1E40AF] p-2 text-white shadow-lg hover:bg-[#1E40AF]/90 transition">
              <Pencil className="h-4 w-4" />
            </button>
          </div>

          <div className="text-center md:text-left space-y-2">
            <h1 className="text-3xl font-bold text-[#1E40AF]">
              {formData.name || "Usuário"}
            </h1>
            <p className="text-muted-foreground">{formData.email || "email@exemplo.com"}</p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
              <span className="inline-flex items-center rounded-full bg-[#1E40AF]/10 px-3 py-1 text-xs font-medium text-[#1E40AF]">
                Aluno
              </span>
              <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                Conta Ativa
              </span>
            </div>
          </div>
        </div>

        <Separator className="bg-[#1E40AF]/10" />

        {/* ABAS DE CONFIGURAÇÃO */}
        <Tabs defaultValue="account" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto p-1 bg-[#1E40AF]/5 border border-[#1E40AF]/20 rounded-xl">
            <TabsTrigger 
              value="account" 
              className="py-3 gap-2 data-[state=active]:bg-[#1E40AF] data-[state=active]:text-white hover:text-[#1E40AF] transition-all"
            >
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Minha Conta</span>
            </TabsTrigger>
            <TabsTrigger 
              value="privacy" 
              className="py-3 gap-2 data-[state=active]:bg-[#1E40AF] data-[state=active]:text-white hover:text-[#1E40AF] transition-all"
            >
              <Lock className="h-4 w-4" />
              <span className="hidden sm:inline">Privacidade</span>
            </TabsTrigger>
            <TabsTrigger 
              value="notifications" 
              className="py-3 gap-2 data-[state=active]:bg-[#1E40AF] data-[state=active]:text-white hover:text-[#1E40AF] transition-all"
            >
              <Bell className="h-4 w-4" />
              <span className="hidden sm:inline">Notificações</span>
            </TabsTrigger>
            <TabsTrigger 
              value="preferences" 
              className="py-3 gap-2 data-[state=active]:bg-[#1E40AF] data-[state=active]:text-white hover:text-[#1E40AF] transition-all"
            >
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">Preferências</span>
            </TabsTrigger>
          </TabsList>

          {/* --- ABA: CONTA --- */}
          <TabsContent value="account">
            <Card className="border-[#1E40AF]/20 shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                      <CardTitle className="text-[#1E40AF]">Informações Pessoais</CardTitle>
                      <CardDescription>
                      Gerencie seus dados de identificação e acadêmicos.
                      </CardDescription>
                  </div>
                  {!isEditing ? (
                      <Button 
                          onClick={() => setIsEditing(true)} 
                          variant="outline" 
                          className="border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF]/10"
                      >
                          <Pencil className="h-4 w-4 mr-2" /> Editar
                      </Button>
                  ) : (
                      <div className="flex gap-2">
                          <Button 
                              onClick={() => setIsEditing(false)} 
                              variant="ghost" 
                              className="text-red-500 hover:text-red-600 hover:bg-red-50"
                          >
                              <X className="h-4 w-4 mr-2" /> Cancelar
                          </Button>
                          <Button 
                              onClick={handleSave} 
                              className="bg-[#1E40AF] hover:bg-[#1E40AF]/90 text-white"
                          >
                              <Save className="h-4 w-4 mr-2" /> Salvar
                          </Button>
                      </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                      <Label htmlFor="name" className="text-[#1E40AF]">Nome Completo</Label>
                      <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="disabled:opacity-80 disabled:bg-gray-50 focus-visible:ring-[#1E40AF]"
                      />
                  </div>
                  <div className="grid gap-2">
                      <Label htmlFor="email" className="text-[#1E40AF]">E-mail</Label>
                      <Input
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="disabled:opacity-80 disabled:bg-gray-50 focus-visible:ring-[#1E40AF]"
                      />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="birthDate" className="text-[#1E40AF]">Data de Nascimento</Label>
                    <Input
                      id="birthDate"
                      name="birthDate"
                      type="date"
                      value={formData.birthDate}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="disabled:opacity-80 disabled:bg-gray-50 focus-visible:ring-[#1E40AF]"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone" className="text-[#1E40AF]">Telefone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="(00) 00000-0000"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="disabled:opacity-80 disabled:bg-gray-50 focus-visible:ring-[#1E40AF]"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                      <Label htmlFor="institution" className="text-[#1E40AF]">Instituição de Ensino</Label>
                      <Input
                      id="institution"
                      name="institution"
                      placeholder="Ex: Colégio Estadual..."
                      value={formData.institution}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="disabled:opacity-80 disabled:bg-gray-50 focus-visible:ring-[#1E40AF]"
                      />
                  </div>
                  <div className="grid gap-2">
                      <Label htmlFor="grade" className="text-[#1E40AF]">Ano / Série</Label>
                      <Input
                      id="grade"
                      name="grade"
                      placeholder="Ex: 3º Ano Ensino Médio"
                      value={formData.grade}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="disabled:opacity-80 disabled:bg-gray-50 focus-visible:ring-[#1E40AF]"
                      />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="bio" className="text-[#1E40AF]">Biografia</Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    placeholder="Conte um pouco sobre seus interesses e objetivos..."
                    className="min-h-[100px] disabled:opacity-80 disabled:bg-gray-50 focus-visible:ring-[#1E40AF]"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* --- ABA: PRIVACIDADE --- */}
          <TabsContent value="privacy">
            <Card className="border-[#1E40AF]/20 shadow-sm">
              <CardHeader>
                <CardTitle className="text-[#1E40AF]">Privacidade e Segurança</CardTitle>
                <CardDescription>
                  Gerencie sua senha e opções de login.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="current-password">Senha Atual</Label>
                      <div className="relative">
                          <Input 
                              id="current-password" 
                              type={showCurrentPassword ? "text" : "password"} 
                              placeholder="••••••••"
                              className="focus-visible:ring-[#1E40AF]"
                          />
                          <button
                              type="button"
                              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          >
                              {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="new-password">Nova Senha</Label>
                      <div className="relative">
                          <Input 
                              id="new-password" 
                              type={showNewPassword ? "text" : "password"}
                              placeholder="••••••••" 
                              className="focus-visible:ring-[#1E40AF]"
                          />
                          <button
                              type="button"
                              onClick={() => setShowNewPassword(!showNewPassword)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          >
                              {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                      <Input 
                          id="confirm-password" 
                          type="password"
                          placeholder="••••••••" 
                          className="focus-visible:ring-[#1E40AF]"
                      />
                    </div>
                </div>
              </CardContent>
              <CardFooter className="border-t bg-muted/50 px-6 py-4">
                <Button className="bg-[#1E40AF] hover:bg-[#1E40AF]/90 text-white">Atualizar Senha</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* --- ABA: NOTIFICAÇÕES --- */}
          <TabsContent value="notifications">
            <Card className="border-[#1E40AF]/20 shadow-sm">
              <CardHeader>
                <CardTitle className="text-[#1E40AF]">Notificações</CardTitle>
                <CardDescription>
                  Escolha como você quer ser avisado.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between space-x-2">
                  <div className="space-y-0.5">
                    <Label className="text-base font-semibold">Novos Cursos</Label>
                    <p className="text-sm text-muted-foreground">
                      E-mails sobre lançamentos.
                    </p>
                  </div>
                  <Switch
                    checked={preferences.emailNewCourses}
                    onCheckedChange={(v) => updatePreference("emailNewCourses", v)}
                    className="data-[state=checked]:bg-[#1E40AF]"
                  />
                </div>
                <div className="flex items-center justify-between space-x-2">
                  <div className="space-y-0.5">
                    <Label className="text-base font-semibold">Certificados</Label>
                    <p className="text-sm text-muted-foreground">
                      Avisos de emissão de certificados.
                    </p>
                  </div>
                  <Switch
                    checked={preferences.emailCertificates}
                    onCheckedChange={(v) => updatePreference("emailCertificates", v)}
                    className="data-[state=checked]:bg-[#1E40AF]"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* --- ABA: PREFERÊNCIAS --- */}
          <TabsContent value="preferences">
            <Card className="border-[#1E40AF]/20 shadow-sm">
              <CardHeader>
                <CardTitle className="text-[#1E40AF]">Configurações Gerais</CardTitle>
                <CardDescription>Ajustes do sistema e acessibilidade.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between space-x-2">
                  <div className="space-y-0.5">
                    <Label className="text-base font-semibold">Alto Contraste</Label>
                    <p className="text-sm text-muted-foreground">
                      Melhora a legibilidade.
                    </p>
                  </div>
                  <Switch
                    checked={preferences.highContrast}
                    onCheckedChange={(v) => updatePreference("highContrast", v)}
                    className="data-[state=checked]:bg-[#1E40AF]"
                  />
                </div>

                <div className="flex items-center justify-between space-x-2">
                  <div className="space-y-0.5">
                    <Label className="text-base font-semibold">Leitor de Tela</Label>
                    <p className="text-sm text-muted-foreground">
                      Otimiza para leitores de tela.
                    </p>
                  </div>
                  <Switch
                    checked={preferences.screenReader}
                    onCheckedChange={(v) => updatePreference("screenReader", v)}
                    className="data-[state=checked]:bg-[#1E40AF]"
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between space-x-2">
                  <div className="space-y-0.5">
                    <Label className="text-base font-semibold">Modo Escuro (Dark Mode)</Label>
                    <p className="text-sm text-muted-foreground">
                      Alternar entre tema claro e escuro.
                    </p>
                  </div>
                  <Switch
                    checked={preferences.theme === 'dark'}
                    onCheckedChange={(v) => updatePreference("theme", v ? "dark" : "light")}
                    className="data-[state=checked]:bg-[#1E40AF]"
                  />
                </div>
                
                <div className="flex items-center justify-between space-x-2">
                  <div className="space-y-0.5">
                    <Label className="text-base font-semibold">Perfil Público</Label>
                    <p className="text-sm text-muted-foreground">
                      Permitir que outros vejam suas conquistas.
                    </p>
                  </div>
                  <Switch
                    checked={preferences.publicProfile}
                    onCheckedChange={(v) => updatePreference("publicProfile", v)}
                    className="data-[state=checked]:bg-[#1E40AF]"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}