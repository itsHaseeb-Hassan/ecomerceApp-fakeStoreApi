import React from 'react'
import { AiOutlineProduct } from "react-icons/ai";
import { RxBorderSplit } from "react-icons/rx";
import { RiPassPendingLine } from "react-icons/ri";

const MultipleCard = () => {
    const card=[
        {
            "icon":<AiOutlineProduct size={40} />,
            "value":"14",
            "heading":"Total Product",
            "color":"#94b1ff"
        },
        {
            "icon":< RxBorderSplit size={40} />,
            "value":"15",
            "heading":"Total Orders",
            "color":"#ffcfee"
        },
        {
            "icon": <RiPassPendingLine size={40} />,
            "value":"16",
            "heading":"Pending Orders",
            "color":"#c3add8"
        },
    ]
  return (
    <>
    <div className='flex gap-5 mx-10'>
        <div className='grid grid-cols-3 gap-5  mt-10 '>
            {
                card.map((item,index)=>{
               return(
        <div key={index} className={` rounded-md w-[200px] h-[150px]`} style={{backgroundColor:item.color}}>
            <div className='flex flex-col p-4'>
                <span>{item.icon}</span>
            <h1 className='mt-4 font-semibold text-[20px]'>{item.heading}</h1>
            <p className='mt-2'>{item.value}</p>
            </div>
        </div>
              )  })
            }
        </div>
        <div className='relative bg-[#3698F2] w-[400px] h-[150px] mt-10'>
            <div className="absolute right-0 top-0 w-1/2 h-full bg-[#FFb947] rounded-ss-full"></div>
            <h1 className='text-white w-[200px] text-[20px] font-semibold m-10' >Upcoming Sale Events</h1>
        </div>
        </div>
    </>
  )
}

export default MultipleCard