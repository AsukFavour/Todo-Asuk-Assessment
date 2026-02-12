import { useForm } from 'react-hook-form'

type Props = {
  onAdd: (text: string) => void
}

type FormValues = {
  todo: string
}

export function TodoInput({ onAdd }: Props) {
  const { register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: { todo: '' },
  })

  const onSubmit = (values: FormValues) => {
    const text = values.todo.trim()
    if (!text) return
    onAdd(text)
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mb-4 flex items-center gap-4 rounded-md bg-white px-5 py-4 text-sm shadow-card dark:bg-veryDarkDesaturatedBlue/95 dark:shadow-card-dark"
    >
      <button
        type="submit"
        aria-label="Create todo"
        className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-veryDarkGrayishBlue hover:border-primary transition-colors"
      />
      <input
        className="flex-1 bg-transparent text-[0.95rem] text-veryDarkBlue placeholder:text-darkGrayishBlue outline-none dark:text-lightGrayishBlue"
        placeholder="Create a new todo..."
        {...register('todo')}
      />
    </form>
  )
}

