import { createContext, useState } from "react";
import "./App.css";
import { Btn } from "./Btn";


function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <theme.Provider value={{isDark,setIsDark}}>
      <>
        <div className={isDark ? "box dark" : "box light"}>
          <Btn/>
        </div>
      </>
    </theme.Provider>
  );
}

export const theme = createContext();
export default App;