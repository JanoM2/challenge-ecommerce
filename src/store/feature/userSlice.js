import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const userSlice = createSlice({
  name: "product",
  initialState,
  // Actions
  reducers: {
    getProduct: (state) => state,
    addProduct: (state, action) => {
      if (action.payload.length > 0 || action.payload === undefined) return;
      state.products.push(action.payload);
    },
  },
});

export const { addProduct, getProduct } = userSlice.actions;
export default userSlice.reducer;
