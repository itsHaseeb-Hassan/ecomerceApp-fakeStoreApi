import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    status: 'idle', // To track the status of the async operation
    error: null // To store any potential errors
}

// Define your async thunk function
export const fetchData = createAsyncThunk(
    'fetchData', // Action type string
    async () => {
        try {
            const response = await axios.get('http://localhost:3001/orderDetail');
            return response.data; // Assuming your API returns data
        } catch (error) {
            throw error; // Throw any errors to be handled by Redux Toolkit
        }
    }
);

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        // You can define other synchronous actions here if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading'; // Update status to loading while fetching
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded'; // Update status to succeeded on successful fetch
                state.data = action.payload; // Update state with fetched data
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'failed'; // Update status to failed if fetch fails
                state.error = action.error.message; // Store error message
            });
    },
});

export default checkoutSlice.reducer;