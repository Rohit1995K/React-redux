import React from "react";
import { useSelector } from "react-redux";

const ProductDetails = () => {
    const items = useSelector((state) => state.cardItems.cartItems);
    console.log(items);
    return (
        <>
            <p> Total Cart Item { items.length } </p>
            <button>  Remove </button>
        </>
    )
}

export default ProductDetails