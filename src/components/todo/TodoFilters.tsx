import type { Filter } from '../../types/todo'

type Props = {
  filter: Filter
  onChange: (filter: Filter) => void
  className?: string
}

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'active', label: 'Active' },
  { id: 'completed', label: 'Completed' },
]

export function TodoFilters({ filter, onChange, className = '' }: Props) {
  return (
    <div
      className={`flex items-center justify-center gap-8 text-xs font-bold text-darkGrayishBlue ${className}`}
    >
      {FILTERS.map((f) => (
        <button
          key={f.id}
          type="button"
          onClick={() => onChange(f.id)}
          className={` tracking-wide transition-colors ${
            filter === f.id
              ? 'text-primary'
              : 'hover:text-lightGrayishBlue'
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}

