import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './reducers/authSlice'
import dashboardReducer from './reducers/dashboardSlice';
import productsReducer from './reducers/productsSlice';

const rootReducer = combineReducers ({
    auth: authReducer,
    dash: dashboardReducer,
    product: productsReducer,
  });
  
  export default rootReducer;