import { useState, type ReactNode } from 'react'
import { ThemeContext } from './ThemeContext'
import { THEME } from '../utils/constants'
import type { Theme } from '../utils/globals'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  localStorage.setItem(
    'theme',
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? THEME.DARK
      : THEME.LIGHT
  )
  const preference: Theme | null = localStorage.getItem('theme') as Theme

  const [theme, setTheme] = useState<Theme>(preference ?? THEME.LIGHT)

  if (theme === THEME.LIGHT) {
    document.body.setAttribute('data-theme', THEME.LIGHT)
  } else {
    document.body.setAttribute('data-theme', THEME.DARK)
  }

  const toggleTheme = () => {
    setTheme(theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT)

    document.body.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
