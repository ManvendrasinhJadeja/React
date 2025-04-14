import React from 'react'

export const Card = ({imgAdd,brandName,price}) => {
  return (
    <>
        <div className="card">

        <div className="cardTop">
            <img src={imgAdd} alt="" />
        </div>
        <div className="cardBtm">
            <h2>{brandName}</h2>
            <h3>{price}</h3>
        </div>
            
        </div>
    </>
  )
}
