import React from 'react'

export const Heading = ({lable,content}) => {
  return (
    <>
    <div className="lg:w-[70%] text-center md:text-start h-auto flex items-center gap-5 justify-around flex-col md:flex-row ">
        <div className="text-[32px] font-semibold bg-[#B9FF66] p-1 inline text-pretty ">{lable}</div>
        <div className="inline">Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies{content}</div>
    </div>
    </>
  )
}
    