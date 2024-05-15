
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
        }
    },
});
export const { getData, postsData } = checkoutSlice.actions
export default checkoutSlice.reducer;