import {ADD_TO_CART, REMOVE_FROM_CART} from '../Constant';

export const addToCart = (id, cnt) => {
    return {
        type: ADD_TO_CART,
        data: {id,cnt}
    }
}

export const removeFromCart = () => {
    return {
        type: REMOVE_FROM_CART,
    }
}