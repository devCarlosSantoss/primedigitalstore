"use client"

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react"
import type { Locale, Dictionary } from "./types"
import pt from "./dictionaries/pt"
import en from "./dictionaries/en"

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Dictionary
}

const dictionaries: Record<Locale, Dictionary> = { pt, en }

const LanguageContext = createContext<LanguageContextType>({
  locale: "pt",
  setLocale: () => {},
  t: pt,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt")

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null
    if (saved && (saved === "pt" || saved === "en")) {
      setLocaleState(saved)
    }
  }, [])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem("locale", newLocale)
  }, [])

  const t = dictionaries[locale]

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
