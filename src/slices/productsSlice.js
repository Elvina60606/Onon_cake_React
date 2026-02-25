import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const { VITE_API_BASE, VITE_API_PATH } = import.meta.env;

export const getAsyncProducts = createAsyncThunk(
    'products/getAsyncProducts',
    async( page =1 ) => {
        try {
            const res = await axios.get(`${VITE_API_BASE}api/${VITE_API_PATH}/products?page=${page}`)
            return {
                products: res.data.products,
                pagination: res.data.pagination }
        } catch (error) {
            console.log('getAsyncProducts:',error)
        }
    }
);

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        pagination: {},
        currentPage: 1,
        isLoading: false,
        error: null,
    },
    reducers: {
        setProducts( state, action ){
            state.products = action.payload
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload
        },
    },
    extraReducers: (builder) => {
            builder.addCase(getAsyncProducts.fulfilled, (state, action) => {
            state.products = action.payload.products
            state.pagination = action.payload.pagination
      })
    }
})

export const { setProducts, setCurrentPage } = productsSlice.actions;

export default productsSlice.reducer;