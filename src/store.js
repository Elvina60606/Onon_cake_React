import { configureStore } from "@reduxjs/toolkit";

import loginReducer from './slices/loginSlice';
import messageReducer from './slices/messageSlice';
import paginationReducer from './slices/paginationSlice';

export const store = configureStore({
    reducer: {
        login: loginReducer,
        message: messageReducer,
        pagination: paginationReducer,
    }
});
