import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk("mySlice/fetchProduct", async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_KEY}/products`
  )
  return response.data;
});