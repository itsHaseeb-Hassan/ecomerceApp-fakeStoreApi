import React, { useState } from 'react';
import FromInput from './Input/FromInput';
import { useSelector, useDispatch } from 'react-redux';
import { postData } from '../API/api';
import { postsData } from '../Redux/Slice/CheckoutSlice';
import { resetCart } from '../Redux/Slice/CartSlice';
import { useNavigate } from 'react-router-dom';

const ProceedForm = ({ Total, cart, selectedItems }) => {
  const [formData, setFormData] = useState({
    First_Name: "",
    last_Name: "",
    address: "",
    country: "",
    city: "",
    state: "",
    postal: "",
    phone_number: "",
    orderSummary: {
      orderNumber: '#' + Math.floor(Math.random() * 1000000),
      items: cart.length,
      total: Total,
    },
    orderDetails: cart.map((item, index) => ({
      src: item.image,
      quantity: selectedItems[index] || 1,
    })),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Checkout = useSelector(state => state);
  console.log(Checkout);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleProceedToShipping = async (e) => {
    e.preventDefault();
    const form = e.target.closest('form');
    if (form.checkValidity()) {
      const response = await postData(formData);
      dispatch(postsData(response));
      dispatch(resetCart());
      navigate('/dashboard');
    } else {
      form.reportValidity();
    }
  };

  return (
    <>
      <h2 className='text-3xl font-bold'>Checkout form</h2>
      <form>
        <div className="grid grid-cols-5 my-3 gap-5">
          <div className='flex items-center bg-gray-300 p-4 rounded-md col-span-3'>
            <div className='flex flex-col'>
              <div className='flex items-center gap-2 my-3'>
                <FromInput type="text" label="First Name" name="First_Name" value={formData.First_Name} placeholder="Enter your First Name" required="required" onChange={handleChange} />
                <FromInput type="text" label="Last Name" name="last_Name" value={formData.last_Name} placeholder="Enter your Last Name" onChange={handleChange} />
              </div>
              <div>
                <FromInput type="text" label="Address" name="address" value={formData.address} placeholder="Enter your Address" onChange={handleChange} required="required" />
              </div>
              <div className='flex items-center gap-2 my-3'>
                <FromInput type="text" label="Country" name="country" value={formData.country} placeholder="Enter your Country" onChange={handleChange} required="required" />
                <FromInput type="text" label="City" name="city" value={formData.city} placeholder="Enter your City" onChange={handleChange} required="required" />
              </div>
              <div className='flex items-center gap-2 my-3'>
                <FromInput type="text" label="State" name="state" value={formData.state} placeholder="Enter your State" onChange={handleChange} required="required" />
                <FromInput type="text" label="Postal Address" name="postal" value={formData.postal} placeholder="Enter your Postal Address" onChange={handleChange} required="required" />
              </div>
              <div>
                <FromInput type="text" label="Phone Number" name="phone_number" value={formData.phone_number} placeholder="Enter your Phone Number" onChange={handleChange} required="required" />
              </div>
              <div>
                <button className='w-full rounded-md text-white bg-[#F3A20D] py-4 font-bold my-3' onClick={handleProceedToShipping}>Proceed To Shipping</button>
              </div>
            </div>
          </div>
          <div className='col-span-2'>
            <div className='bg-white shadow-2xl rounded-md p-4 h-fit'>
              <h1 className='font-bold text-md'>Order Summary</h1>
              <p>{formData.orderSummary.orderNumber}</p>
              <div className='flex justify-between'>
                <p>Items</p>
                <p>{formData.orderSummary.items}</p>
              </div>
              <div className='flex justify-between'>
                <p>Total</p>
                <p>${formData.orderSummary.total}</p>
              </div>
            </div>
            <div className='bg-white shadow-2xl rounded-md p-4 mt-3 h-fit'>
              <h1 className='font-bold text-md py-3 border-b'>Order Details</h1>
              {formData.orderDetails.map((item, index) => (
                <div key={index} className='py-3 flex justify-between items-center'>
                  <img src={item.src} className='h-10 w-10' alt="image not displayed" />
                  <p>Quantity: {item.quantity}</p>
                </div>
              ))}
              <p>Total: {formData.orderSummary.total}</p>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default ProceedForm;
