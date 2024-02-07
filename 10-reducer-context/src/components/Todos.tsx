import { useContext } from "react";
import { ActionType } from "../reducers/TodoReducer";
import { TodosContext } from "../contexts/TodosContext";

export const Todos = () => {
  const { todos, dispatch } = useContext(TodosContext);

  const handleClick = (id: number) => {
    dispatch({
      type: ActionType.TOGGLED,
      payload: id.toString(),
    });
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={todo.done ? "done" : ""}
          onClick={() => handleClick(todo.id)}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
};
