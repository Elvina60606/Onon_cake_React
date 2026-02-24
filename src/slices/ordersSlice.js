import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

const { VITE_API_BASE, VITE_API_PATH } = import.meta.env;

export const getAsyncOrders = createAsyncThunk(
    'orders/getAsyncOrders',
    async( page =1 ) => {
        try {
            const res = await axios.get(`${VITE_API_BASE}api/${VITE_API_PATH}/orders?page=${page}`)
            return {
                orders: res.data.orders,
                pagination: res.data.pagination }
        } catch (error) {
            console.log('getAsyncOrders:',error)
        }
    }
)

export const ordersSlice = createSlice({
    name: 'orders',
    initialState: {
        orders: [],
        pagination:{},
        currentPage: 1,
        isLoading: false,
        error: null,
    },
    reducers:{
        setOrders( state, action ){
            state.order = action.payload
        },
        setCurrentPage( state, action ){
            state.currentPage = action.payload
        },
    },
    extraReducers: (builder) => {
            builder.addCase(getAsyncOrders.fulfilled, (state, action) => {
            state.orders = action.payload.orders
            state.pagination = action.payload.pagination
      })
    }
});

export const { setOrders, setCurrentPage } = ordersSlice.actions;

export default ordersSlice.reducer;