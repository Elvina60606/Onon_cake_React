import { configureStore } from "@reduxjs/toolkit";

import loginReducer from './slices/loginSlice';
import counterReducer from './slices/counterSlice';

export const store = configureStore({
    reducer: {
        login: loginReducer,
        counter: counterReducer,
    }
});
