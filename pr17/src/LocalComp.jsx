import React, { useRef, useState } from "react";

export const LocalComp = () => {
  let abc = useRef();
  let [val, setval] = useState("");
  useRef();
  function handleSet() {
    localStorage.setItem("data", abc.current.value);
    console.log(abc.current.value);
  }
  function handleGet() {
    setval(localStorage.getItem("data"));
  }
  function handleClear() {
    localStorage.clear();
  }

  return (
    <>
      <div className="">
        <input type="text" name="" id="" ref={abc} />
        <button onClick={handleSet}>set</button>
        <button onClick={handleGet}>get</button>
        <button onClick={handleClear}>clear</button>
        <div className="">{val}</div>
      </div>
    </>
  );
};
