import { configureStore } from "@reduxjs/toolkit";
import productReducer from './Slice/productSlice'
import cartReducer from './Slice/CartSlice'
export const store=configureStore({
    reducer:{
        product:productReducer,
        cart:cartReducer,
    }
})