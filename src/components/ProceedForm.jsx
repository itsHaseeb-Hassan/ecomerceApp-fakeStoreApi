import React,{useEffect} from 'react';
import FromInput from './Input/FromInput';
import { useSelector,useDispatch } from 'react-redux';
import { fetchData } from '../Redux/Slice/CheckoutSlice';
const ProceedForm = ({Total,cart,selectedItems}) => {
   console.log(typeof(cart))
  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(fetchData());
}, []);
   const Checkout=useSelector(state=>state)
   console.log(Checkout)
  return (
    <>
    <h2 className='text-3xl font-bold'>Checkout form</h2>
    <div className="grid grid-cols-5 my-3 gap-5">
     <div className='  flex items-center  bg-gray-300 p-4 rounded-md col-span-3'>
      <div className='flex flex-col' >
        <div className='flex items-center gap-2 my-3'>
      <FromInput name="First Name" id="firstname"   placeholder="Enter your First Name"/>
      <FromInput name="Last Name" id="lastname"  placeholder="Enter your Last Name"/>
      </div>
      <div className=''>
        <FromInput name="Address" id="address"  placeholder="Enter your Address"/>
      </div>
      <div className='flex items-center gap-2 my-3'>
      <FromInput name="Country" id="country"  placeholder="Enter your Country"/>
      <FromInput name="City" id="city"  placeholder="Enter your City"/>
      </div>
      <div className='flex items-center gap-2 my-3'>
      <FromInput name="State" id="state"  placeholder="Enter your State"/>
      <FromInput name="Postal Address" id="postal"  placeholder="Enter your Postal Address"/>
      </div>
      <div className=''>
        <FromInput name="Phone Number" id="phonenumber"  placeholder="Enter your Phone Number"/>
      </div>
      <div>
      <button className='w-full rounded-md text-white bg-[#F3A20D] py-4 font-bold my-3' >Proceed To Shiping</button>
      </div>
     </div>

     </div>
     <div className='col-span-2'>
     <div className=' bg-white shadow-2xl rounded-md p-4 h-fit'>
      <h1 className='font-bold text-md'>Order Summary</h1>
      <p>#312243643</p>
      <div className='flex justify-between'>
        <p>Items</p>
        <p>{cart.length}</p>
      </div>
      <div className='flex justify-between'>
        <p>Total</p>
        <p>${Total}</p>
      </div>
     </div>
     <div className='bg-white shadow-2xl rounded-md p-4 mt-3 h-fit'>
      <h1 className='font-bold text-md py-3 border-b'>Order Details</h1>
      {
        cart.map((item,index)=>{
          const selectedItem = selectedItems[index];
          return(
            <div key={index} className='py-3 flex justify-between items-center'>
               <img src={item.image} className='h-10 w-10' alt="image not displayed" />
               <p>Quatity:{selectedItem ? selectedItem : 1}</p>
              
            </div>
          )
        })
      }
      <p>Total:{Total}</p>
     </div>
     </div>
     </div>
    
</>

  )
}

export default ProceedForm