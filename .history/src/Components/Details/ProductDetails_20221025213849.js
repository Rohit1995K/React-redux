import React from "react";
import { useDispatch } from "react-redux";

const ProductDetails = ({cartItems}) => {
    const { info } = cartItems;
    console.log(info);
    return (
        <p> Hello </p>
    )
}

export default ProductDetails