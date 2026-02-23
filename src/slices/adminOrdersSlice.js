import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const { VITE_API_BASE, VITE_API_PATH } = import.meta.env;

export const getAdminAsyncOrders = createAsyncThunk(
    'adminOrders/getAdminAsyncOrders',
    async( page =1 ) => {
        try {
            const res = await axios.get(`${VITE_API_BASE}api/${VITE_API_PATH}/admin/orders?page=${page}`)
            return {
                orders: res.data.orders,
                pagination: res.data.pagination }
        } catch (error) {
            console.log('getAdminAsyncOrders:',error)
        }
    }
)

export const adminOrdersSlice = createSlice({
    name: 'adminOrders',
    initialState: {
        adminOrders: [],
        pagination: {},
        currentPage: 1,
        isLoading: false,
        error: null,
    },
    reducers: {
        setAdminOrders( state, actions ){
            state.adminOrders = actions.payload
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload
  }
    },
    extraReducers: (builder) => {
        builder.addCase(getAdminAsyncOrders.fulfilled, (state, action) => {
        state.adminOrders = action.payload.orders
        state.pagination = action.payload.pagination
  })
}
});

export const { setAdminOrders, setCurrentPage } = adminOrdersSlice.actions;

export default adminOrdersSlice.reducer;
