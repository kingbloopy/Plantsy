import React from "react";
import { useState } from "react";

const QuantityCounter = props => {
  let [count, setCount] = useState(0);

  const increment = () => {
    const max = props.max;
    if (count >= max) return;
    setCount(count += 1);
  }

  const decrement = () => {
    if (count <= 0) return;
    setCount(count -= 1);
  }

  return (
    <div className="quantity-counter">
      <button type="button" onClick={decrement}>&minus;</button>
      <span>{count}</span>
      <button type="button" onClick={increment}>&#43;</button>
    </div>
  );
}

export default QuantityCounter;