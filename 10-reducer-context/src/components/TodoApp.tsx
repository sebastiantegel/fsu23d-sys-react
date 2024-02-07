import { useReducer } from "react";
import { TodoReducer } from "../reducers/TodoReducer";
import { Todo } from "../models/Todo";
import { TodosContext } from "../contexts/TodosContext";
import { AddTodo } from "./AddTodo";
import { Todos } from "./Todos";

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(TodoReducer, [
    new Todo(Date.now(), "Learn reducers", false),
  ]);

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      <AddTodo />
      <Todos />
    </TodosContext.Provider>
  );
};
