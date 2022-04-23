import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const CategoryItem = ({ item }) => {

  const cutTitle = item.title.length > 28 ? item.title.slice(0, 20) + ' . . .' : item.title;

  const decimalCount = num => {
    const n = num.toString();
    return (n.split('.')[1].length) < 2
  }

  return (
    <Link className="category-item" to={`/products/${item.id}`}>
      <div className="cacategory-item__hover">
        <div className="category-item__pic-wrapper">
          {/* <LazyLoadImage src={window.tester2} alt={item.title} /> */}
          <LazyLoadImage src={item.photoURLs[0]} alt={item.title} />
        </div>
      </div>
      <div className="category-item__info">
        <h1>{cutTitle}</h1>
        <div>
          {decimalCount(item.price) ? (
            <p className="price">${item.price}0</p>
          ) : (
            <p className="price">${item.price}</p>
          )}
          <h3>{item.shop}</h3>
        </div>
      </div>
    </Link>
  );
}

export default CategoryItem;