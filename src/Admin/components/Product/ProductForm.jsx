import React from 'react'
import FormInput from '../../../components/Input/FromInput'
import ViewOrder from '../Order/ViewOrder'
const ProductForm = () => {
  return (
    <>
    <div className='w-full '>
    <div className='w-[600px] ms-10'>
      <h1 className='font-bold text-[20px] p-2'>Add Product</h1>
    <div className='bg-gray-300 shadow-2xl rounded-md  p-8'> 
        <FormInput type="text" label="Product Title" name="title" value={""} placeholder="Enter your Product Title" onChange={""} />
        <FormInput type="text" label="Product Price" name="price" value={""} placeholder="Enter your Product Price" onChange={""} />
        <FormInput type="text" label="Product Description" name="description" value={""} placeholder="Enter your Product Description" onChange={""} />
        <FormInput type="text" label="Product Category" name="category" value={""} placeholder="Enter your Product Category" onChange={""} />
      <div className='mt-4'>
      <label htmlFor="image" className="text-md font-bold text-gray-700 ">Product Image</label>
      
       <input type="file" id="image"  />
       </div>
       <FormInput type="text" label="Product rate" name="rate" value={""} placeholder="Enter your Product rate" onChange={""} />
        <FormInput type="text" label="Product Count" name="count" value={""} placeholder="Enter your Product Count" onChange={""} />
        <button className='w-full rounded-md mt-4 text-white bg-[#F3A20D] py-4 font-bold' >ADD PRODUCT</button>
    </div>
    </div>
    </div>
    </>
  )
}

export default ProductForm