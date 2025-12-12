"use client"

import { createContext, useContext, useState, useEffect } from "react"

type Preferences = {
  theme: "light" | "dark"
  fontSize: "small" | "normal" | "large" | "xlarge"
  playbackSpeed: string

  autoplayVideos: boolean
  subtitlesDefault: boolean
  screenReader: boolean
  highContrast: boolean
  reduceAnimations: boolean
  keyboardNavigation: boolean
  audioDescription: boolean
  librasEnabled: boolean
  publicProfile: boolean
  showProgress: boolean
  shareCertificates: boolean
  dataAnalytics: boolean
  pushEnabled: boolean
  pushReminders: boolean
  pushMessages: boolean
  emailNewCourses: boolean
  emailCourseUpdates: boolean
  emailCertificates: boolean
  emailNewsletter: boolean
  emailPromotions: boolean
}

function getBoolean(key: string, defaultValue = false): boolean {
  const item = localStorage.getItem(key)
  if (item === null) return defaultValue
  return item === "true"
}

const PreferencesContext = createContext<any>(null)

export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  const [preferences, setPreferences] = useState<Preferences>({
    theme: "light",
    fontSize: "normal",
    playbackSpeed: "1x",

    autoplayVideos: false,
    subtitlesDefault: false,
    screenReader: false,
    highContrast: false,
    reduceAnimations: false,
    keyboardNavigation: false,
    audioDescription: false,
    librasEnabled: false,
    publicProfile: false,
    showProgress: false,
    shareCertificates: false,
    dataAnalytics: false,
    pushEnabled: false,
    pushReminders: false,
    pushMessages: false,
    emailNewCourses: false,
    emailCourseUpdates: false,
    emailCertificates: false,
    emailNewsletter: false,
    emailPromotions: false,
  })

  useEffect(() => {
    const stored: any = {}

    Object.keys(preferences).forEach((key) => {
      const value = localStorage.getItem(key)

      if (value === null) return

      // Se for boolean
      if (value === "true" || value === "false") {
        stored[key] = value === "true"
      } else {
        stored[key] = value // string mesmo
      }
    })

    setPreferences((prev) => ({ ...prev, ...stored }))
  }, [])

  function updatePreference(key: string, value: any) {
    setPreferences((prev: any) => ({
      ...prev,
      [key]: value,
    }))
    localStorage.setItem(key, value.toString())
  }

  return (
    <PreferencesContext.Provider value={{ preferences, updatePreference }}>
      {children}
    </PreferencesContext.Provider>
  )
}

export function usePreferences() {
  return useContext(PreferencesContext)
}