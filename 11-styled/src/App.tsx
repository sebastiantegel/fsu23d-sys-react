import "./App.css";
import { Button, SaveButton } from "./styled/Buttons";
import { Input, Password } from "./styled/Inputs";
import { ColumnWrapper } from "./styled/Wrappers";

function App() {
  return (
    <ColumnWrapper>
      <Button bgColor="blue" onClick={() => {}}>
        Default
      </Button>
      <SaveButton onClick={() => {}}>Spara</SaveButton>

      <Input />
      <Password />
    </ColumnWrapper>
  );
}

export default App;
