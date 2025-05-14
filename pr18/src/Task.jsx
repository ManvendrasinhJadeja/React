import React from 'react'

export const Task = ({abc}) => {
  return (
    <>
    <div className="" style={{display:"flex",padding:"10px 30px"}}>
    <h3>{abc}</h3> <button>Update</button> <button>Delete</button>
    </div>
    </>
  )
}
