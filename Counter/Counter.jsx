import React from 'react'

export const Counter = () => {
    let count =0
    function incr(){
      count++; 
        document.querySelector(".display").innerText=count

    }
    function decr(){
        if (count>0) {
            count--; 
        }
        document.querySelector(".display").innerText=count
        
    }

  return (
    <>
    <h1 className='display'>{count}</h1>
    <button className='increment' onClick={incr}>increment</button>
    <button className='decrement' onClick={decr}>Decrement</button>
    </>
  )
}

