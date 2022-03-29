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
  
        <Photos photos={[window.tester1, window.tester2]} />
        {/* <Photos photos={product.photoURLs} /> */}
  
        <div className="product-show__product-info">
          <div className="product-show__seller-info">
            <Link to="#" className="product-show__seller-info__shop">{product.shop}</Link>
            {product.sales ? (
              <p>{product.sales} sales</p>
              ): (
              <p>0 sales</p>
            )}
          </div>
  

          <h1 className="product-show__title">{product.title}</h1>
          <div className="product-show__in-stock">
            <p>In stock</p>
            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px"><path d="M 19.980469 5.9902344 A 1.0001 1.0001 0 0 0 19.292969 6.2929688 L 9 16.585938 L 5.7070312 13.292969 A 1.0001 1.0001 0 1 0 4.2929688 14.707031 L 8.2929688 18.707031 A 1.0001 1.0001 0 0 0 9.7070312 18.707031 L 20.707031 7.7070312 A 1.0001 1.0001 0 0 0 19.980469 5.9902344 z" /></svg>
          </div>

  
          
          <div className="product-show__pq-wrapper">
          {decimalCount(product.price) ? (
            <p className="product-show__price">${product.price}0</p>
          ) : (
            <p className="product-show__price">${product.price}</p>
          )}

            <div className="product-show__quantity-wrapper">
              <p>Quantity:</p>
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