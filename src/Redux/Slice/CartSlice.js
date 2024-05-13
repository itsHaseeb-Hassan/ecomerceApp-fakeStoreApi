import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cart:[],
}
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
    addItemToCart:(state,action)=>{
        const newItem = action.payload;
        state.cart.push(newItem);
    }
    }
})
export const {addItemToCart}=cartSlice.actions
export default cartSlice.reducer