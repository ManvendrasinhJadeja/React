import { useState } from "react";
// import coockies from "js-cookie";
import "./App.css";

import { SessionComp } from "./sessionComp";
import { CoockiesComp } from "./CoockiesComp";
import { LocalComp } from "./localComp";
function App() {
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  function handleLocal() {
    setShow1(true);
    setShow2(false);
    setShow3(false);
  }
  function handleSession() {
    setShow1(false);
    setShow2(true);
    setShow3(false);
  }
  function handleCoockies() {
    setShow1(false);
    setShow2(false);
    setShow3(true);
  }

  return (
    <>
      <button onClick={handleLocal}>local</button>
      <button onClick={handleSession}>session</button>
      <button onClick={handleCoockies}>coockies</button>

      {show1 ? <LocalComp /> : ""}
      {show2 ? <SessionComp /> : ""}
      {show3 ? <CoockiesComp /> : ""}
    </>
  );
}

export default App;
