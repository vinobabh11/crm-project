import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateProduct = createAsyncThunk("mySlice/updateProduct", async (product) => {
  const response = await axios.put(
    `${process.env.REACT_APP_API_KEY}/products/${product.id}`,
    product.data
  );
  return response.data;
});