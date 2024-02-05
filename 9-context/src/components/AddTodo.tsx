import { useContext, useState } from "react";
import { TodosContext } from "../contexts/TodosContext";
import { Button } from "./Button";

export const AddTodo = () => {
  const { add } = useContext(TodosContext);

  const [userInput, setUserInput] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        add(userInput);
        setUserInput("");
      }}
    >
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <Button>Spara</Button>
    </form>
  );
};
