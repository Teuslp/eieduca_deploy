"use client"

import { usePreferences } from "../app/contexts/PreferencesContext"
import { Badge } from "@/components/ui/badge"

export function PreferencesIndicator() {
  const { preferences } = usePreferences()

  return (
    <div className="flex flex-wrap gap-2 my-4">
      {preferences.highContrast && (
        <Badge className="bg-yellow-500 text-black">Alto Contraste Ativado</Badge>
      )}
      {preferences.reduceAnimations && (
        <Badge className="bg-purple-500 text-white">Animações Reduzidas</Badge>
      )}
      {preferences.screenReader && (
        <Badge className="bg-blue-500 text-white">Modo Leitor de Tela</Badge>
      )}
    </div>
  )
}