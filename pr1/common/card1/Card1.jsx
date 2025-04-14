import React from 'react'

export const Card1 = ({bg_color,headingText,headingText2,cardImg,text_color,iconImg}) => {
    
  return (
    <>
        <div className="w-full max-w-[600px] h-auto p-[50px] flex flex-col sm:flex-row  gap-1  sm:gap-0 sm:justify-between justify-center sm:items-center rounded-4xl border-[1px] border-b-[5px] border-solid border-[#191A23] " style={{ backgroundColor: bg_color }}>
                <div className="w-full sm:w-[50%] h-full flex flex-col justify-between items-start gap-5">
                    <div>
                    <div className='text-[25px] sm:text-[32px]  rounded-lg px-1.5 py-0.5 font-medium' style={{backgroundColor: text_color}}>
                        <h3>{headingText}</h3>
                        </div>
                    <div className='text-[25px] sm:text-[32px]  rounded-lg px-1.5 py-0.5 font-medium '  style={{backgroundColor: text_color}}><h3>{headingText2}</h3></div>
                    </div>
                    <button className='w-[100%] flex items-center gap-[18px] cursor-pointer'>
                        <img src={iconImg} alt="" className='object-contain w-auto' />
                        <a href="" className='text-[18px]'>Learn More</a>
                    </button>
                </div>
                <div className="w-full sm:w-[50%] flex justify-center items-center">
                    <img src={cardImg} alt="" className=' w-auto object-contain '  />
                </div>
        </div>
    </>
  )
}