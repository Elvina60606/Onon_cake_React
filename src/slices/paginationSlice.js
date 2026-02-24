import { createSlice } from "@reduxjs/toolkit";

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState: {
        currentPage: 1,
        pageSize: 9,
        totalItems: 0,
        error: null,
    },
    reducers: {
        setCurrentPage( state, action ){
            state.currentPage = action.payload
        },
        setPageSize( state, action ){
            state.pageSize = action.payload
        },
        setTotalItems( state, action ){
            state.totalItems = action.payload
        },
        setError( state, action ){
            state.error = action.payload
        },
    }
})


export const { setCurrentPage, setPageSize, setTotalItems, setError } = paginationSlice.actions;
export default paginationSlice.reducer;