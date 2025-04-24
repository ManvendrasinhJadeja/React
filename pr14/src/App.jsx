import { useRef, useState } from "react";
import "./App.css";

function App() {
  let [name, setName] = useState();
  let inp = useRef();
  let handleSub = () => {
    name = inp.current.value;
    setName(name);
    console.log(name);
  };
  return (
    <>
      <input type="text" defaultValue={name} ref={inp} />
      <button onClick={handleSub}>submit</button>
    </>
  );
}

export default App;
