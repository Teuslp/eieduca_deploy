"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, Download, Share2, Calendar, CheckCircle2, Clock, TrendingUp, Target } from "lucide-react"

const completedCertificates = [
  {
    id: 1,
    title: "Fundamentos de Inteligência Artificial",
    course: "IA na Educação - Módulo 1",
    completedDate: "15 de Janeiro, 2025",
    issuer: "EiEduca+",
    credentialId: "EDU-2025-001234",
    skills: ["IA", "Machine Learning", "Educação Digital"],
  },
  {
    id: 2,
    title: "Metodologias Ativas Aplicadas",
    course: "Pedagogia Inovadora",
    completedDate: "08 de Janeiro, 2025",
    issuer: "EiEduca+",
    credentialId: "EDU-2025-001189",
    skills: ["Pedagogia", "Ensino Ativo", "Engajamento"],
  },
  {
    id: 3,
    title: "Acessibilidade Digital Básica",
    course: "Tecnologia Assistiva - Nível 1",
    completedDate: "22 de Dezembro, 2024",
    issuer: "EiEduca+",
    credentialId: "EDU-2024-009876",
    skills: ["Acessibilidade", "WCAG", "Inclusão Digital"],
  },
]

const inProgressCertificates = [
  {
    id: 4,
    title: "IA Avançada na Educação",
    course: "Inteligência Artificial na Educação",
    progress: 65,
    estimatedCompletion: "Março 2025",
    remainingModules: 3,
  },
  {
    id: 5,
    title: "Gestão Educacional Moderna",
    course: "Gestão Educacional Inovadora",
    progress: 30,
    estimatedCompletion: "Abril 2025",
    remainingModules: 7,
  },
  {
    id: 6,
    title: "Avaliação Formativa",
    course: "Metodologias de Avaliação",
    progress: 15,
    estimatedCompletion: "Maio 2025",
    remainingModules: 9,
  },
]

const stats = [
  {
    label: "Certificados Conquistados",
    value: "7",
    icon: Award,
  },
  {
    label: "Em Progresso",
    value: "3",
    icon: Clock,
  },
  {
    label: "Taxa de Conclusão",
    value: "92%",
    icon: TrendingUp,
  },
  {
    label: "Próxima Meta",
    value: "10",
    icon: Target,
  },
]

export default function CertificacaoPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navigation />

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">

        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl font-bold sm:text-3xl text-[#1E293B]">Meus Certificados</h1>
          <p className="mt-2 text-sm sm:text-base text-[#64748B]">
            Acompanhe seu progresso e conquistas
          </p>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.label} className="border-[#E2E8F0]">
                <CardHeader className="flex flex-row items-center justify-between p-4 pb-2">
                  <CardTitle className="text-sm font-medium text-[#1E293B]">{stat.label}</CardTitle>
                  <Icon className="h-5 w-5 text-[#1E40AF]" />
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="text-2xl font-bold text-[#1E293B]">{stat.value}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="completed" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 bg-white rounded-lg shadow-sm drop-shadow-sm border-none">
            <TabsTrigger
              value="completed"
              className="data-[state=active]:bg-[#1E40AF] data-[state=active]:text-white text-[#1E293B]"
            >
              Conquistados ({completedCertificates.length})
            </TabsTrigger>
            <TabsTrigger
              value="in-progress"
              className="data-[state=active]:bg-[#1E40AF] data-[state=active]:text-white text-[#1E293B]"
            >
              Em Progresso ({inProgressCertificates.length})
            </TabsTrigger>
          </TabsList>

          {/* --- COMPLETOS --- */}
          <TabsContent value="completed">
            <div className="grid gap-6 md:grid-cols-2">

              {completedCertificates.map((cert) => (
                <Card key={cert.id} className="overflow-hidden border-[#E2E8F0]">
                  <div
                    className="p-6 border-b border-[#1E40AF]/20 bg-white"
                    style={{
                      backgroundImage: "url('/gradient-card.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#1E40AF]">
                        <Award className="h-6 w-6 text-white" />
                      </div>

                      <Badge className="bg-[#1E40AF] text-white px-2">
                        <CheckCircle2 className="h-3 w-3 mr-1" /> Concluído
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold text-[#1E293B]">{cert.title}</h3>
                    <p className="text-sm mt-1 text-[#64748B]">{cert.course}</p>
                  </div>

                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2 text-sm text-[#64748B]">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-[#1E40AF]" />
                        Concluído em {cert.completedDate}
                      </div>

                      <div><span className="font-medium text-[#1E293B]">ID:</span> {cert.credentialId}</div>
                      <div><span className="font-medium text-[#1E293B]">Emissor:</span> {cert.issuer}</div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="border-[#1E40AF] text-[#1E40AF] text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF]/10"
                      >
                        <Download className="h-4 w-4 mr-2" /> Baixar PDF
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF]/10"
                      >
                        <Share2 className="h-4 w-4 mr-2" /> Compartilhar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

            </div>
          </TabsContent>

          {/* --- EM PROGRESSO --- */}
          <TabsContent value="in-progress">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {inProgressCertificates.map((cert) => (
                <Card key={cert.id} className="border-[#E2E8F0]">
                  <CardHeader className="p-6 border-b border-[#1E40AF]/20">
                    <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-[#1E40AF]/10">
                      <Clock className="h-6 w-6 text-[#1E40AF]" />
                    </div>
                    <CardTitle className="mt-3 text-lg text-[#1E293B]">{cert.title}</CardTitle>
                    <CardDescription className="text-sm text-[#64748B]">{cert.course}</CardDescription>
                  </CardHeader>

                  <CardContent className="p-6 space-y-4">
                    <div>
                      <div className="flex justify-between text-sm text-[#64748B]">
                        <span>Progresso</span>
                        <span className="font-medium text-[#1E293B]">{cert.progress}%</span>
                      </div>
                      <Progress value={cert.progress} className="h-2 bg-[#E2E8F0]" />
                    </div>

                    <div className="space-y-2 text-sm text-[#64748B]">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-[#1E40AF]" />
                        Conclusão prevista: {cert.estimatedCompletion}
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-[#1E40AF]" />
                        {cert.remainingModules} módulos restantes
                      </div>
                    </div>

                    <Button className="w-full bg-[#1E40AF] text-white hover:bg-[#1E40AF]/90">
                      Continuar Curso
                    </Button>
                  </CardContent>
                </Card>
              ))}

            </div>
          </TabsContent>
        </Tabs>

        {/* Banner FINAL COM GRADIENTE */}
        {/* Banner FINAL COM GRADIENTE */}
        <Card
          className="mt-8 overflow-hidden border-[#1E40AF]/20"
          style={{
            background: "linear-gradient(135deg, #14B8A6, #1E40AF)",
          }}
        >
          <CardContent className="p-8 text-center text-white bg-transparent">
            <div className="w-full flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="h-16 w-16 flex items-center justify-center rounded-full bg-[#1E40AF]">
                <Award className="h-8 w-8 text-white" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold">Continue sua jornada de aprendizado!</h3>
                <p className="text-sm mt-1">
                  Você está no caminho certo. Continue se dedicando e conquiste mais certificados!
                </p>
              </div>

              <Button size="lg" className="bg-white text-[#1E40AF] hover:bg-white/90">
                Explorar Cursos
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}