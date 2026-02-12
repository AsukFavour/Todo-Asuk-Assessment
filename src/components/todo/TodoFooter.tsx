import type { Filter } from '../../types/todo'
import { TodoFilters } from './TodoFilters'

type Props = {
  itemsLeft: number
  filter: Filter
  onChangeFilter: (filter: Filter) => void
  onClearCompleted: () => void
}

export function TodoFooter({
  itemsLeft,
  filter,
  onChangeFilter,
  onClearCompleted,
}: Props) {
  return (
    <footer className="rounded-b-md bg-white text-xs text-darkGrayishBlue shadow-card dark:bg-veryDarkDesaturatedBlue/95 dark:shadow-card-dark">
      <div className="flex items-center justify-between px-5 py-3">
        <span>{itemsLeft} items left</span>

        <div className="hidden md:block">
          <TodoFilters filter={filter} onChange={onChangeFilter} />
        </div>

        <button
          type="button"
          onClick={onClearCompleted}
          className="hover:text-lightGrayishBlue"
        >
          Clear Completed
        </button>
      </div>
    </footer>
  )
}

