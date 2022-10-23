import { configureStore } from "@reduxjs/toolkit";
import cartReducer from  './Services/Reducers/reducer';


export const store = configureStore({
    reducer: {
        cart: cartReducer
    },
});