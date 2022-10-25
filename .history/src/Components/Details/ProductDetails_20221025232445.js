import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = () => {
    const items = useSelector((state) => state.cardItems.cartItems);
    console.log(items);
    return (
        <p> Total Cart Item { items.lenght } </p>
    )
}

export default ProductDetails