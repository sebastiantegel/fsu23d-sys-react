import { useContext, useState } from "react";
import { ActionType } from "../reducers/TodoReducer";
import { TodosContext } from "../contexts/TodosContext";

export const AddTodo = () => {
  const [userInput, setUserInput] = useState("");
  const { dispatch } = useContext(TodosContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: ActionType.ADDED,
          payload: userInput,
        });

        setUserInput("");
      }}
    >
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button>Spara</button>
    </form>
  );
};
