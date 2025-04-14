import { useEffect, useState } from "react";

import "./App.css";
import UserCard from "../common/UserCard/UserCard";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState([]);
  const [mode, setMode] = useState(true);
  function inc() {
    setCount(count + 1);
  }

  function darkMode(){
    setMode((e)=>!e)
  }

  function apfetch() {
    if (count < 1) {
      return;
    }
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((res) => {
        let newUser=res.results[0]
        setUser((p) => [ ...p,newUser]);
      });
  }
  useEffect(() => {
    apfetch();
  }, [count]);

  return (
    <>
    <div className="w-full min-h-screen flex flex-col items-center gap-[30px] my-[20px]  " style={{backgroundColor:mode?"#101828":"white"}} >

      <button onClick={inc} className="bg-gray-500 text-white w-[100px] h-[40px] rounded-md">Add User</button>
      <button onClick={darkMode} className="bg-gray-500 text-white px-[10px] py-[20px] rounded-md">Toggle DarkMode</button>
      <div className="flex gap-[25px] flex-wrap justify-center">
        {user.map((e) => {
          return <UserCard key={Date.now} user={e} />;
        })}
      </div>
        </div>
    </>
  );
}

export default App;
