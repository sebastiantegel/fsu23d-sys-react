import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";

export const Todos = () => {
  const { todos, toggle } = useContext(TodosContext);

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={todo.done ? "done" : ""}
          onClick={() => toggle(todo.id)}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
};
