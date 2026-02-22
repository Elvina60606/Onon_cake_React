import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const { VITE_API_BASE, VITE_API_PATH } = import.meta.env;

export const getAsyncCart = createAsyncThunk(
  "cart/getCart",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${VITE_API_BASE}api/${VITE_API_PATH}/cart`);
      console.log('carts api response:',res.data)
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    carts: []
  },
  extraReducers: (builder) => {
    builder.addCase(getAsyncCart.fulfilled, (state, action) => {
      state.carts = action.payload.carts;
    });
  }
});

export default cartSlice.reducer;