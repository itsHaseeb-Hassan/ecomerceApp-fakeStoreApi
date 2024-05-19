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
       },
       postProducts: (state, action) => {
        state.data.push(action.payload);
    }
  },
});
export const { getProduct,postProducts } = productSlice.actions
export default productSlice.reducer;