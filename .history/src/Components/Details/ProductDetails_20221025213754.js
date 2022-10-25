import React from "react";
import { useDispatch } from "react-redux";

const ProductDetails = ({cartItems}) => {
    const { info } = cartItems.params;
    console.log(info);
    return (
        <p> Hello </p>
    )
}

export default ProductDetails