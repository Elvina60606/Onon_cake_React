import { configureStore } from "@reduxjs/toolkit";

import loginReducer from './slices/loginSlice';
import messageReducer from './slices/messageSlice';
import paginationReducer from './slices/paginationSlice';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
    reducer: {
        login: loginReducer,
        message: messageReducer,
        pagination: paginationReducer,
        cart: cartReducer,
    }
});
