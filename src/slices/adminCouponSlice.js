import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const { VITE_API_BASE, VITE_API_PATH } = import.meta.env;


export const getAsyncAdminCoupons = createAsyncThunk(
    'adminCoupons/getAsyncAdminCoupons',
    async() => {
        try {
            const res = await axios.get(`${VITE_API_BASE}api/${VITE_API_PATH}/admin/coupons`)
            console.log(res.data.coupons)
            return res.data.coupons
        } catch (error) {
            console.log(error.response.data)
        }
    }
);

export const createAsyncCoupon = createAsyncThunk(
    'adminCoupons/createAsyncCoupon',
    async(newCoupon) =>{
        try {
            const res = await axios.post(`${VITE_API_BASE}api/${VITE_API_PATH}/admin/coupon`,{data: newCoupon})
            console.log(res.data)
            return res.data
        } catch (error) {
            console.log(error.response.data)
        }
    }
);

export const deleteAsyncCoupon = createAsyncThunk(
    'adminCoupons/deleteAsyncCoupon',
    async(id) => {
        try {
            const res = await axios.delete(`${VITE_API_BASE}api/${VITE_API_PATH}/admin/coupon/${id}`)
            console.log(res.data)
            return res.data
        } catch (error) {
            console.log(error.response.data)
        }
    }
)


export const adminCouponSlice = createSlice({
    name: 'adminCoupons',
    initialState: {
        adminCoupons: [],
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAsyncAdminCoupons.fulfilled,(state, action) => {
                state.adminCoupons = action.payload;
            })
    }
    
})

export default adminCouponSlice.reducer;