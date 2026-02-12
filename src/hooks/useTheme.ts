import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export type Theme = 'light' | 'dark'

const THEME_KEY = 'todo-theme'

export function useTheme() {
  const [theme, setTheme] = useLocalStorage<Theme>(THEME_KEY, 'dark')

  useEffect(() => {
    const root = window.document.documentElement
    
    // Remove both classes first to ensure clean state
    root.classList.remove('light', 'dark')
    
    // Add the current theme class
    root.classList.add(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light')
  }

  return { theme, toggleTheme }
}