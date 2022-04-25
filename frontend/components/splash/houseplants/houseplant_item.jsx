import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const HousePlantItem = ({ item }) => {

  const cutTitle = item.title.length > 20 ? item.title.slice(0, 15) + ' . . .' : item.title;

  const decimalCount = num => {
    const n = num.toString();
    return (n.split('.')[1].length) < 2
  }

  return (
    <Link className="category-item splash-houseplants__item-wrapper" to={`/products/${item.id}`}>
        <div className="category-item__pic-wrapper splash-houseplants__pic-wrapper">
          <LazyLoadImage src={window.tester2} alt={item.title} />
          {/* <LazyLoadImage src={item.photoURLs[0]} alt={item.title} /> */}
        </div>
      <div className="category-item__info splash-houseplants__info-wrapper">
        <h1>{cutTitle}</h1>
        <div>
          {decimalCount(item.price) ? (
            <p className="price">${item.price}0</p>
          ) : (
            <p className="price">${item.price}</p>
          )}
        </div>
      </div>
    </Link>
  );
}

export default HousePlantItem;