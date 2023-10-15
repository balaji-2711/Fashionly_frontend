import { createSlice } from "@reduxjs/toolkit";

export const productReducer = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    addItems(state, action) {
      state.products = action.payload;
    },
    
  },
});

export const { addItems } = productReducer.actions;

export default productReducer.reducer;