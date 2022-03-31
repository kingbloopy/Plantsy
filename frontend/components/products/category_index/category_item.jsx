import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <Link className="category-item" to={`/products/${item.id}`}>
      {/* change this class name! */}
      <img className="recommended__pic-link" src={item.photoURLs[0]} alt={item.title} />
      <div className="category-item__info">
        <h1>{item.title}</h1>
        {/* insert reviews later */}
        <h2>{item.price}</h2>
        <h3>{item.shop}</h3>
      </div>
    </Link>
  );
}

export default CategoryItem;