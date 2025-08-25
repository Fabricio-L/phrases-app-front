import { useEffect, useState, type ReactNode } from 'react'
import { ThemeContext } from './ThemeContext'
import { THEME } from '../utils/constants'
import type { Theme } from '../utils/globals'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const preference: Theme | null = localStorage.getItem('theme') as Theme
  if (!preference) {
    localStorage.setItem(
      'theme',
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? THEME.DARK
        : THEME.LIGHT
    )
  }

  const [theme, setTheme] = useState<Theme>(preference ?? THEME.LIGHT)

  useEffect(() => {
    if (theme === THEME.LIGHT) {
      document.body.setAttribute('data-theme', THEME.LIGHT)
    } else {
      document.body.setAttribute('data-theme', THEME.DARK)
    }

    localStorage.setItem('theme', theme)
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
