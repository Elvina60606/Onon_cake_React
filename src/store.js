import { configureStore } from "@reduxjs/toolkit";

import messageReducer from './slices/messageSlice';
import loginReducer from './slices/loginSlice';
import productsReducer from './slices/productsSlice';
import cartReducer from './slices/cartSlice';
import ordersReducer from './slices/ordersSlice';
import adminAuthReducer from './slices/adminAuthSlice';
import adminProductsReducer from './slices/adminProductsSlice';
import adminOrdersReducer from './slices/adminOrdersSlice';
import adminCouponsReducer from './slices/adminCouponSlice';

export const store = configureStore({
    reducer: {
        message: messageReducer,
        login: loginReducer,
        product: productsReducer,
        cart: cartReducer,
        order: ordersReducer,
        adminauth: adminAuthReducer, 
        adminproduct: adminProductsReducer,
        adminorder: adminOrdersReducer,
        admincoupon: adminCouponsReducer,
    }
});
