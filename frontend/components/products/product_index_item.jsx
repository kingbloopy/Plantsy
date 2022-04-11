import React from "react";
import { Link } from "react-router-dom";

const ProductItem = props => {
  const product = props.product;

  const decimalCount = num => {
    const n = num.toString();
    return (n.split('.')[1].length) < 2
  }

  return (
    <div className="recommended__pic-wrapper">
      <Link className="recommended__link" to={`/products/${product.id}`}>
        <img className="recommended__pic-link" src={window.tester1} />
          {/* <img className="recommended__pic-link" src={product.photoURLs[0]} alt={product.title} /> */}
      </Link>
      <div className="recommended__price-wrapper">
        {decimalCount(product.price) ? (
          <p className="recommended__price">${product.price}0</p>
        ) : (
            <p className="recommended__price">${product.price}</p>
        )}
      </div>
    </div>
  );
}

export default ProductItem;


{/* <li key={props.pro.id}>
  <h1>{props.pro.title}: ${props.pro.price}</h1>
  {props.pro.description.split('\n').map((text, idx) => <p key={idx}>{text}</p>)}
  {props.pro.photoURLs.map((photo_url, idx) => <img key={idx} className="test-pic" src={photo_url} />)}
</li> */}