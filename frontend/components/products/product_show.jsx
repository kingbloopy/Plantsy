import React from "react";
import { useEffect } from "react";
import QuantityCounter from "./quantity";
import { Link } from "react-router-dom";
import Photos from "./photos";

const ProductShow = props => {
  const product = props.product;
  
  useEffect(() => {
    props.fetchProduct(props.match.params.productId);
  }, []);

  const decimalCount = num => {
    const n = num.toString();
    return (n.split('.')[1].length) < 2
  }
  
  if (props.product) {
    return(
      <div className="product-show">
  
        <Photos photos={product.photoURLs} />
  
        <div className="product-show__product-info">
          <div className="product-show__seller-info">
            <Link to="#" className="product-show__seller-info__shop">{product.shop}</Link>
            <p>{product.sales} sales</p>
          </div>
  
          <h1 className="product-show__title">{product.title}</h1>
  
          
          <div className="product-show__pq-wrapper">
          {decimalCount(product.price) ? (
            <p className="product-show__price">${product.price}0</p>
          ) : (
            <p className="product-show__price">${product.price}</p>
          )}
  
          <div className="product-show__quantity-wrapper">
            <p>Quantity</p>
          <QuantityCounter max={product.quantity}/>
          </div>
          </div>
  
          <button type="button" className="product-show__add-cart">Add to cart</button>
          <div className="product-show__d-wrapper">
            <h4>Description</h4>
            <p className="product-show__body">{product.description}</p>
          </div>
          <p className="product-show__time">{product.date}</p>
        </div>
  
      </div>
    );
  } else {
    return null;
  }
}

export default ProductShow;