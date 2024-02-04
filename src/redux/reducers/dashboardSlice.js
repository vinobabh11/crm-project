import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dash",
  initialState: {
    active: "Dashboard",
    show: false,
    title: null,
    row: null
  },
  reducers: {
    changeDash: (state, action) => {
      state.active = action.payload;
    },
    modalToggle: (state, action) => {
      state.show = action.payload;
    },
    changeForm: (state, action) => {
      state.title = action.payload
    },
    rowData: (state, action) =>{
      state.row = action.payload;
    },
  },
});

export const { changeDash, modalToggle, changeForm, rowData } = dashboardSlice.actions;
export default dashboardSlice.reducer;
