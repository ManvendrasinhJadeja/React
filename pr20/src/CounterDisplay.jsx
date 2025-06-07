import React from 'react'
import { useSelector } from 'react-redux'

export const CounterDisplay = () => {
    const count = useSelector((state) => state.count);

  return (
<>
<h1>{count}</h1>

</>
  )
}



