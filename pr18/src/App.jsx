import { useRef, useState } from "react";
// import coockies from 'js-cookie'
import "./App.css";
import { Task } from "./task";

function App() {
  let [tasks, setTasks] = useState([]);
  let [upd,setUpd]=useState(false)

  let inp = useRef();
  let inp2 = useRef();

  function handleLocal() {}
  function handleSession() {}
  function handleCoockies() {}
  function handleUpdSet(a) {
    
  }
  function handleUpdate(a) {


    setUpd(true)
    inp2.current.value =a
    
  }

  function handleDelete(e) {
    setTasks(tasks.filter((a) => a !==e))
  }

  function handleAdd() {
    let newTask = inp.current.value;
    setTasks([...tasks, newTask]);
    console.log(tasks);
    localStorage.setItem("data",tasks)
  }

  return (
    <>
      <button onClick={handleLocal}>Local Storage</button>
      <button onClick={handleSession}>Session Storage</button>
      <button onClick={handleCoockies}>Coockies</button>

      <input type="text" ref={inp} />
      <button onClick={handleAdd}>Add</button>


      {
        upd&&
          (<div className="">
          <input type="text" ref={inp2} />
          <button onClick={()=>handleUpdSet(e)}>Update</button>
          </div>
          )
        }
      

      <div className="">
        {tasks.map((e) => {
          return (
            <div className="" style={{ display: "flex", padding: "10px 30px" }}>
              <h3>{e}</h3> <button onClick={()=>handleUpdate(e)}>Update</button>{" "}
              <button onClick={() => handleDelete(e)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
