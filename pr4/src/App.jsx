import { useState } from 'react'

import './App.css'

function App() {
  const [isShow, setType] = useState(false)

  function show(){
    !isShow&&setType(true)
    isShow&&setType(false)
  }
  

  
  return (
    <>
    <input type={isShow?"text":'password'} />
    <button onClick={show}>show</button>
    </>
  )
}

export default App
