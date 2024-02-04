import { createSlice } from "@reduxjs/toolkit";
import { updateProduct } from "../../api/updateProduct";
import { deleteProduct } from "../../api/deleteProduct";
import { fetchProduct } from "../../api/fetchProduct";
import { addProduct } from "../../api/addProduct";

const productsSlice = createSlice({
  name: "product",
  initialState: {
    status: null,
    products: null,
    newProduct: null,
    updatedProduct: null,
    deletedProduct: null
  },
  reducers: {
    updateTable: (state,action)=>{
      state.products = {...state.products, products: action.payload}
    }
  },
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
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.newProduct = action.payload;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.updatedProduct = action.payload;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.updatedProduct = action.payload;
      });
  },
});

export const { updateTable } = productsSlice.actions;
export default productsSlice.reducer;
