import React from "react";

const CartItem = props => {
  console.log(props);
  return (
    <div>
      <li>{props.item.title}</li>
    </div>
  );
}

export default CartItem;