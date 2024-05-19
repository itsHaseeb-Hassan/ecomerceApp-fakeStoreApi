import React, { useState } from 'react';
import FormInput from '../../../components/Input/FromInput';
import { postProduct } from '../../../API/api';
import { postProducts } from '../../../Redux/Slice/productSlice';
import { useDispatch } from 'react-redux';

const ProductForm = () => {
  const dispatch=useDispatch()
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "", // State to store image source
    rating: {
      rate: "",
      count: ""
    }
  });

  const handleChange = (e) => {
    if (e.target.name === "rate" || e.target.name === "count") {
      setFormData({
        ...formData,
        rating: {
          ...formData.rating,
          [e.target.name]: e.target.value
        }
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  // Handle image input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({
        ...formData,
        image: reader.result // Set image source to state
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleProductData = async(e) => {
    e.preventDefault();
    console.log(formData); 
    setFormData({
      title: "",
      price: "",
      description: "",
      category: "",
      image: "",
      rating: {
        rate: "",
        count: ""
      }
    });
    const response = await postProduct(formData);
    dispatch(postProducts(response));
  };

  return ( 
    <>
      <div className='w-full '>
        <div className='w-[600px] ms-10'>
          <h1 className='font-bold text-[20px] p-2'>Add Product</h1>
          <div className='bg-gray-300 shadow-2xl rounded-md  p-8'>
            <FormInput type="text" label="Product Title" name="title" value={formData.title} placeholder="Enter your Product Title" onChange={handleChange} />
            <FormInput type="text" label="Product Price" name="price" value={formData.price} placeholder="Enter your Product Price" onChange={handleChange} />
            <FormInput type="text" label="Product Description" name="description" value={formData.description} placeholder="Enter your Product Description" onChange={handleChange} />
            <FormInput type="text" label="Product Category" name="category" value={formData.category} placeholder="Enter your Product Category" onChange={handleChange} />
            <div className='mt-4'>
              <label htmlFor="image" className="text-md font-bold text-gray-700 ">Product Image</label>
              <input type="file" id="image" onChange={handleImageChange} />
            </div>
            <FormInput type="text" label="Product rate" name="rate" value={formData.rating.rate} placeholder="Enter your Product rate" onChange={handleChange} />
            <FormInput type="text" label="Product Count" name="count" value={formData.rating.count} placeholder="Enter your Product Count" onChange={handleChange} />
            <button className='w-full rounded-md mt-4 text-white bg-[#F3A20D] py-4 font-bold' onClick={handleProductData} >ADD PRODUCT</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductForm;
