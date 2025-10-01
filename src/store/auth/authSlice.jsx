import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  isLoggedIn: Boolean(localStorage.getItem("accessToken")),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      localStorage.removeItem("accessToken");
      toast.success("User logout successfully!")
    },
  },
});

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ userData, navigate }) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        userData,
        { withCredentials: true }
      );

      if (res.data?.success) {
        navigate("/signIn");
        toast.success(res.data.message); 
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ userData, navigate }, { dispatch }) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        userData,
        { withCredentials: true }
      );

      if (res.data?.success) {
        localStorage.setItem("accessToken", res.data.token);
        dispatch(setLoggedIn(true));
        toast.success(res.data.message); 
        navigate("/");
  
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message); 
    }
  }
);

export const { setLoggedIn, logout } = authSlice.actions;
export default authSlice.reducer;
