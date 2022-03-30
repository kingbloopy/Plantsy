import React from "react";
// import { useEffect } from "react";
import { Link } from "react-router-dom";
import CartFooter from "./cart_footer";
import CartItem from "./cart_item";

const CartShow = props => {
  const { cartItems, updateCartItem, removeCartItem, currentUser } = props;

  // useEffect(() => {
    // props.fetchCart();
  // }, []);

  if (cartItems.length === 0){
  return (
    <div>
      <div className="empty-cart">
        {currentUser ? (
          <h1 className="empty-cart__empty">{currentUser.name}, your cart is empty.</h1>
        ) : (
          <h1 className="empty-cart__empty">Your cart is empty.</h1>
        )}
        <Link className="empty-cart__empty-message" to="/">Discover something unique to fill it up</Link>
        <div className="empty-cart__go-green">
          <p className="empty-cart__go-green__slogan">Plantsy offsets carbon emissions from every delivery</p>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="20px" height="20px" viewBox="0 0 48.000000 48.000000"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)"
              fill="#000000" stroke="none">
              <path d="M275 431 c-133 -47 -215 -122 -215 -196 0 -41 30 -95 64 -116 l31
-19 -43 -17 c-39 -17 -57 -43 -29 -43 25 0 114 60 141 94 35 46 76 134 76 164
0 40 -23 19 -42 -40 -11 -31 -33 -72 -51 -93 -30 -34 -34 -36 -59 -25 -69 32
-74 125 -11 181 37 32 140 85 178 91 27 4 77 -95 83 -166 8 -104 -41 -163
-128 -153 -28 3 -50 3 -50 -1 0 -20 28 -32 72 -32 125 0 177 158 101 309 -39
76 -55 84 -118 62z"/>
            </g>
          </svg>
        </div>
      </div>
      <CartFooter/>
    </div>
    );
  } else {
    return (
      <div className="cart-items">
        {cartItems.length === 1 ? (
          <div>
            <h1 className="cart-items__amount">{cartItems.length} item in your cart</h1>
            <ul className="cart-items__items-wrapper">
              <CartItem removeCartItem={props.removeCartItem} updateCartItem={props.updateCartItem} item={cartItems[0]}/>
            </ul>
          </div>
          ) : (
            <div>
              <h1 className="cart-items__amount">{cartItems.length} items in your cart</h1>
              <ul className="cart-items__items-wrapper">
                {cartItems.map((item, idx) => {
                  <CartItem removeCartItem={props.removeCartItem} updateCartItem={props.updateCartItem} item={item} key={idx}/>
                })}
              </ul>
            </div>
        )}
        
        <CartFooter/>
      </div>
    );
  }
}

export default CartShow;