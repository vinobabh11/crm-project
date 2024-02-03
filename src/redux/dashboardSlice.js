import { createSlice} from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dash",
  initialState: {
    active: 'Dashboard'
  },
  reducers: {
    changeDash: (state, action) =>{
        state.active = action.payload;
    }
  },
});

export const { changeDash } = dashboardSlice.actions;
export default dashboardSlice.reducer;