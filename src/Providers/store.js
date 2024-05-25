import { configureStore } from "@reduxjs/toolkit";
import coinReducer from './Coins/CoinsSlice'
import authReducer from './Auth/authSlice'
import cartReducer from './Cart/cartSlice'

const store = configureStore({
    reducer: {
        coins: coinReducer,
        auth: authReducer,
        cart : cartReducer,
    }
})

export default store;