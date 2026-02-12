import type { Theme } from '../../hooks/useTheme'
import sunIcon from '../../assets/images/icon-sun.svg'
import moonIcon from '../../assets/images/icon-moon.svg'

type Props = {
  theme: Theme
  onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: Props) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="transition-transform hover:scale-110"
    >
      <img
        src={isDark ? sunIcon : moonIcon}
        alt={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        className="h-6 w-6"
      />
    </button>
  )
}

