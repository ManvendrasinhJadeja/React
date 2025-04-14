import { useState } from 'react'

import './App.css'

function App() {
  const [isLiked, setLike] = useState(false)

  function toLike(){
    isLiked&&setLike(false)
    !isLiked&&setLike(true)
  }

  return (
    <>
    <div className='like' style={isLiked?{backgroundColor:'red'}:{backgroundColor:'white'}}></div>
    <button onClick={toLike}>like/dislike</button>
    </>
  )
}

export default App

