import {
  DragDropContext,
  Draggable,
  Droppable,
  type DropResult,
} from '@hello-pangea/dnd'
import type { Todo } from '../../types/todo'
import { TodoItem } from './TodoItem'

type Props = {
  todos: Todo[]
  onToggle: (id: string) => void
  onDelete: (id: string) => void
  onReorder: (startIndex: number, endIndex: number) => void
}

export function TodoList({ todos, onToggle, onDelete, onReorder }: Props) {
  const handleDragEnd = (result: DropResult) => {
    const { destination, source } = result
    if (!destination) return
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }
    onReorder(source.index, destination.index)
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="todos">
        {(provided) => (
          <ul
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="max-h-[420px] overflow-y-auto rounded-t-md bg-white text-sm shadow-card dark:bg-veryDarkDesaturatedBlue/95 dark:shadow-card-dark"
          >
            {todos.map((todo, index) => (
              <Draggable key={todo.id} draggableId={todo.id} index={index}>
                {(draggableProvided, snapshot) => (
                  <li
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.draggableProps}
                    {...draggableProvided.dragHandleProps}
                    className={`cursor-move ${
                      snapshot.isDragging ? 'bg-veryDarkGrayishBlue2' : ''
                    }`}
                  >
                    <TodoItem
                      todo={todo}
                      onToggle={() => onToggle(todo.id)}
                      onDelete={() => onDelete(todo.id)}
                    />
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  )
}

