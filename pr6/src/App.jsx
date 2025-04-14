import { useEffect, useState } from 'react'


import './App.css'

function App() {

  let data;

  const [count, setCount] = useState(0)
  function inc(){
    setCount(count+1)
  }
  function create(){
    if(count<1){return}
    let abc = document.getElementById("abc")
    let createDiv=document.createElement("div")
    createDiv.classList.add("div1")
    createDiv.innerText=count
    abc.append(createDiv)

  }
  
  function apfetch(){
    if(count<1){return}
    fetch("https://fakestoreapi.in/api/products")
.then(res => res.json())
.then(res => {console.log(res) 
} )
return data


}
useEffect(()=>{
  apfetch()
  create()
  
},[count])

  return (
    <>
      <button onClick={inc}>hello</button>
      <div id="abc"></div>
    </>
  )
}

export default App
