import { useCallback, useMemo } from 'react'
import { useLocalStorage } from './useLocalStorage'
import type { Todo } from '../types/todo'

const TODOS_KEY = 'todo-items-v1'

export function useTodos() {
  const [todos, setTodos] = useLocalStorage<Todo[]>(TODOS_KEY, [])

  const addTodo = useCallback(
    (text: string) => {
      const trimmed = text.trim()
      if (!trimmed) return
      setTodos((prev) => [
        { id: crypto.randomUUID(), text: trimmed, completed: false },
        ...prev,
      ])
    },
    [setTodos],
  )

  const toggleTodo = useCallback(
    (id: string) => {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo,
        ),
      )
    },
    [setTodos],
  )

  const deleteTodo = useCallback(
    (id: string) => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id))
    },
    [setTodos],
  )

  const clearCompleted = useCallback(() => {
    setTodos((prev) => prev.filter((todo) => !todo.completed))
  }, [setTodos])

  const reorderTodos = useCallback(
    (startIndex: number, endIndex: number) => {
      setTodos((prev) => {
        const result = [...prev]
        const [removed] = result.splice(startIndex, 1)
        result.splice(endIndex, 0, removed)
        return result
      })
    },
    [setTodos],
  )

  const activeCount = useMemo(
    () => todos.filter((t) => !t.completed).length,
    [todos],
  )

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    reorderTodos,
    activeCount,
  }
}

