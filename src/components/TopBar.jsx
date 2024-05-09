import React from 'react'
import { FaFacebook, FaInstagram , FaLinkedin ,FaYoutube} from "react-icons/fa";
const TopBar = () => {
  return (
    <div className='py-4 border-b border-gray-300'>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

        <div className='flex gap-2 '>
            <FaFacebook size={20}/>
            <FaInstagram size={20}/>
            <FaLinkedin size={20}/>
            <FaYoutube  size={20}/>
        </div>
        <div className='text-center'>
            <p>Free Shipping This Week Order-7$</p>
        </div>
        <div>
            <p>Log In/Sign Up</p>
        </div>
        </div>
    </div>
    </div>
  )
}

export default TopBar