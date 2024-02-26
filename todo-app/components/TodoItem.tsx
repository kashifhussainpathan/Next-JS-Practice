import { Todo } from '@prisma/client'

type TodoItemProps = {
  todo: Todo
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  return <li>{todo.title} </li>
}
