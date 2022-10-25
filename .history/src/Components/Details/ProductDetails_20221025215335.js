import React from "react";
import { useDispatch } from "react-redux";

const ProductDetails = (cardItems) => {
    const dispatch = useDispatch();
    console.log(cardItems);
    return (
        <p> Hello </p>
    )
}

export default ProductDetails