import React from 'react'

const Footer = () => {
  return (
    <div className=' mt-5 bg-[#000A30] w-full'>
        <div className='grid grid-cols-2 mx-10 p-5 text-white border-b md:grid-cols-5 md:p-8 md:mx-28'>
            <div>
                <h1 className='text-[20px] font-semibold'>Programs</h1>
                <ul className='text-[16px] font-medium text-gray-400'>
                    <li>Corporate</li>
                    <li>One to One</li>
                    <li>Consulting</li>
                </ul>
            </div>
            <div>
                <h1 className='text-[20px] font-semibold'>Service</h1>
                <ul className='text-[16px] font-medium text-gray-400'>
                    <li>Training</li>
                    <li>Coaching</li>
                    <li>Consulting</li>
                </ul>
            </div>
            <div>
                <h1 className='text-[20px] font-semibold'>Contact</h1>
                <ul className='text-[16px] font-medium text-gray-400'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='col-span-2'>
                <h1 className='text-[20px] font-semibold'>NewsLetter</h1>
                <div className='flex'>
                    <input type='text' className='w-[300px] h-9 outline-none rounded-md border border-green-400 text-gray-400 ps-2' placeholder='Enter Your Email Address' />
                    <button className=' ms-2 bg-[#DA723C] border rounded-md text-black w-[150px] h-9 '>Subscribe</button>
                </div>
                <div className='flex gap-2 mt-3'>
                    <img src='/images/facebook.png' />
                    <img src='/images/whatsapp.png' />
                    <img src='/images/instagram.png' />
                    <img src='/images/linkedin.png' /> 
                </div>
                <div>
                    <p>Mobile:+92314-3799124</p>
                </div>
            </div>
        </div>
        <div className='flex justify-between text-white mx-28'>
            <h1 className='ms-8 text-[20px] font-medium' >LOGO</h1>
            <p className='mr-8'>All Rights Reserved 2024</p>
        </div>
    </div>
  )
}

export default Footer