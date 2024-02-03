import { createSlice} from "@reduxjs/toolkit";
import { fetchProduct } from "../api/fetchProduct";

const productsSlice = createSlice({
  name: "product",
  initialState: {
    status: null,
    products: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default productsSlice.reducer;
