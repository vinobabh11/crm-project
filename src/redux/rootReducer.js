import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import dashboardReducer from './dashboardSlice';
import productsReducer from './productsSlice';

const rootReducer = combineReducers ({
    auth: authReducer,
    dash: dashboardReducer,
    product: productsReducer,
  });
  
  export default rootReducer;