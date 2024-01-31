import { useMemo, useState } from "react";
import { Todo } from "../models/Todo";

export const Todos = () => {
  const [dummy, setDummy] = useState(false);

  const [todos, setTodos] = useState<Todo[]>([
    new Todo(Date.now(), "Learn react", false),
    new Todo(Date.now() + 1, "Learn TypeScript", false),
    new Todo(Date.now() + 2, "Learn useEffect", true),
    new Todo(Date.now() + 3, "Learn useMemo", false),
  ]);

  const filteredTodos = useMemo(() => {
    console.log("Filtering todos");
    return todos.filter((todo) => !todo.done);
  }, [todos]);

  return (
    <>
      <button onClick={() => setDummy(!dummy)}>Klick</button>
      <ul>
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            onClick={() =>
              setTodos(
                todos.map((cTodo) =>
                  cTodo.id === todo.id ? { ...cTodo, done: !cTodo.done } : cTodo
                )
              )
            }
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </>
  );
};
