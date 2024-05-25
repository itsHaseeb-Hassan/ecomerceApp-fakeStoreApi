
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
}

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        getData: (state, action) => {
            state.data = action.payload;
        },
        postsData: (state, action) => {
            state.data.push(action.payload);
        },
        deleteOrder: (state, action) => {
            state.data = state.data.filter(order => order.id !== action.payload);
          },
    },
});
export const { getData, postsData,  deleteOrder} = checkoutSlice.actions
export default checkoutSlice.reducer;