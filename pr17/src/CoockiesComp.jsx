import React, { useRef, useState } from "react";
import coockies from "js-cookie";


export const CoockiesComp = () => {

    let abc = useRef();
    let [val, setval] = useState("");
    useRef();
    function handleSet() {
      coockies.set("data", abc.current.value);
      console.log(abc.current.value);
    }
    function handleGet() {
      setval(coockies.get("data"));
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







