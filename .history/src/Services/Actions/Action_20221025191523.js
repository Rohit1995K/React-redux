import {ADD_TO_CART, REMOVE_FROM_CART} from '../Constant';

export const addToCart = (id, cnt) => {
    return {
        type: ADD_TO_CART,
        id: id,
        cnt: cnt
    }
}

export const removeFromCart = () => {
    return {
        type: REMOVE_FROM_CART,
    }
}