import { configureStore } from "@reduxjs/toolkit";

import loginReducer from './slices/loginSlice';
import messageReducer from './slices/messageSlice';
import paginationReducer from './slices/paginationSlice';
import cartReducer from './slices/cartSlice';
import adminAuthReducer from './slices/adminAuthSlice';
import adminProductsReducer from './slices/adminProductsSlice';
import adminOrdersReducer from './slices/adminOrdersSlice';
import productsReducer from './slices/productsSlice';
import ordersReducer from './slices/ordersSlice';

export const store = configureStore({
    reducer: {
        login: loginReducer,
        message: messageReducer,
        pagination: paginationReducer,
        cart: cartReducer,
        adminauth: adminAuthReducer, 
        adminproduct: adminProductsReducer,
        adminorder: adminOrdersReducer,
        product: productsReducer,
        order: ordersReducer,
    }
});
