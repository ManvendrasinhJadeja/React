import React, { useRef, useState } from "react";

export const SessionComp = () => {
 
    let abc = useRef();
    let [val, setval] = useState("");
    useRef();
    function handleSet() {
      sessionStorage.setItem("data", abc.current.value);
      console.log(abc.current.value);
    }
    function handleGet() {
      setval(sessionStorage.getItem("data"));
    }
    function handleClear() {
      sessionStorage.clear();
    }
  return(<>
      <div className="">
        session
        <input type="text" name="" id="" ref={abc} />
        <button onClick={handleSet}>set</button>
        <button onClick={handleGet}>get</button>
        <button onClick={handleClear}>clear</button>
        <div className="">{val}</div>
      </div>
      </>
  ) 
};







