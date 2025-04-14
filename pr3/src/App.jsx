import { useState } from 'react'
import './App.css'

function App() {
  const [isDark,setDark] =useState(false)
  function toggleMode(){
      // isDark?setDark(false):"";
      // isDark&&setDark(false)
      // !isDark&&setDark(true)
      setDark(()=>!isDark)
    }
  //   function lightMode(){
  //     // !isDark?setDark(true):"";
  // }
  return (
  <>
<div className={isDark?"darkClass":"lightClass"} id='mainDiv'>
  <button onClick={toggleMode}>mode</button>
  {/* <button onClick={lightMode}>dark</button> */}
</div>
  </>
  )
}

export default App



