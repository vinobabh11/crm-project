import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addProduct = createAsyncThunk("mySlice/addProduct", async (data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_KEY}/products/add`,
    data
  );
  return response.data;
});