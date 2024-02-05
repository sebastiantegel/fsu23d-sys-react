import { useState } from "react";
import { ITodosContext, TodosContext } from "../contexts/TodosContext";
import { Todo } from "../models/Todo";
import { Todos } from "./Todos";
import { AddTodo } from "./AddTodo";

export const TodoApp = () => {
  const [state, setState] = useState<ITodosContext>({
    todos: [
      new Todo(Date.now(), "Learn context", false),
      new Todo(Date.now() + 1, "Learn react", false),
      new Todo(Date.now() + 2, "Learn reducers", true),
    ],
    toggle: (id: number) => {},
    add: (text: string) => {},
  });

  state.toggle = (id: number) => {
    setState({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ),
    });
  };

  state.add = (text: string) => {
    setState({
      ...state,
      todos: [...state.todos, new Todo(Date.now(), text, false)],
    });
  };

  return (
    <TodosContext.Provider value={state}>
      <AddTodo />
      <Todos />
    </TodosContext.Provider>
  );
};
