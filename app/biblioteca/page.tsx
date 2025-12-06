"use client"

import { useState, type ComponentType } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, FileText, Video, Headphones, Download, BookOpen, Eye, Filter, Star, Clock } from "lucide-react"

type Resource = {
  id: number
  title: string
  description: string
  type: string
  category: string
  size: string
  duration: string
  rating: number
  downloads: number
  icon: ComponentType<any>
}

const resources: Resource[] = [
  {
    id: 1,
    title: "Guia Completo de Tecnologia Assistiva",
    description: "Manual prático sobre ferramentas e recursos para acessibilidade digital",
    type: "PDF",
    category: "Acessibilidade",
    size: "2.4 MB",
    duration: "45 min leitura",
    rating: 4.8,
    downloads: 1234,
    icon: FileText,
  },
  {
    id: 2,
    title: "Implementando IA na Sala de Aula",
    description: "Vídeo tutorial sobre uso prático de inteligência artificial no ensino",
    type: "Vídeo",
    category: "IA e Tecnologia",
    size: "156 MB",
    duration: "32 min",
    rating: 4.9,
    downloads: 892,
    icon: Video,
  },
  {
    id: 3,
    title: "Podcast: Educação Inclusiva em Debate",
    description: "Série de episódios com especialistas discutindo práticas inclusivas",
    type: "Áudio",
    category: "Inclusão",
    size: "45 MB",
    duration: "1h 15min",
    rating: 4.7,
    downloads: 567,
    icon: Headphones,
  },
  {
    id: 4,
    title: "Metodologias Ativas: Teoria e Prática",
    description: "E-book com estratégias comprovadas para engajamento estudantil",
    type: "PDF",
    category: "Pedagogia",
    size: "3.1 MB",
    duration: "1h leitura",
    rating: 4.9,
    downloads: 2103,
    icon: FileText,
  },
  {
    id: 5,
    title: "Webinar: Gestão Educacional Inovadora",
    description: "Gravação de webinar sobre práticas de gestão de qualidade",
    type: "Vídeo",
    category: "Gestão",
    size: "234 MB",
    duration: "1h 45min",
    rating: 4.6,
    downloads: 445,
    icon: Video,
  },
  {
    id: 6,
    title: "Avaliação Formativa na Prática",
    description: "Guia com técnicas modernas de avaliação e monitoramento",
    type: "PDF",
    category: "Avaliação",
    size: "1.8 MB",
    duration: "30 min leitura",
    rating: 4.8,
    downloads: 789,
    icon: FileText,
  },
]

const categories = ["Todos", "Acessibilidade", "IA e Tecnologia", "Inclusão", "Pedagogia", "Gestão", "Avaliação"]

export default function BibliotecaPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedType, setSelectedType] = useState("todos")

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "Todos" || resource.category === selectedCategory
    const matchesType = selectedType === "todos" || resource.type.toLowerCase() === selectedType
    return matchesSearch && matchesCategory && matchesType
  })

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl font-bold text-balance sm:text-3xl">Biblioteca de Recursos</h1>
          <p className="mt-2 text-sm text-muted-foreground text-pretty sm:text-base">
            Acesse materiais adaptados, vídeos, podcasts e documentos sobre educação inclusiva
          </p>
        </div>

        {/* Search */}
        <div className="mb-4 sm:mb-6">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              type="search"
              placeholder="Buscar recursos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-11 pl-10"
              aria-label="Buscar recursos"
            />
          </div>
        </div>

        {/* Tabs and Filters */}
        <Tabs defaultValue="todos" className="mb-6 sm:mb-8" onValueChange={setSelectedType}>
          <TabsList className="mb-4 grid w-full grid-cols-4 sm:mb-6 lg:w-auto lg:inline-grid">
            <TabsTrigger value="todos" className="text-xs sm:text-sm">
              Todos
            </TabsTrigger>
            <TabsTrigger value="pdf" className="text-xs sm:text-sm">
              PDFs
            </TabsTrigger>
            <TabsTrigger value="vídeo" className="text-xs sm:text-sm">
              Vídeos
            </TabsTrigger>
            <TabsTrigger value="áudio" className="text-xs sm:text-sm">
              Áudios
            </TabsTrigger>
          </TabsList>

          <div className="mb-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <Filter className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`shrink-0 whitespace-nowrap border border-white/20 text-xs sm:text-sm transition-all
                  ${
                    selectedCategory === category
                      ? "bg-[#1E40AF] text-white shadow-md shadow-blue-900/30"
                      : "bg-[#F8FAFC] text-foreground hover:bg-blue-50 hover:text-[#1E40AF]"
                  }
                `}>
    
                {category}
              </Button>
            ))}
          </div>

          <TabsContent value="todos" className="mt-0">
            <ResourceGrid resources={filteredResources} />
          </TabsContent>
          <TabsContent value="pdf" className="mt-0">
            <ResourceGrid resources={filteredResources} />
          </TabsContent>
          <TabsContent value="vídeo" className="mt-0">
            <ResourceGrid resources={filteredResources} />
          </TabsContent>
          <TabsContent value="áudio" className="mt-0">
            <ResourceGrid resources={filteredResources} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

function ResourceGrid({ resources }: { resources: Resource[] }) {
  if (resources.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <BookOpen className="mb-4 h-12 w-12 text-muted-foreground" aria-hidden="true" />
        <h3 className="mb-2 text-base font-semibold sm:text-lg">Nenhum recurso encontrado</h3>
        <p className="text-sm text-muted-foreground">Tente ajustar sua busca ou filtros para encontrar recursos</p>
      </div>
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
  {resources.map((resource: Resource) => {
        const Icon = resource.icon
        return (
          <Card key={resource.id} 
          className="flex flex-col border border-blue-600/10 shadow-[0_4px_12px_rgba(30,64,175,0.08)] hover:shadow-[0_6px_16px_rgba(30,64,175,0.12)] transition-shadow rounded-xl">
            <CardHeader className="p-4 sm:p-6">
              <div className="mb-3 flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 sm:h-12 sm:w-12">
                  <Icon  className={`h-5 w-5 sm:h-6 sm:w-6 
                    ${resource.type === "PDF" ? "text-[#EF4444]" : ""} 
                    ${resource.type === "Áudio" ? "text-[#10B981]" : ""} 
                    ${resource.type === "Vídeo" ? "text-[#1E40AF]" : ""}`}/>

                </div>
                  <Badge variant="secondary" className="text-xs text-[#64748B]">
                  {resource.type}
                </Badge>
              </div>
              <CardTitle className="text-base sm:text-lg">{resource.title}</CardTitle>
              <CardDescription className="flex-1 text-sm">{resource.description}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto space-y-4 p-4 pt-0 sm:p-6 sm:pt-0">
              <div className="space-y-2 text-xs sm:text-sm text-[#64748B]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-primary text-primary sm:h-4 sm:w-4" aria-hidden="true" />
                    <span className="font-medium text-foreground">{resource.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Download className="h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
                    <span>{resource.downloads}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
                    <span>{resource.duration}</span>
                  </div>
                  <span>{resource.size}</span>
                </div>
                <Badge
                  className="w-fit text-xs bg-[#14B8A6] text-white border-none shadow-sm">                  {resource.category}
                </Badge>
              </div>
              <div className="flex gap-2">

              <Button
                size="sm"
                className="flex-1 text-xs sm:text-sm bg-white border border-blue-600/20 text-blue-700 hover:bg-blue-50">                  <Eye className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" aria-hidden="true" />
                  Ver
                </Button>

                <Button
                  size="sm"
                  className="flex-1 text-xs sm:text-sm bg-[#1E40AF] text-white hover:bg-white-500 hover:shadow-lg hover:shadow-blue-600/40">

                  <Download className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" aria-hidden="true" />
                  Baixar
                </Button>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}