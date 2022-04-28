import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';


const RecommendedItem = props => {
  const product = props.product;

  const decimalCount = num => {
    const n = num.toString();
    return (n.split('.')[1].length) < 2
  }

  const price = decimalCount(product.price) ? product.price + '0' : product.price;

  const cutTitle = product.title.length > 28 ? product.title.slice(0, 20) + ' . . .' : product.title;

  return (
    <div className="recommended__pic-wrapper">
      <Link className="recommended__link" to={`/products/${product.id}`}>
        <img className="recommended__pic-link" src={window.tester1} />
          {/* <LazyLoadImage className="recommended__pic-link" src={product.photoURLs[0]} alt={product.title} /> */}
        {props.profile ? (
          <p className="profile-title">{cutTitle}</p>
        ) : (
          <p className="recommended__price">${price}</p>
        )}
      </Link>
    </div>
  );
}

export default RecommendedItem;


{/* <li key={props.pro.id}>
  <h1>{props.pro.title}: ${props.pro.price}</h1>
  {props.pro.description.split('\n').map((text, idx) => <p key={idx}>{text}</p>)}
  {props.pro.photoURLs.map((photo_url, idx) => <img key={idx} className="test-pic" src={photo_url} />)}
</li> */}