import { createContext } from "react";
import { Todo } from "../models/Todo";

export interface ITodosContext {
  todos: Todo[];
  toggle: (id: number) => void;
  add: (text: string) => void;
}

export const TodosContext = createContext<ITodosContext>({
  todos: [],
  toggle: (id: number) => {},
  add: (text: string) => {},
});
