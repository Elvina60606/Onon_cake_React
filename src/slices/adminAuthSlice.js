import { createSlice } from "@reduxjs/toolkit";


const adminAuthSlice = createSlice({
    name: 'adminAuth',
    initialState: {
        user: null,
        token: null,
    },
    reducers:{
        adminLoginSlice( state, action ){
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        adminLogout( state, action ){
            state.user = null;
            state.token = null;
        }
    }
})

export const { adminLoginSlice, adminLogout } = adminAuthSlice.actions;
export default adminAuthSlice.reducer;