import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            let newItem = action.payload;
            console.log("Adding item:", newItem);
            console.log("Current cart state before adding:", state.cart);

            // Ensure cart is an array
            if (!Array.isArray(state.cart)) { 
                state.cart = [];
            }

            state.cart.push(newItem);
            console.log("Current cart state after adding:", state.cart);
        },

        deleteItemFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
          },
        resetCart: (state) => {
            state.cart = []; 
        },
    }
});

export const { addItemToCart, deleteItemFromCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;