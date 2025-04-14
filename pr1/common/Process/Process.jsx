import React from 'react'
import Plus from  '../../src/assets/Plus_icon.webp'
import Minus from '../../src/assets/Minus_icon.webp'

export const Process = ({Number,content}) => {


    let selectImg,select;
    if(select ==true){
        selectImg='../../src/assets/Plus_icon.webp'
    }
    else{
        selectImg='../../src/assets/Plus_icon.webp'

    }

    function drop(){
    }
  return (
    <>
    <div className="  w-full max-w-full h-auto rounded-4xl border-[1px] border-b-[5px] border-solid border-[#191A23] px-10 py-5 flex items-center justify-between" onClick={drop}>
    <div className=" text-center md:text-start h-auto flex items-center gap-5 justify-around flex-col md:flex-row ">
        <div className="text-[60px] font-semibold p-1 inline text-pretty  ">{Number}</div>
        <div className="inline text-[30px]">{content}</div>
    </div>
    <div className=""><img src={selectImg} alt="" /></div>
    </div>
</>
  )
}
