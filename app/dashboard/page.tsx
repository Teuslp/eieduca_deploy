"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpen, TrendingUp, Award, Clock, ArrowRight, Users, Brain, Target } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827]">
      <Navigation />

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        
        {/* HEADER */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl font-bold sm:text-3xl">Bem-vindo</h1>
          <p className="mt-2 text-sm text-[#6B7280] sm:text-base">
            Continue sua jornada de aprendizado inclusivo e personalizado
          </p>
        </div>

        {/* STATS */}
        <div className="mb-6 grid grid-cols-2 gap-3 sm:mb-8 sm:gap-4 lg:grid-cols-4">
          <Card className="border border-[#E5E7EB] shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-[16px] font-medium text-[#111827]">Cursos Ativos</CardTitle>
              <BookOpen className="h-4 w-4 text-[#1E40AF]" />
            </CardHeader>
            <CardContent>
              <div className="text-[28px] font-bold text-[#111827]">4</div>
              <p className="text-[15px] text-[#6B7280]">2 novos esta semana</p>
            </CardContent>
          </Card>

          <Card className="border border-[#E5E7EB] shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-[16px] font-medium text-[#111827]">Progresso Geral</CardTitle>
              <TrendingUp className="h-4 w-4 text-[#16A34A]" />
            </CardHeader>
            <CardContent>
              <div className="text-[28px] font-bold text-[#111827]">68%</div>
              <p className="text-[15px] text-[#16A34A]">+12% desde o mês passado</p>
            </CardContent>
          </Card>

          <Card className="border border-[#E5E7EB] shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-[16px] font-medium text-[#111827]">Certificados</CardTitle>
              <Award className="h-4 w-4 text-[#1E40AF]" />
            </CardHeader>
            <CardContent>
              <div className="text-[28px] font-bold text-[#111827]">7</div>
              <p className="text-[15px] text-[#6B7280]">3 em andamento</p>
            </CardContent>
          </Card>

          <Card className="border border-[#E5E7EB] shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-[16px] font-medium text-[#111827]">Horas de Estudo</CardTitle>
              <Clock className="h-4 w-4 text-[#1E40AF]" />
            </CardHeader>
            <CardContent>
              <div className="text-[28px] font-bold text-[#111827]">42h</div>
              <p className="text-[15px] text-[#6B7280]">Este mês</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          
          {/* MAIN CONTENT */}
          <div className="space-y-6 lg:col-span-2 lg:space-y-8">
            
            {/* CONTINUE APRENDENDO */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#111827]">Continue Aprendendo</h2>

              <div className="space-y-4">

                {/* CARD 1 */}
                <Card className="border border-[#E5E7EB] shadow-sm overflow-hidden">
                  <div className="flex flex-col sm:flex-row">
                  <div className="bg-primary/10 flex items-center justify-center p-4 rounded-xl sm:w-40">
                    <Brain className="h-10 w-10 text-[#1E40AF]" />
                  </div>


                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <CardTitle className="mb-2 text-lg text-[#111827]">
                          Inteligência Artificial na Educação
                        </CardTitle>

                        <CardDescription className="mb-4 text-sm text-[#6B7280]">
                          Aprenda como a IA pode personalizar o ensino e promover inclusão
                        </CardDescription>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-[#6B7280]">Progresso</span>
                            <span className="font-semibold text-[#111827]">65%</span>
                          </div>
                          <Progress value={65} className="h-2" />
                        </div>
                      </div>

                      <Button
                        className="mt-4 w-full sm:w-auto bg-[#1E40AF] text-white hover:bg-[#1E40AF]/80"
                        asChild
                      >
                        <Link href="/cursos">
                          Continuar
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>

                {/* CARD 2 */}
                <Card className="border border-[#E5E7EB] shadow-sm overflow-hidden">
                  <div className="flex flex-col sm:flex-row">
                    <div className="bg-secondary/10 flex items-center justify-center p-4 rounded-xl sm:w-40">
                    <Users className="h-10 w-10 text-[#1E40AF]" />
                  </div>


                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <CardTitle className="mb-2 text-lg text-[#111827]">
                          Metodologias Ativas de Ensino
                        </CardTitle>

                        <CardDescription className="mb-4 text-sm text-[#6B7280]">
                          Explore técnicas inovadoras para engajar estudantes
                        </CardDescription>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-[#6B7280]">Progresso</span>
                            <span className="font-semibold text-[#111827]">40%</span>
                          </div>
                          <Progress value={40} className="h-2" />
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        className="mt-4 w-full sm:w-auto bg-[#1E40AF] text-white hover:bg-[#1E40AF]/80"
                        asChild>

                        <Link href="/cursos">
                          Continuar
                          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>

              </div>
            </section>

            {/* RECOMENDADOS */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#111827]">Recomendados para Você</h2>

              <div className="grid gap-4 sm:grid-cols-2">
                
                <Card className="border border-[#E5E7EB] shadow-sm">
                  <CardHeader className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#E8EDFF] mb-3">
                      <Target className="h-6 w-6 text-[#1E40AF]" />
                    </div>
                    <CardTitle className="text-lg text-[#111827]">Tecnologia Assistiva</CardTitle>
                    <CardDescription className="text-sm text-[#6B7280]">
                      Ferramentas e recursos para acessibilidade digital
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-6 pt-2">
                    <Button
                      variant="outline"
                      className="w-full border-[#1E40AF] text-[#1E40AF] hover:bg-[#14B8A6]/90"
                      asChild
                    >
                      <Link href="/cursos">Explorar Curso</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border border-[#E5E7EB] shadow-sm">
                  <CardHeader className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#E8EDFF] mb-3">
                      <BookOpen className="h-6 w-6 text-[#1E40AF]" />
                    </div>
                    <CardTitle className="text-lg text-[#111827]">
                      Gestão Educacional
                    </CardTitle>
                    <CardDescription className="text-sm text-[#6B7280]">
                      Práticas de qualidade e inovação institucional
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-6 pt-2">
                    <Button
                      variant="outline"
                      className="w-full border-[#1E40AF] text-[#1E40AF] hover:bg-[#14B8A6]/90"
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
            
            {/* AÇÕES RÁPIDAS */}
            <Card className="border border-[#E5E7EB] shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg text-[#111827]">Ações Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start border-[#1E40AF] text-[#1E40AF] hover:bg-[#14B8A6]/90"
                  asChild
                >
                  <Link href="/cursos">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Explorar Cursos
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start border-[#1E40AF] text-[#1E40AF] hover:bg-[#14B8A6]/90"
                  asChild
                >
                  <Link href="/biblioteca">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Acessar Biblioteca
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start border-[#1E40AF] text-[#1E40AF] hover:bg-[#14B8A6]/90"
                  asChild
                >
                  <Link href="/certificacao">
                    <Award className="mr-2 h-4 w-4" />
                    Meus Certificados
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* ATIVIDADE RECENTE */}
            <Card className="border border-[#E5E7EB] shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg text-[#111827]">Atividade Recente</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8EDFF]">
                    <Award className="h-4 w-4 text-[#1E40AF]" />
                  </div>
                  <div className="flex-1 text-sm">
                    <p className="font-semibold text-[#111827]">Certificado conquistado</p>
                    <p className="text-xs text-[#6B7280]">Fundamentos de IA - Há 2 dias</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8EDFF]">
                    <BookOpen className="h-4 w-4 text-[#1E40AF]" />
                  </div>
                  <div className="flex-1 text-sm">
                    <p className="font-semibold text-[#111827]">Novo curso iniciado</p>
                    <p className="text-xs text-[#6B7280]">Metodologias Ativas - Há 3 dias</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8EDFF]">
                    <TrendingUp className="h-4 w-4 text-[#1E40AF]" />
                  </div>
                  <div className="flex-1 text-sm">
                    <p className="font-semibold text-[#111827]">Meta alcançada</p>
                    <p className="text-xs text-[#6B7280]">40h de estudo - Há 5 dias</p>
                  </div>
                </div>

              </CardContent>
            </Card>

            {/* SUPORTE */}
            <Card className="bg-[#1E40AF] text-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Precisa de Ajuda?</CardTitle>
                <CardDescription className="text-white/80">
                  Nossa equipe está pronta para apoiar sua jornada
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="w-full bg-white text-[#1E40AF] hover:bg-white/90">
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
