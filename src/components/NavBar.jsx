import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { LuHeart } from "react-icons/lu";
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
const NavBar = () => {
  const cart=useSelector(state=>state.cart)
  console.log("linkbar cart",cart)
  return (
    <>
        <nav className=" py-4 border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="text-black font-bold text-xl">LOGO</a>
          </div>
          <div className=' flex items-center justify-between border border-gray-300 rounded-md outline-none px-2 w-80 ms-2 h-8'>
         <input type='text' className='' placeholder='Enter Your Product Name...'/> 
        <IoSearch size={20}/>
        
      </div>
      <div className='flex gap-3'>

        <Link to="/cart">
        <FiShoppingCart size={30}/>
        </Link>
        <span className=''
                style={{
                  padding: "0px 2px",
                  borderRadius: "24px",
                  position: "relative",
                  top: "-10px",
                  backgroundColor: "red",
                  color: "white",
                }}
              >
                {cart.cart.length}
              </span>
        <div className='border border-black p-1 rounded-full'>
        <LuHeart size={20}/>
        </div>
      </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default NavBar