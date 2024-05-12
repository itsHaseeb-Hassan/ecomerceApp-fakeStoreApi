import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: null,
  cart:[],
  loading: false,
  error: false,
};

export const fetchProduct = createAsyncThunk("fetchProduct", async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    throw error;
  }
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      console.log("error message is ", action.error.message);
      state.error = true;
    });
  },
});
export const { addItemToCart } = productSlice.actions; 
export default productSlice.reducer;