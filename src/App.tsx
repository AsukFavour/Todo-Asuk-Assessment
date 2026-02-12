import './App.css'
import './index.css'
import { useMemo, useState } from 'react'
import type { Filter } from './types/todo'
import { useTheme } from './hooks/useTheme'
import { useTodos } from './hooks/useTodos'
import { Header } from './components/layout/Header'
import { TodoInput } from './components/todo/TodoInput'
import { TodoList } from './components/todo/TodoList'
import { TodoFooter } from './components/todo/TodoFooter'
import { TodoFilters } from './components/todo/TodoFilters'

function App() {
  const { theme, toggleTheme } = useTheme()
  const {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    reorderTodos,
    activeCount,
  } = useTodos()

  const [filter, setFilter] = useState<Filter>('all')

  const visibleTodos = useMemo(
    () =>
      todos.filter((todo) => {
        if (filter === 'active') return !todo.completed
        if (filter === 'completed') return todo.completed
        return true
      }),
    [todos, filter],
  )

  return (
    <div className="min-h-screen bg-white dark:bg-veryDarkBlue text-veryDarkBlue dark:text-lightGrayishBlue transition-colors">
      <Header theme={theme} onToggleTheme={toggleTheme}>
        <TodoInput onAdd={addTodo} />
      </Header>

      <main className="-mt-10 mx-auto max-w-xl px-6 pb-16 md:-mt-16 relative z-20">
        <section aria-label="Todo list" className="mb-4 md:mb-6">
          <TodoList
            todos={visibleTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onReorder={reorderTodos}
          />
          <TodoFooter
            itemsLeft={activeCount}
            filter={filter}
            onChangeFilter={setFilter}
            onClearCompleted={clearCompleted}
          />
        </section>

        <section className="rounded-md bg-white dark:bg-veryDarkDesaturatedBlue py-3 text-sm text-darkGrayishBlue shadow-card dark:shadow-card-dark md:hidden">
          <TodoFilters filter={filter} onChange={setFilter} />
        </section>

        <p className="mt-8 text-center text-xs text-darkGrayishBlue dark:text-darkGrayishBlue">
          Drag and drop to reorder list
        </p>
      </main>
    </div>
  )
}

export default App