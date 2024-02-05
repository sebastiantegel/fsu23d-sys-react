import { useState } from "react";
import "./App.css";
import { AwesomeComponent } from "./components/AwesomeComponent";
import { MyContext } from "./contexts/MyContext";
import { TodoApp } from "./components/TodoApp";
import { ITheme, ThemeContext, themes } from "./contexts/ThemeContext";
import { Button } from "./components/Button";

function App() {
  const [someState, setSomeState] = useState("dolor sit amet");
  const [theme, setTheme] = useState<ITheme>(themes.night);

  theme.toggleTheme = () => {
    theme === themes.day ? setTheme(themes.night) : setTheme(themes.day);
  };

  return (
    <ThemeContext.Provider value={theme}>
      {/* <button onClick={() => setSomeState("It is woooorking :)")}>Ändra</button>
      <MyContext.Provider value={someState}>
        <AwesomeComponent />
      </MyContext.Provider> */}

      <Button handleClick={theme.toggleTheme}>Ändra tema</Button>

      <TodoApp />
    </ThemeContext.Provider>
  );
}

export default App;
