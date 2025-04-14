import React from 'react'
import { Card1 } from '../card1/Card1'
import img1 from '../../src/assets/p1.webp'
// import img1 from './assets/p1.webp'
import img2 from '../../src/assets/p2.webp'
import img3 from '../../src/assets/p3.webp'
import img4 from '../../src/assets/p4.webp'
import img5 from '../../src/assets/p5.webp'
import img6 from '../../src/assets/p6.webp'
import iconimg1 from '../../src/assets/Icon.webp'
import iconimg2 from '../../src/assets/Icon2.webp'



export const Services = () => {

    let arr =[
  {
    bg_color : '#f3f3f3',
  headingText : "Search engine",
   headingText2 : "Optimization",
    cardImg: img1,
     text_color : "#B9FF66",
    iconImg:iconimg1
  },
  {
    bg_color:'#B9FF66',
     headingText:"Pay-per-click",
    headingText2:"advertising",
    cardImg:img2,
    text_color:"white", 
    iconImg:iconimg2
  },
  {
    bg_color:'#B9FF66',
     headingText:"Pay-per-click",
    headingText2:"advertising",
    cardImg:img3,
    text_color:"white", 
    iconImg:iconimg2
  },
  {
    bg_color:'#B9FF66',
     headingText:"Pay-per-click",
    headingText2:"advertising",
    cardImg:img4,
    text_color:"white", 
    iconImg:iconimg2
  },
  {
    bg_color:'#B9FF66',
     headingText:"Pay-per-click",
    headingText2:"advertising",
    cardImg:img5,
    text_color:"white", 
    iconImg:iconimg2
  },
  {
    bg_color:'#B9FF66',
     headingText:"Pay-per-click",
    headingText2:"advertising",
    cardImg:img6,
    text_color:"white", 
    iconImg:iconimg2
  }
  
]


  return (
    <>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-auto p-2 w-full">
        
       {
           arr.map((e)=>{
               return <Card1 bg_color={e.bg_color} headingText={e.headingText} headingText2={e.headingText2} cardImg={e.cardImg} text_color={e.text_color} iconImg={e.iconImg}/>
            })
        }
        </div>
    </>
  )
}


{/* <Card1 bg_color={'#B9FF66'} headingText={"Pay-per-click"} headingText2={"advertising"} cardImg={img2} text_color={"white"} iconImg={iconimg2}/> */}