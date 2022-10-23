import React from "react";
import CartItem from "../Components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Services/Reducers/reducer";

const CartContainer = () => {
    const dispatch = useDispatch();
    const {cardData, total, amount} = useSelector((store) => store.cardItems);

    if(amount < 1){
        return <section className="cart">
            <header>
                <h2> Your Bag</h2>
                <h4> is currently empty</h4>
                <CartItem />
            </header>
        </section>
    }
    return (
        <section className="cart">
            <header>
                <h2> Your Bag</h2>
            </header>
            <div style={{margin:'auto',width: '500px'}}>
                {cardData.map((item) => {
                    return <CartItem key={item.id} {...item} />
                })}
            </div>
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>
                        total <span>${total}</span>
                    </h4>
                </div>
                <button className="btn clear-btn" onClick={() => dispatch(clearCart())}> Clear Cart  </button>
            </footer>
        </section>
    )
}

export default CartContainer;