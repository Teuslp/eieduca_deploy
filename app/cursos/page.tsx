"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Search, Brain, Users, Target, Sparkles, Clock, BookOpen, Filter, Star, Download} from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Inteligência Artificial na Educação",
    description: "Aprenda como a IA pode personalizar o ensino e promover inclusão digital",
    category: "IA e Tecnologia",
    level: "Intermediário",
    duration: "8 semanas",
    progress: 65,
    enrolled: true,
    icon: Brain,
    color: "primary",
    rating: 4.8,
    downloads: 120
  },
  {
    id: 2,
    title: "Metodologias Ativas de Ensino",
    description: "Explore técnicas inovadoras para engajar estudantes e promover aprendizado ativo",
    category: "Pedagogia",
    level: "Básico",
    duration: "6 semanas",
    progress: 40,
    enrolled: true,
    icon: Users,
    color: "secondary",
    rating: 4.5,
    downloads: 85
  },
  {
    id: 3,
    title: "Tecnologia Assistiva",
    description: "Ferramentas e recursos para promover acessibilidade e inclusão digital",
    category: "Acessibilidade",
    level: "Intermediário",
    duration: "10 semanas",
    progress: 0,
    enrolled: false,
    icon: Target,
    color: "accent",
    rating: 4.9,
    downloads: 180
  },
  {
    id: 4,
    title: "Gestão Educacional Inovadora",
    description: "Práticas de qualidade e inovação para instituições de ensino",
    category: "Gestão",
    level: "Avançado",
    duration: "12 semanas",
    progress: 0,
    enrolled: false,
    icon: Sparkles,
    color: "primary",
    rating: 4.7,
    downloads: 140
  },
  {
    id: 5,
    title: "Práticas de Inclusão Escolar",
    description: "Estratégias reais para criar salas de aula inclusivas",
    category: "Inclusão",
    level: "Básico",
    duration: "8 semanas",
    progress: 0,
    enrolled: false,
    icon: Users,
    color: "secondary",
    rating: 4.6,
    downloads: 95
  },
  {
    id: 6,
    title: "Educação Inclusiva Avançada",
    description: "Aprofunde seus conhecimentos e implemente ações inclusivas",
    category: "Inclusão",
    level: "Avançado",
    duration: "10 semanas",
    progress: 0,
    enrolled: false,
    icon: Brain,
    color: "primary",
    rating: 4.9,
    downloads: 160
  },
  {
    id: 7,
    title: "Avaliação Formativa na Prática",
    description: "Técnicas para acompanhar o progresso real do estudante",
    category: "Avaliação",
    level: "Intermediário",
    duration: "6 semanas",
    progress: 0,
    enrolled: false,
    icon: Target,
    color: "accent",
    rating: 4.6,
    downloads: 72
  },
  {
    id: 8,
    title: "Avaliação Inclusiva Avançada",
    description: "Estratégias modernas para avaliar respeitando diferentes estilos",
    category: "Avaliação",
    level: "Avançado",
    duration: "12 semanas",
    progress: 0,
    enrolled: false,
    icon: Sparkles,
    color: "primary",
    rating: 4.8,
    downloads: 110
  },
]

const categories = ["Todos", "IA e Tecnologia", "Pedagogia", "Acessibilidade", "Gestão", "Inclusão", "Avaliação"]

export default function CursosPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "Todos" || course.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const enrolledCourses = filteredCourses.filter((c) => c.enrolled)
  const availableCourses = filteredCourses.filter((c) => !c.enrolled)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl font-bold sm:text-3xl">Catálogo de Cursos</h1>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Explore cursos sobre educação inclusiva, tecnologia assistiva e metodologias inovadoras
          </p>
        </div>

        {/* Busca e Filtros */}
        <div className="mb-6 space-y-3 sm:mb-8 sm:space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar cursos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-11 pl-10"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <Filter className="h-4 w-4 shrink-0 text-muted-foreground" />
            {categories.map((category) => (
              <Button
                key={category}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`shrink-0 whitespace-nowrap border border-white/20 text-xs sm:text-sm ${
                  selectedCategory === category
                    ? "bg-[#1E40AF] text-white"
                    : "bg-[#F8FAFC] text-foreground"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* MEUS CURSOS */}
{enrolledCourses.length > 0 && (
  <section className="mb-8 sm:mb-12" aria-labelledby="enrolled-courses">
    <h2 id="enrolled-courses" className="mb-3 text-lg font-semibold sm:mb-4 sm:text-xl">
      Meus Cursos
    </h2>

    <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
      {enrolledCourses.map((course) => {
        const Icon = course.icon

        return (
          <Card
            key={course.id}
            className="overflow-hidden border border-[#1E40AF]/20 shadow-sm hover:shadow-md transition-shadow rounded-xl"
          >
            <div className="flex flex-col sm:flex-row">
              
              {/* Ícone sem fundo */}
              <div className="flex items-center justify-center p-6 sm:w-40 sm:p-8">
                <Icon className="h-12 w-12 text-[#1E40AF]" aria-hidden="true" />
              </div>

              <div className="flex flex-1 flex-col p-4 sm:p-6">
                
                {/* Categoria + Nível */}
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <Badge className="text-white bg-[#1E40AF] text-xs">{course.category}</Badge>
                  <Badge className="text-white bg-[#14B8A6] text-xs">{course.level}</Badge>
                </div>

                <CardTitle className="mb-2 text-base sm:text-lg">{course.title}</CardTitle>
                <CardDescription className="mb-4 flex-1 text-sm">{course.description}</CardDescription>

                {/* Rating + Downloads + Duração */}
                <div className="flex items-center justify-between text-xs sm:text-sm mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-medium">4.{Math.floor(Math.random() * 9)}</span>
                    <span className="text-muted-foreground">({Math.floor(10 + Math.random() * 180)} downloads)</span>
                    <Download className="h-4 w-4 text-muted-foreground" />
                  </div>

                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                </div>

                {/* Progresso */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progresso</span>
                    <span className="font-medium">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>

                <Button className="mt-4 w-full bg-[#1E40AF] text-white hover:bg-[#1E40AF]/90 text-sm">
                  Continuar Curso
                </Button>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  </section>
)}


        {/* CURSOS DISPONÍVEIS */}
        <section aria-labelledby="available-courses">
          <h2 className="mb-4 text-xl font-semibold">Cursos Disponíveis</h2>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
  {availableCourses.map((course) => {
    const Icon = course.icon

    return (
      <Card
        key={course.id}
        className="flex flex-col border border-[#1E40AF]/20 shadow-sm hover:shadow-md transition-shadow rounded-xl"
      >
        <CardHeader className="p-4 sm:p-6">

          {/* Ícone com fundo opaco */}
          <div
            className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-${course.color}/30 sm:h-14 sm:w-14`}
          >
            <Icon className={`h-6 w-6 text-${course.color} sm:h-7 sm:w-7`} aria-hidden="true" />
          </div>

          {/* Categoria + Nível */}
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <Badge className="text-white bg-[#1E40AF] text-xs">
              {course.category}
            </Badge>
            <Badge className="text-white bg-[#14B8A6] text-xs">
              {course.level}
            </Badge>
          </div>

          <CardTitle className="text-base sm:text-lg">{course.title}</CardTitle>
          <CardDescription className="flex-1 text-sm">
            {course.description}
          </CardDescription>

          {/* Rating + Downloads + Duração */}
          <div className="mt-3 flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span className="font-medium">4.{Math.floor(Math.random() * 9)}</span>
              <span className="text-muted-foreground">
                ({Math.floor(10 + Math.random() * 180)} downloads)
              </span>
              <Download className="h-4 w-4 text-muted-foreground" />
            </div>

            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              {course.duration}
            </div>
          </div>

        </CardHeader>

        <CardContent className="mt-auto p-4 pt-0 sm:p-6 sm:pt-0">
          <Button className="w-full bg-[#1E40AF] text-white hover:bg-[#1E40AF]/90 text-sm">
            Inscrever-se
          </Button>
        </CardContent>
      </Card>
    )
  })}
</div>

        </section>

        {filteredCourses.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <BookOpen className="mb-4 h-12 w-12 text-muted-foreground" />
            <h3 className="mb-2 text-lg font-semibold">Nenhum curso encontrado</h3>
            <p className="text-sm text-muted-foreground">
              Tente ajustar sua busca ou filtros para encontrar cursos
            </p>
          </div>
        )}
      </main>
    </div>
  )
}
