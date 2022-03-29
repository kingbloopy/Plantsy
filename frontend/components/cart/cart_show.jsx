import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import CartFooter from "./cart_footer";

const CartShow = props => {
  const { cartItems, updateCartItem, removeCartItem, currentUser } = props;

  useEffect(() => {
    // props.fetchCart();
  }, []);

  if (cartItems.length === 0){
  return (
    <div>
      <CartFooter/>
    </div>
    );
  } else {
    return (
      <div>
        <h1>Your cart has items.</h1>
        <CartFooter/>
      </div>
    )
  }
}

export default CartShow;