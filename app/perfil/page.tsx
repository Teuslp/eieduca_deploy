"use client"

import { useState } from "react"
import {
  User, Bell, Lock, HelpCircle, Camera, Shield, Key, CheckCircle,
  Save, Mail
} from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
import { usePreferences } from "../contexts/PreferencesContext"
import { PreferencesIndicator } from "../../components/PreferencesIndicator"
import { Navigation } from "@/components/navigation"

export default function PerfilPage() {
  const [activeTab, setActiveTab] = useState("personal")
  const { preferences, updatePreference } = usePreferences()

  const handleSave = () => {
    toast.success("Configurações salvas com sucesso!")
  }

  return (
    <>
      {/* MENU SUPERIOR PADRÃO */}
      <Navigation />

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold sm:text-3xl">Meu Perfil</h1>
          <p className="text-sm text-muted-foreground sm:text-base">
            Gerencie suas informações pessoais e configurações da conta
          </p>
        </div>

        <PreferencesIndicator />

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">

          {/* TABS MENU CENTRALIZADO */}
          <TabsList
            className="
              flex w-full flex-wrap justify-center gap-2 
              bg-[#1E40AF]/10 p-3 rounded-xl
              border border-[#1E40AF]/30
            "
          >
            <TabsTrigger
              value="personal"
              className="flex items-center gap-2 data-[state=active]:bg-[#1E40AF] data-[state=active]:text-white"
            >
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Perfil</span>
            </TabsTrigger>

            <TabsTrigger
              value="privacy"
              className="flex items-center gap-2 data-[state=active]:bg-[#1E40AF] data-[state=active]:text-white"
            >
              <Lock className="w-4 h-4" />
              <span className="hidden sm:inline">Privacidade</span>
            </TabsTrigger>

            <TabsTrigger
              value="notifications"
              className="flex items-center gap-2 data-[state=active]:bg-[#1E40AF] data-[state=active]:text-white"
            >
              <Bell className="w-4 h-4" />
              <span className="hidden sm:inline">Notificações</span>
            </TabsTrigger>

            <TabsTrigger
              value="help"
              className="flex items-center gap-2 data-[state=active]:bg-[#1E40AF] data-[state=active]:text-white"
            >
              <HelpCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Ajuda</span>
            </TabsTrigger>
          </TabsList>


          {/* TAB: PESSOAL */}
          <TabsContent value="personal" className="space-y-6">

            {/* FOTO */}
            <Card className="border border-[#1E40AF]/40 shadow-sm rounded-xl">
              <CardHeader>
                <CardTitle>Foto de Perfil</CardTitle>
                <CardDescription className="text-[#64748B]">
                  Atualize sua foto de perfil e informações públicas
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="" alt="Avatar" />
                    <AvatarFallback className="bg-[#1E40AF] text-white text-xl">EU</AvatarFallback>
                  </Avatar>

                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="border-[#1E40AF]/40">
                      <Camera className="w-4 h-4 mr-2" />
                      Alterar foto
                    </Button>
                    <p className="text-xs text-muted-foreground">JPG, PNG ou GIF. Máx 2MB.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* INFO PESSOAIS */}
            <Card className="border border-[#1E40AF]/40 shadow-sm rounded-xl">
              <CardHeader>
                <CardTitle>Informações Pessoais</CardTitle>
                <CardDescription className="text-[#64748B]">Mantenha seus dados atualizados</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Nome completo</Label>
                    <Input id="name" />
                  </div>

                  <div>
                    <Label>Email</Label>
                    <div className="flex gap-2">
                      <Input type="email" />
                      <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300">
                        <CheckCircle className="w-3 h-3 mr-1" /> Verificado
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" placeholder="(00) 00000-0000" />
                  </div>

                  <div>
                    <Label htmlFor="birthdate">Data de nascimento</Label>
                    <Input id="birthdate" type="date" />
                  </div>

                  <div>
                    <Label htmlFor="school">Instituição</Label>
                    <Input id="school" />
                  </div>

                  <div>
                    <Label htmlFor="grade">Ano/Série</Label>
                    <Select defaultValue="2ano">
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1ano">1º ano EM</SelectItem>
                        <SelectItem value="2ano">2º ano EM</SelectItem>
                        <SelectItem value="3ano">3º ano EM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="bio">Sobre mim</Label>
                  <Textarea
                    id="bio"
                    placeholder="Conte um pouco sobre você..."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="flex justify-end">
                  <Button onClick={handleSave} className="bg-[#1E40AF] text-white hover:bg-[#1E40AF]/90">
                    <Save className="w-4 h-4 mr-2" /> Salvar alterações
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>


          {/* TAB: PRIVACIDADE */}
          <TabsContent value="privacy" className="space-y-6">
            <Card className="border border-[#1E40AF]/40 shadow-sm rounded-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Segurança da Conta
                </CardTitle>

                <CardDescription className="text-base text-[#64748B]">
                  Gerencie a segurança e privacidade da sua conta
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">

                {/* BLOCO ALTERAR SENHA */}
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <Label>Alterar senha</Label>
                    <p className="text-sm text-[#64748B]">
                      Atualize sua senha regularmente
                    </p>
                  </div>

                  <Button variant="outline" size="sm" className="border-[#1E40AF]/40">
                    <Key className="w-4 h-4 mr-1" /> Alterar
                  </Button>
                </div>

                <div className="w-full h-px bg-[#1E40AF80] my-4" />

                {/* BLOCO AUTENTICAÇÃO 2F */}
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <Label>Autenticação em duas etapas</Label>
                    <p className="text-sm text-[#64748B]">
                      Adicione uma camada extra de segurança
                    </p>
                  </div>

                  <Button variant="outline" size="sm" className="border-[#1E40AF]/40">
                    <Shield className="w-4 h-4 mr-1" /> Configurar
                  </Button>
                </div>

              </CardContent>
            </Card>
          </TabsContent>


          {/* NOTIFICAÇÕES */}
          <TabsContent value="notifications" className="space-y-6">
            <Card className="border border-[#1E40AF]/40 shadow-sm rounded-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold"> Notificações por Email </CardTitle>
                <CardDescription className="text-base text-[#64748B]">
                  Escolha quais emails você deseja receber
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">

                {/* ITEM 1 */}
                <div className="flex items-start justify-between py-3">
                  <div>
                    <p className="font-medium">Novos cursos</p>
                    <p className="text-sm text-[#64748B]">Receber notificação sobre novos cursos</p>
                  </div>
                  <Switch
                    checked={preferences.emailNewCourses}
                    onCheckedChange={(checked) => updatePreference("emailNewCourses", checked)}/>
                </div>

                <div className="w-full h-px bg-[#1E40AF]/30" />

                {/* ITEM 2 */}
                <div className="flex items-start justify-between py-3">
                  <div>
                    <p className="font-medium">Atualizações de cursos</p>
                    <p className="text-sm text-[#64748B]">Novos conteúdos em cursos matriculados</p>
                  </div>
                  <Switch
                    checked={preferences.emailCourseUpdates}
                    onCheckedChange={(checked) => updatePreference("emailCourseUpdates", checked)}/>
                </div>

                <div className="w-full h-px bg-[#1E40AF]/30" />

                {/* ITEM 3 */}
                <div className="flex items-start justify-between py-3">
                  <div>
                    <p className="font-medium">Certificados conquistados</p>
                    <p className="text-sm text-[#64748B]">Notificação ao completar um curso</p>
                  </div>
                  <Switch
                    checked={preferences.emailCertificates}
                    onCheckedChange={(checked) => updatePreference("emailCertificates", checked)}/>
                </div>

                <div className="w-full h-px bg-[#1E40AF]/30" />

                {/* ITEM 4 */}
                <div className="flex items-start justify-between py-3">
                  <div>
                    <p className="font-medium">Promoções e eventos</p>
                    <p className="text-sm text-[#64748B]">Informações sobre eventos e ofertas</p>
                  </div>
                  <Switch
                    checked={preferences.emailPromotions}
                    onCheckedChange={(checked) => updatePreference("emailPromotions", checked)}/>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* TAB: AJUDA */}
          <TabsContent value="help" className="space-y-6">

            {/* CENTRAL DE AJUDA */}
            <Card className="border border-[#1E40AF]/40 shadow-sm rounded-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Central de Ajuda</CardTitle>
                <CardDescription className="text-[#64748B]">
                  Encontre respostas para suas dúvidas
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">

                {/* FAQ */}
                <div className="flex items-center justify-between p-4 rounded-lg border border-[#1E40AF]/40 shadow-sm">
                  <div>
                    <p className="font-medium">Perguntas Frequentes (FAQ)</p>
                    <p className="text-sm text-[#64748B]">Encontre respostas rápidas</p>
                  </div>
                  <Button className="bg-[#1E40AF] text-white hover:bg-[#1E40AF]/90">Ver</Button>
                </div>

                {/* Entrar em contato */}
                <div className="flex items-center justify-between p-4 rounded-lg border border-[#1E40AF]/40 shadow-sm">
                  <div>
                    <p className="font-medium">Entrar em contato</p>
                    <p className="text-sm text-[#64748B]">Fale com nossa equipe de suporte</p>
                  </div>
                  <Button className="bg-[#1E40AF] text-white hover:bg-[#1E40AF]/90">Enviar</Button>
                </div>

                {/* Telefone */}
                <div className="flex items-center justify-between p-4 rounded-lg border border-[#1E40AF]/40 shadow-sm">
                  <div>
                    <p className="font-medium">Suporte por e-mail</p>
                    <p className="text-sm text-[#64748B]">
                      eieducaa@gmail.com – Seg à Sex, 10h às 18h
                    </p>
                  </div>
                  <Button className="bg-[#1E40AF] text-white hover:bg-[#1E40AF]/90">
                    Ligar
                  </Button>
                </div>

              </CardContent>
            </Card>

            {/* FEEDBACK E SUGESTÕES */}
            <Card className="border border-[#1E40AF]/40 shadow-sm rounded-xl">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Feedback e Sugestões</CardTitle>
                <CardDescription className="text-[#64748B]">
                  Ajude-nos a melhorar a plataforma
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">

                <Label className="font-medium text-[#1E40AF]">Sua opinião é importante</Label>

                <Textarea
                  placeholder="Compartilhe sugestões, elogios ou problemas encontrados..."
                  className="min-h-[120px]"
                />

                <Button className="w-full bg-[#1E40AF] text-white hover:bg-[#1E40AF]/90">
                  Enviar feedback
                </Button>

              </CardContent>
            </Card>

            {/* SOBRE A PLATAFORMA */}
            <Card className="border border-[#1E40AF]/40 shadow-sm rounded-xl">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-black">
                  Sobre a Plataforma
                </CardTitle>
                <CardDescription className="text-[#64748B]">
                  Informações sobre o EiEduca+
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">

                {/* Termos de Uso */}
                <div className="flex items-start justify-between py-2 cursor-pointer">
                  <div>
                    <p className="font-medium text-[#1E40AF]">Termos de Uso</p>
                    <p className="text-sm text-[#64748B]">Leia nossos termos e condições</p>
                  </div>
                </div>

                <div className="w-full h-px bg-[#1E40AF]/30" />

                {/* Política de Privacidade */}
                <div className="flex items-start justify-between py-2 cursor-pointer">
                  <div>
                    <p className="font-medium text-[#1E40AF]">Política de Privacidade</p>
                    <p className="text-sm text-[#64748B]">Saiba como tratamos seus dados</p>
                  </div>
                </div>

                <div className="w-full h-px bg-[#1E40AF]/30" />

                {/* Declaração de Acessibilidade */}
                <div className="flex items-start justify-between py-2 cursor-pointer">
                  <div>
                    <p className="font-medium text-[#1E40AF]">Declaração de Acessibilidade</p>
                    <p className="text-sm text-[#64748B]">Compromisso com acessibilidade digital</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

        </Tabs>
      </div>
    </>
  )
}