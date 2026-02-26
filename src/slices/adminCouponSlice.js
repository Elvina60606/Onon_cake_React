import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const { VITE_API_BASE, VITE_API_PATH } = import.meta.env;


export const getAsyncAdminCoupons = createAsyncThunk(
    'adminCoupons/getAsyncAdminCoupons',
    async() => {
        try {
            const res = await axios.get(`${VITE_API_BASE}api/${VITE_API_PATH}/admin/coupons`)
            console.log(res.data.coupons)
            return {
                coupons: res.data.coupons
            }
        } catch (error) {
            console.log('getAsyncAdminCoupons:',error)
        }
    }
)





export const adminCouponSlice = createSlice({
    name: 'adminCoupons',
    initialState: {
        adminCoupons: [],
    },
    reducers: {
        setAdminCoupons( state, action ){
            state.adminCoupons = action.payload
        },
        removeAdminCoupon( state, action ){
            state.adminCoupons = state.adminCoupons.filter( adminCoupon => adminCoupon.id !== action.payload)
        }
    }
})

export default adminCouponSlice.reducer;