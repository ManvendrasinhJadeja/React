import React from 'react'
import "./App.css";


export const Card = ({data}) => {
  return (
    <>
        <div className="card">
          <h1>Name : {data.name}</h1>
          <h1>Mail : {data.mail}</h1>
          <h1>Ph.Number : {data.phone}</h1>
        </div>
    </>
  )
}
