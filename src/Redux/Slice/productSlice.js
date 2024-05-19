import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  data: null,
};



const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
       getProduct:(state,action)=>{
        state.data = action.payload;
       }
  },
});
export const { getProduct } = productSlice.actions
export default productSlice.reducer;