
//暫存後續再開發

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const { VITE_API_BASE, VITE_API_PATH } = import.meta.env;

export const getAsyncCoupons = createAsyncThunk(
    'coupons/getAsyncCoupons',
    async(code) => {
        try {
            const res = await axios.post(`${VITE_API_BASE}api/${VITE_API_PATH}/coupons`,{data: code})
            console.log(res.data)
            return res.data
        } catch (error) {
            console.log(error.response.data)
        }
    }

)

export const couponSlice = createSlice({
    name: 'coupons',
    initialState:{
        coupons: [],
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
            builder
                .addCase(getAsyncCoupons.fulfilled,(state, action) => {
                    state.coupons = action.payload;
                })
        }

});


export default couponSlice.reducer;