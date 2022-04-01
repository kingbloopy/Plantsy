import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {

  const cutTitle = item.title.length > 28 ? item.title.slice(0, 20) + ' . . .' : item.title;
  return (
    <Link className="category-item" to={`/products/${item.id}`}>
      <div className="cacategory-item__hover">
        <div className="category-item__pic-wrapper">
          <img src={window.tester2} alt={item.title} />
          {/* <img src={item.photoURLs[0]} alt={item.title} /> */}
        </div>
      </div>
      <div className="category-item__info">
        <h1>{cutTitle}</h1>
        {/* insert reviews later */}
        <div>
          <h2 className="price">${parseFloat(item.price)}</h2>
          <h3>{item.shop}</h3>
        </div>
      </div>
    </Link>
  );
}

export default CategoryItem;