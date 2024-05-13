import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../Redux/Slice/productSlice';
import { Link } from 'react-router-dom';
import { addItemToCart } from '../Redux/Slice/CartSlice';

const Products = ({items}) => {
    const dispatch = useDispatch();
    const productState = useSelector(state => state.product);
    console.log("product state is",productState)
    
    useEffect(() => {
        dispatch(fetchProduct());
    }, []);

    const state = useSelector(state => state);
    if (state.product.loading) {
        return <h1>Loading...</h1>;
    }
    const handleCart = (item) => {
        console.log(item);
        dispatch(addItemToCart(item))
      };
    // Check if state.product is defined before accessing its properties
    const products = productState.data || [];

    return (
        <div className='mx-32'>
          <h1 className='my-5 text-center font-bold text-[25px]'>Products</h1>
          <p className='text-center w-[300px] mx-auto mb-4 text-[16px] text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, perferendis.</p>
            <div className='grid grid-cols-4 gap-8 ms-8'>
                {products.slice(0, items).map((item, index) => (
                    <div className='flex flex-col w-[250px]' key={index}>
                    <div  className='bg-white h-48 md:h-[200px] w-[250px] shadow-2xl'>
                        <img src={item.image} alt={item.name} className='h-48 mx-auto' />
                    </div>
                         {
                            items ? "":
                       
                        <button className='rounded-md bg-[#F3A20D] h-[40px] w-full mt-2 text-white font-bold' onClick={()=>handleCart(item)}>Add To Cart</button>
                    }
                    </div>
                ))}
            </div>
            {
               
           
                items ? <div className='text-center'>
               <Link to="/products"> <button className='bg-white mt-5 border rounded-md text-black w-[200px] h-10 '>View More</button></Link>
                </div>:""
            }
            </div>
    );
};

export default Products;