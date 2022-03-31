import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const CheckoutModal = props => {
  return (
    <div className="checkout-modal">
      <h1>Thank you for using Plantsy!</h1>
      <p>Please note, checkout purposes are for demonstration only</p>

      <h2>If you enjoyed your experience with Plantsy, feel free to check out my portfolio:</h2>
      {/* add link to portfolio website */}
      <Link to="null">Maggies's Portfolio</Link>
    </div>
  );
}

export default connect(null, null)(CheckoutModal);