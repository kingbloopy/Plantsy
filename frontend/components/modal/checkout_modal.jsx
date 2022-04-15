import React from "react";
import { connect } from "react-redux";

const CheckoutModal = props => {
  return (
    <div className="checkout-modal">
      <h1>Thank you for using Plantsy!</h1>
      <p>Please note, checkout purposes are for demonstration only</p>

      <h2>If you enjoyed your experience with Plantsy, feel free to check out my portfolio:</h2>
      <a target="_blank" href="https://maggie-mcdonald.com/">
        Maggie's Portfolio
      </a>
    </div>
  );
}

export default connect(null, null)(CheckoutModal);