import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increment(){
    setCount(count+1);
  }
  function decrement(){
    setCount(count-1);
  }
  return (

    <>
    <p>count is {count}</p>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    </>
  )
}

export default App
