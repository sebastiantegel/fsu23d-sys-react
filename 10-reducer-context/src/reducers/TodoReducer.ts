import { Todo } from "../models/Todo";

export interface IAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  TOGGLED,
  ADDED,
}

export const TodoReducer = (todos: Todo[], action: IAction) => {
  switch (action.type) {
    case ActionType.TOGGLED:
      return todos.map((todo) =>
        todo.id === +action.payload ? { ...todo, done: !todo.done } : todo
      );

    case ActionType.ADDED:
      return [...todos, new Todo(Date.now(), action.payload, false)];

    default:
      return todos;
  }

  // if (action.type === ActionType.TOGGLED) {
  //   return todos.map((todo) =>
  //     todo.id === +action.payload ? { ...todo, done: !todo.done } : todo
  //   );
  // } else if (action.type === ActionType.ADDED) {
  //   return [...todos, new Todo(Date.now(), action.payload, false)];
  // }

  // return todos;
};
