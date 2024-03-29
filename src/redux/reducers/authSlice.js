import { createSlice} from "@reduxjs/toolkit";
import { fetchData } from "../../api/fetchData";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: null,
    data: null,
    user: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.token = state.data.token
        window.localStorage.setItem('token', state.token)
      })
      .addCase(fetchData.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default authSlice.reducer;
