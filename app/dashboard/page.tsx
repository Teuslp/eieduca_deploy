import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

import { Navigation } from "@/components/navigation"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

import {
  BookOpen,
  TrendingUp,
  Award,
  Clock,
  ArrowRight,
  Users,
  Brain,
  Target,
} from "lucide-react"

import Link from "next/link"

export default async function DashboardPage() {
  // 1. Sessão
  const session = await getServerSession(authOptions)

  // 2. Proteção
  if (!session) {
    redirect("/")
  }

  // 3. Primeiro nome
  const firstName = session.user?.name?.split(" ")[0] || "Aluno"

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827]">
      <Navigation />

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        {/* HEADER */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Olá, {firstName}! 👋
          </h1>
          <p className="mt-2 text-sm text-[#6B7280] sm:text-base">
            Continue sua jornada de aprendizado inclusivo e personalizado
          </p>
        </div>

        {/* STATS */}
        <div className="mb-6 grid grid-cols-2 gap-3 sm:mb-8 sm:gap-4 lg:grid-cols-4">
          <Card className="border border-[#E5E7EB] shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-[16px] font-medium">
                Cursos Ativos
              </CardTitle>
              <BookOpen className="h-4 w-4 text-[#1E40AF]" />
            </CardHeader>
            <CardContent>
              <div className="text-[28px] font-bold">4</div>
              <p className="text-[15px] text-[#6B7280]">
                2 novos esta semana
              </p>
            </CardContent>
          </Card>

          <Card className="border border-[#E5E7EB] shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-[16px] font-medium">
                Progresso Geral
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-[#16A34A]" />
            </CardHeader>
            <CardContent>
              <div className="text-[28px] font-bold">68%</div>
              <p className="text-[15px] text-[#16A34A]">
                +12% desde o mês passado
              </p>
            </CardContent>
          </Card>

          <Card className="border border-[#E5E7EB] shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-[16px] font-medium">
                Certificados
              </CardTitle>
              <Award className="h-4 w-4 text-[#1E40AF]" />
            </CardHeader>
            <CardContent>
              <div className="text-[28px] font-bold">7</div>
              <p className="text-[15px] text-[#6B7280]">
                3 em andamento
              </p>
            </CardContent>
          </Card>

          <Card className="border border-[#E5E7EB] shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-[16px] font-medium">
                Horas de Estudo
              </CardTitle>
              <Clock className="h-4 w-4 text-[#1E40AF]" />
            </CardHeader>
            <CardContent>
              <div className="text-[28px] font-bold">42h</div>
              <p className="text-[15px] text-[#6B7280]">Este mês</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {/* MAIN */}
          <div className="space-y-6 lg:col-span-2">
            {/* CONTINUE */}
            <section>
              <h2 className="mb-3 text-xl font-semibold">
                Continue Aprendendo
              </h2>

              <div className="space-y-4">
                {/* CARD 1 */}
                <Card className="border border-[#E5E7EB] shadow-sm overflow-hidden">
                  <div className="flex flex-col sm:flex-row">
                    <div className="flex items-center justify-center p-4 sm:w-40 bg-primary/10 rounded-xl">
                      <Brain className="h-10 w-10 text-[#1E40AF]" />
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <CardTitle className="mb-2 text-lg">
                          Inteligência Artificial na Educação
                        </CardTitle>
                        <CardDescription className="mb-4">
                          Aprenda como a IA pode personalizar o ensino e promover
                          inclusão
                        </CardDescription>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-[#6B7280]">Progresso</span>
                            <span className="font-semibold">65%</span>
                          </div>
                          <Progress value={65} className="h-2" />
                        </div>
                      </div>

                      <Button
                        className="mt-4 bg-[#1E40AF] hover:bg-[#1E40AF]/80 text-white"
                        asChild
                      >
                        <Link href="/cursos">
                          Continuar
                          <ArrowRight className="ml-2 h-4 w-4 text-white" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>

                {/* CARD 2 */}
                <Card className="border border-[#E5E7EB] shadow-sm overflow-hidden">
                  <div className="flex flex-col sm:flex-row">
                    <div className="flex items-center justify-center p-4 sm:w-40 bg-secondary/10 rounded-xl">
                      <Users className="h-10 w-10 text-[#1E40AF]" />
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <CardTitle className="mb-2 text-lg">
                          Metodologias Ativas de Ensino
                        </CardTitle>
                        <CardDescription className="mb-4">
                          Explore técnicas inovadoras para engajar estudantes
                        </CardDescription>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-[#6B7280]">Progresso</span>
                            <span className="font-semibold">40%</span>
                          </div>
                          <Progress value={40} className="h-2" />
                        </div>
                      </div>

                      <Button
                        className="mt-4 bg-[#1E40AF] hover:bg-[#1E40AF]/80 text-white"
                        asChild
                      >
                        <Link href="/cursos">
                          Continuar
                          <ArrowRight className="ml-2 h-4 w-4 text-white" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            {/* RECOMENDADOS */}
            <section>
              <h2 className="mb-3 text-xl font-semibold">
                Recomendados para Você
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="border border-[#E5E7EB] shadow-sm">
                  <CardHeader>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-[#E8EDFF]">
                      <Target className="h-6 w-6 text-[#1E40AF]" />
                    </div>
                    <CardTitle>Tecnologia Assistiva</CardTitle>
                    <CardDescription>
                      Ferramentas e recursos para acessibilidade digital
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      className="w-full border-[#1E40AF] text-[#1E40AF]"
                      variant="outline"
                      asChild
                    >
                      <Link href="/cursos">Explorar Curso</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border border-[#E5E7EB] shadow-sm">
                  <CardHeader>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-[#E8EDFF]">
                      <BookOpen className="h-6 w-6 text-[#1E40AF]" />
                    </div>
                    <CardTitle>Gestão Educacional</CardTitle>
                    <CardDescription>
                      Práticas de qualidade e inovação institucional
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      className="w-full border-[#1E40AF] text-[#1E40AF]"
                      variant="outline"
                      asChild
                    >
                      <Link href="/cursos">Explorar Curso</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">
            <Card className="bg-[#1E40AF] text-white">
              <CardHeader>
                <CardTitle>Precisa de Ajuda?</CardTitle>
                <CardDescription className="text-white/80">
                  Nossa equipe está pronta para apoiar sua jornada
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-white text-[#1E40AF] hover:bg-white/90">
                  Falar com Suporte
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
