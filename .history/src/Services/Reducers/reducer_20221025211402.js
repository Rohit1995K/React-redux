// import { ADD_TO_CART, REMOVE_FROM_CART } from "../Constant";
import { createSlice } from "@reduxjs/toolkit";
// import cardItems from "../../cartItems";

const initialState = {
    // cardData : cardItems,
    cardData : [],
    amount:4,
    total:0,
    isLoader:true,
    cartItems:[]
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cardData = []
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cardData = state.cardData.filter((item) =>
            item.id !== itemId);
        },
        addToCart: (state, id, cnt) => {
            console.log(id);
            // const itemId = id.payload;
            // const itemCnt = cnt.payload;
            // state.cartItems = [...state.cartItems, {'id':itemId, 'cnt':itemCnt}];
        },
        removeFromCart: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) =>
            item.id !== itemId);
        },                
        increase: (state, {payload}) => {
            const cardItem = state.cardData.find((item) => item.id === payload.id);
            cardItem.amount = cardItem.amount + 1;
        },
        decrease: (state, {payload}) => {
            const cardItem = state.cardData.find((item) => item.id === payload.id);
            cardItem.amount = cardItem.amount - 1;
        },        
    }
})

export const { clearCart , removeItem, addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;