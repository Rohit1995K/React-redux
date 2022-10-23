import React from "react";
import { removeItem } from "../Services/Reducers/reducer";
import { useDispatch } from "react-redux";

const CartItem = ({id, title, price, amount}) => {
    const dispatch = useDispatch();
    return(
        <>
            <article className="cart-item" style={{width:'70%', display:'inline-block'}}>
                <h4>{title}</h4>
                <h4 className="item-price">{price}</h4>
                <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>X</button>
            </article>
            <div className="item-count" style={{width:'25%', display:'inline-block'}}>
                <button className="increase"> + </button>
                &nbsp;&nbsp;{amount}&nbsp;&nbsp;
                <button className="increase"> - </button>
            </div>
        <hr />
        </>
    )
}

export default CartItem;