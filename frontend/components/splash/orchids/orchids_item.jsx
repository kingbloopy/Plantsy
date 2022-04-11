import React from "react";
import { Link } from "react-router-dom";

const OrchidItem = ({ item }) => {

  const decimalCount = num => {
    const n = num.toString();
    return (n.split('.')[1].length) < 2
  }

  return item ? (
    <Link to={`/products/${item.id}`}>
      <img className="recommended__pic-link" src={window.tester2} alt={item.title} />
      {/* <img src={item.photoURLs[0]} alt={item.title} /> */}
      {decimalCount(item.price) ? (
        <p className="recommended__price">${item.price}0</p>
      ) : (
        <p className="recommended__price">${item.price}</p>
      )}
    </Link>
  ) : null;
}

export default OrchidItem;