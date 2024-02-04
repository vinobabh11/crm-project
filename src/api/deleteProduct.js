import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteProduct = createAsyncThunk("mySlice/deleteProduct", async (id) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_API_KEY}/products/${id}`
  );
  return response.data;
});