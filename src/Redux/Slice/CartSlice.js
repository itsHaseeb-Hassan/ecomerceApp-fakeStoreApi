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
    },
    updateCart: (state, action) => {
        
        return {
            ...state,
            cart: action.payload
        };
    }
    }
})
export const {addItemToCart,updateCart}=cartSlice.actions
export default cartSlice.reducer