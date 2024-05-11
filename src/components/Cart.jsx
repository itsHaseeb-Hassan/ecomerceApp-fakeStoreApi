import React,{useState} from 'react'
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import TopBar from './TopBar';
import NavBar from './NavBar';
import LinksBar from './LinksBar';
import Footer from './Footer';
const Cart = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState("Quantity");

    const toggleOptions = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsOpen(false); 
    };
  return (
    <div>
        <TopBar />
        <NavBar />
        <LinksBar />
         <div className='w-full flex justify-center my-5'>
            <MdOutlineShoppingBag  size={30}/>
            <h2 className='text-[20px] font-bold'>MyCart</h2>
         </div>
         <div className='grid grid-cols-3 gap-5 mx-16'>
         <div className="overflow-x-auto  col-span-2">
            <table className="table-auto  w-full ">
                <thead>
                    <tr className="bg-red-400 ">
                        <th className="text-white  text-start py-3 px-2">Product</th>
                        <th className="text-white  text-start py-3 ">Quantity</th>
                        <th className="text-white  text-end py-3 px-2">Sub Total</th>
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
                                        <div onClick={toggleOptions} className='border rounded-md w-[200px]   py-3  '>
                                            <div className='w-full justify-between flex'>
                                            <div className='ms-2'>{selectedItem}</div>
                                            <div className='mr-2'><IoIosArrowDown  /></div>
                                            </div>
                                        </div>
                                    </div>

                                    {isOpen && (
                                        <div className="origin-top-right fixed z-10  mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none overflow-auto" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <div className="py-1" role="none">
                                            <a href="#" onClick={() => handleItemClick("1")} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">1</a>
                                            <a href="#" onClick={() => handleItemClick("2")} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">2</a>
                                            <a href="#" onClick={() => handleItemClick("3")} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">3</a>
                                        </div>
                                    </div>
                                    )}
                                </div>
                            </td>
                       <td className='text-end py-3 px-2'> $50.00</td>
                    </tr>
               </tbody>
            </table>
            </div>
            <div className=''>
                <p className='bg-red-400 py-3 text-white font-bold px-2'>Cart Total</p>
                <div className='py-5 border-b border-gray-300 flex justify-between px-2 '>
                    <span>SubTotal</span>
                    <span>$45.00</span>
                </div>
                <div className='py-5 border-b border-gray-300 flex justify-between px-2 '>
                    <span>Shiping Cost</span>
                    <span>$45.00</span>
                </div>
                <div className='py-5 border-b border-gray-300 flex justify-between px-2 '>
                    <span>Discount</span>
                    <span>$45.00</span>
                </div>
                <div className='py-5 border-b border-gray-300 flex justify-between px-2 '>
                    <span>Tax</span>
                    <span>$45.00</span>
                </div>
                <div className='py-5  flex justify-between px-2 '>
                    <span>Estimated Total</span>
                    <span>$45.00</span>
                </div>
                <button className='w-full rounded-md text-white bg-[#F3A20D] py-4 font-bold'>Proceed To Check Out</button>
            </div>
        
            </div>
            <Footer />
            </div>
  )
}

export default Cart