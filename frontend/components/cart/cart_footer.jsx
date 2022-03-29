import React from "react";
import { Link } from "react-router-dom";

const CartFooter = props => {
  return (
    <div>
      <div className="empty-cart">
        <h1 className="empty-cart__empty">Your cart is empty.</h1>
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

      <div className="cart-footer">
        <div className="cart-footer__top-left">
          <img src={window.usa} />
          <h1>United States</h1>
          <h2>English (US)</h2>
          <h3>$ (USD)</h3>
        </div>

        <div className="cart-footer__top-right">
          <h1>&copy; Plantsy, Inc.</h1>
          <Link to="/">Help Center</Link>
        </div>
      </div>
      <div className="lower-header">
        <h1>Merchant is Plantsy, Inc. (USA) or Plantsy Ireland UC (Ireland), depending on the currency in which the Seller transacts.</h1>
        <div className="lower-header__locations">
          <h1>Plansty, Inc. USA 117 Adams Street Brooklyn, NY 11201</h1>
          <h2>Plantsy Ireland UC 66/67 Great Strand Street Dublin 1</h2>
        </div>
      </div>
    </div>
  );
}

export default CartFooter;