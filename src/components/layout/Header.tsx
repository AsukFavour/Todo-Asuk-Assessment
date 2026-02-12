import { type ReactNode } from 'react'
import { ThemeToggle } from './ThemeToggle'
import type { Theme } from '../../hooks/useTheme'

type Props = {
  theme: Theme
  onToggleTheme: () => void
  children: ReactNode
}

export function Header({ theme, onToggleTheme, children }: Props) {
  return (
    <header className="relative min-h-[240px] md:min-h-[280px]">
      <div className="absolute inset-0 bg-hero" />
      <div className="relative z-10 mx-auto max-w-xl px-6 pt-14 md:pt-20">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-[0.4em] text-white md:text-4xl">
            TODO
          </h1>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
        {children}
      </div>
    </header>
  )
}