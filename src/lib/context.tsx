'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Lang, translations } from '@/lib/data'

type Theme = 'dark' | 'light'

interface AppContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
  theme: Theme
  toggleTheme: () => void
}

const AppContext = createContext<AppContextType | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('ru')
  const [theme, setTheme] = useState<Theme>('dark')

  // Применяем тему к <html> — так переменные наследуются всем документом
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang)
  }, [lang])

  const setLang = (l: Lang) => setLangState(l)
  const t = (key: string) => translations[lang][key] ?? key
  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark')

  return (
    <AppContext.Provider value={{ lang, setLang, t, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
