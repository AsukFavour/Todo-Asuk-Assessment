import type { Todo } from '../../types/todo'
import checkIcon from '../../assets/images/icon-check.svg'
import crossIcon from '../../assets/images/icon-cross.svg'

type Props = {
  todo: Todo
  onToggle: () => void
  onDelete: () => void
}

export function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <div className="group flex items-center gap-4 border-b border-gray-200 px-5 py-4 text-sm last:border-b-0 dark:border-veryDarkGrayishBlue2">
      <button
        type="button"
        onClick={onToggle}
        className={`flex h-5 w-5 items-center justify-center rounded-full border transition-all ${
          todo.completed
            ? 'border-transparent bg-gradient-check'
            : 'border-blue-300 hover:border-transparent hover:bg-gradient-check dark:border-veryDarkGrayishBlue'
        }`}
        aria-label={todo.completed ? 'Mark as active' : 'Mark as completed'}
      >
        {todo.completed && (
          <img src={checkIcon} alt="" className="h-3 w-3" />
        )}
      </button>

      <span
        className={`flex-1 text-[0.95rem] ${
          todo.completed
            ? 'text-darkGrayishBlue line-through'
            : 'text-veryDarkBlue dark:text-lightGrayishBlue'
        }`}
      >
        {todo.text}
      </span>

      <button
        type="button"
        onClick={onDelete}
        aria-label="Delete todo"
        className="opacity-0 transition-opacity group-hover:opacity-100"
      >
        <img src={crossIcon} alt="Delete todo" className="h-4 w-4" />
      </button>
    </div>
  )
}

