import React,{useState} from 'react'
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import TopBar from './TopBar';
import NavBar from './NavBar';
import LinksBar from './LinksBar';
import Footer from './Footer';
import { useSelector,useDispatch } from 'react-redux';
import { deleteItemFromCart } from '../Redux/Slice/CartSlice';
import ProceedForm from './ProceedForm';
import ModalLayout from './Modal/ModalLayout';

const Cart = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [openItems, setOpenItems] = useState({});
    const [selectedItems, setSelectedItems] = useState({});
const dispatch=useDispatch()
    const { cart } = useSelector(state => state.cart);

    const toggleOptions = (itemId) => {
        setOpenItems({ ...openItems, [itemId]: !openItems[itemId] });
    };

    const handleItemClick = (itemId, item) => {
        setSelectedItems({ ...selectedItems, [itemId]: item });
        setOpenItems({ ...openItems, [itemId]: false });
    };
  
    const handleRemove=(itemtoRemove)=>{
        console.log("item remove",itemtoRemove)
        const updatedCart = cart?.filter(item => item.id !== itemtoRemove);   
        dispatch(deleteItemFromCart(updatedCart));
    }
  
    const cartTotal = cart.reduce((total, item, index) => {
        const quantity = selectedItems[index] || 1;
        return total + (item.price * quantity);
    }, 0);

    const subtotal=cartTotal;
    const shippingCost = 45.00;
    const discount = 45.00;
    const tax = 45.00;
    const estimatedTotal = subtotal + shippingCost - discount + tax;

    const handleModal=()=>{
        setModalOpen(true)
    }
  return (
    <div>
         {modalOpen && (
        <ModalLayout
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          center
          data={<ProceedForm Total={estimatedTotal} cart={cart} selectedItems={selectedItems}/>}
        />
      )}
        <TopBar />
        <NavBar />
        <LinksBar />
         <div className='w-full flex justify-center my-5'>
            <MdOutlineShoppingBag  size={30}/>
            <h2 className='text-[20px] font-bold'>MyCart</h2>
         </div>
         <div className='grid grid-cols-3 gap-5 mx-16 '>
                <div className="overflow-y-hidden overflow-x-auto  col-span-2 pb-28 ">
                    <table className="table-auto  w-full ">
                        <thead>
                            <tr className="bg-red-400 ">
                                <th className="text-white  text-start py-3 px-2">Product</th>
                                <th className="text-white  text-start py-3 ">Quantity</th>
                                <th className="text-white  text-end py-3 px-2">Sub Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart?.map((item, index) => (
                                <tr key={index}>
                                    <td className='flex '>
                                        <div className='mx-3 w-[100px] h-auto '>
                                            <img src={item.image} alt="image" />
                                        </div>
                                        <div className='flex flex-col'>
                                            <span>{item.title}</span>
                                            <span>Price:${item.price}</span>
                                            <span className='text-red-600' onClick={()=>handleRemove(item.id)}>Remove</span>
                                        </div>
                                    </td>
                                    <td className=''>
                                        <div className="relative inline-block text-left">
                                            <div>
                                                <div onClick={() => toggleOptions(index)} className='border rounded-md w-[200px] py-3  '>
                                                    <div className='w-full justify-between flex'>
                                                        <div className='ms-2'>{selectedItems[index] || "Quantity"}</div>
                                                        <div className='mr-2'><IoIosArrowDown /></div>
                                                    </div>
                                                </div>
                                            </div>

                                            {openItems[index] && (
                                                <div className="origin-top-right top-13 absolute z-10 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                    <div className="" role="none">
                                                        <a href="#" onClick={() => handleItemClick(index, "1")} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">1</a>
                                                        <a href="#" onClick={() => handleItemClick(index, "2")} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">2</a>
                                                        <a href="#" onClick={() => handleItemClick(index, "3")} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">3</a>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                    <td className='text-end py-3 px-2'> ${item.price * (selectedItems[index] || 1)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className='border-t border-gray-400 justify-between flex mt-4'>
                        <div></div>
                        <div>Total:${cartTotal.toFixed(2)}</div>
                    </div>
                </div>
            <div className=''>
                <p className='bg-red-400 py-3 text-white font-bold px-2'>Cart Total</p>
                <div className='py-5 border-b border-gray-300 flex justify-between px-2 '>
                    <span>SubTotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className='py-5 border-b border-gray-300 flex justify-between px-2 '>
                    <span>Shiping Cost</span>
                    <span>${shippingCost}</span>
                </div>
                <div className='py-5 border-b border-gray-300 flex justify-between px-2 '>
                    <span>Discount</span>
                    <span>${discount}</span>
                </div>
                <div className='py-5 border-b border-gray-300 flex justify-between px-2 '>
                    <span>Tax</span>
                    <span>${tax}</span>
                </div>
                <div className='py-5  flex justify-between px-2 '>
                    <span>Estimated Total</span>
                    <span>${estimatedTotal}</span>
                </div>
                
                <button className='w-full rounded-md text-white bg-[#F3A20D] py-4 font-bold' onClick={cart.length > 0 ? handleModal : null}>Proceed To Check Out</button>
            
            </div>
        
            </div>
            <Footer />
            </div>
  )
}

export default Cart