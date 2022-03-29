import React from "react";
import { Link } from "react-router-dom";

const CartFooter = props => {
  return (
    <div>
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