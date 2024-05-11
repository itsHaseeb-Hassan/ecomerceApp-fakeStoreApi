import React,{useState} from 'react'
import { MdOutlineShoppingBag } from "react-icons/md";
import TopBar from './TopBar';
import NavBar from './NavBar';
import LinksBar from './LinksBar';
const Cart = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOptions = () => {
        setIsOpen(!isOpen);
    };
    const toggleOptionss=()=>{

    }
  return (
    <div>
        <TopBar />
        <NavBar />
        <LinksBar />
         <div className='w-full flex justify-center my-5'>
            <MdOutlineShoppingBag  size={30}/>
            <h2 className='text-[20px] font-bold'>MyCart</h2>
         </div>
         <div className="overflow-x-auto mx-28">
            <table className="table-auto  w-full">
                <thead>
                    <tr className="bg-red-400 ">
                        <th className="text-white  text-start py-3">Product</th>
                        <th className="text-white  text-start py-3">Quantity</th>
                        <th className="text-white  text-end py-3">Sub Total</th>
                    </tr>
                </thead>
               <tbody>
               <tr>
                       <td className='flex '>
                        <div className='mx-3'>
                            <img src="/images/abc.jpg" alt="image"/>
                        </div>
                        <div className='flex flex-col'>
                            <span>Red Printed t-shirt</span>
                            <span>Price:$30.0</span>
                            <span>Remove</span>
                        </div>
                       </td>
                       <td className=''>
                                <div className="relative inline-block text-left">
                                    <div>
                                        <button type="button" onClick={toggleOptions} className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                                            Options
                                            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>

                                    {isOpen && (
                                        <div className="origin-top-right fixed z-10  mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none overflow-auto" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <div className="py-1" role="none">
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Item 1</a>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Item 2</a>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Item 3</a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </td>
                       <td className=''> $50.00</td>
                    </tr>
                    <tr>
                       <td className='flex '>
                        <div className='mx-3'>
                            <img src="/images/abc.jpg" alt="image"/>
                        </div>
                        <div className='flex flex-col'>
                            <span>Red Printed t-shirt</span>
                            <span>Price:$30.0</span>
                            <span>Remove</span>
                        </div>
                       </td>
                       <td className=''>
                                <div className="relative inline-block text-left">
                                    <div>
                                        <button type="button" onClick={toggleOptionss} className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                                            Options
                                            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* {isOpen && (
                                        <div className="origin-top-right fixed  mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none overflow-auto" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <div className="py-1" role="none">
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Item 1</a>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Item 2</a>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Item 3</a>
                                            </div>
                                        </div>
                                    )} */}
                                </div>
                            </td>
                       <td className=''> $50.00</td>
                    </tr>
               </tbody>
            </table>
        </div>
            </div>
  )
}

export default Cart