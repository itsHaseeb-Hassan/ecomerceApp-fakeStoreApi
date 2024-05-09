import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../Redux/Slice/productSlice';

const Products = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchProduct());
    }, [dispatch]);

    const state = useSelector(state => state);

    if (state.product.loading) {
        return <h1>Loading...</h1>;
    }

    // Check if state.product is defined before accessing its properties
    const products = state.product.data || [];

    return (
        <div className='mx-28'>
          <h1 className='my-5 text-center font-bold text-[25px]'>Products</h1>
          <p className='text-center w-[300px] mx-auto mb-4 text-[16px] text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, perferendis.</p>
            <div className='grid grid-cols-4 gap-8'>
                {products.slice(12).map((item, index) => (
                    <div key={index} className='bg-white h-48 md:h-[200px] w-[200px] shadow-2xl'>
                        <img src={item.image} alt={item.name} className='h-48 mx-auto' />
                    </div>
                ))}
            </div>
            <div className='text-center'>
              <button className='bg-white mt-5 border rounded-md text-black w-[200px] h-10 '>View More</button>
              </div>
        </div>
    );
};

export default Products;