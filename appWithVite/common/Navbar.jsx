import React from 'react'

export const Navbar = () => {
  return (
    <>
    <div className="w-[100%] h-[80px] bg-[#d9d9d9c2] flex justify-around px-[50px] items-center  ">
    <div className="navLeft w-[20%] text-[30px]">
      Logo
    </div>
    <div className="navCenter w-[50%] flex justify-center gap-[30px] items-center text-[20px]">
        <a href="#">Home</a>
        <a href="#">Contact-Us</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Products</a>
    </div>
    <div className="navRight w-[20%] flex justify-end">
      <button className='w-[160px] h-[50px] text-[white] rounded-lg bg-slate-800'>Subscribe</button>
    </div>
    </div>
    </>
  )
}
