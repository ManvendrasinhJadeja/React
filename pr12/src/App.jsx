import { useState } from "react";
import "./App.css";
import { Card } from "./Card";

function App() {
  const [data, setData] = useState([]);

  function createObj() {
    let newObj = {
      name: document.getElementById("name").value,
      mail: document.getElementById("mail").value,
      phone: document.getElementById("phNum").value,
    };
    setData([...data, newObj]);
    console.log(data);
  }
  function HandleSubmit(e) {
    e.preventDefault();
    createObj();
    
  }
  return (
    <>
      <div className="">
        <form action="">
          <input type="text" id="name" />
          <input type="email" name="" id="mail" />
          <input type="number" name="" id="phNum" />
          <input type="submit" onClick={HandleSubmit} />
        </form>
      </div>
      <div className="" style={{display:"flex",flexWrap:"wrap"}}>
        {data.map((e , index) => {
          return <Card data={e} key={index} />;
        })}
      </div>
    </>
  );
}

export default App;
