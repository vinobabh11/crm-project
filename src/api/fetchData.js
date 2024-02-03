import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("mySlice/fetchData", async (data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_KEY}/auth/login`,
    data
  );
  return response.data;
});