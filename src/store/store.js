import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice.jsx";
import authReducer from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer, 
  },
});
