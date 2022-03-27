import React from "react";
import { useEffect, useState } from "react";
import QuantityCounter from "./quantity";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ProductShow = props => {
  const product = props.product;
  const photos = product.photoURLs;

  let [mainPic, setMainPic] = useState(product.photoURLs[0]);
  let [index, setIndex] = useState(0);
  
  useEffect(() => {
    props.fetchProduct(props.match.params.productId);
  }, []);

  const rightClickHandler = e => {
    e.preventDefault();
    let newIndex = 
    photos.indexOf(mainPic) + 1 > photos.length + 1 ? (
      0
    ) : (
      photos.indexOf(mainPic) + 1
    );
    setIndex(newIndex)
    setMainPic(photos[newIndex]);
  }

  const leftClickHandler = e => {
    e.preventDefault();
    let newIndex = 
      photos.indexOf(mainPic) - 1 < 0 ? (
        photos.length - 1
      ) : (
        photos.indexOf(mainPic) - 1
      );
    setIndex(newIndex)
    setMainPic(photos[newIndex]);
  }

  const pictureHandler = e => {
    setMainPic(e.currentTarget.alt);
    setIndex(photos.indexOf(mainPic));
  }

  const decimalCount = num => {
    const n = num.toString();
    return (n.split('.')[1].length) < 2
  }
  
  return(
    <div className="product-show">
      <div className="product-show__product-pics">
        {photos.map((photo_url, idx) => <img key={idx} className="product-pic" src={photo_url} />)}
      </div>

      <div className="product-show__product-info">
        <div className="product-show__seller-info">
          <Link to="#" className="product-show__shop">{product.shop}</Link>
          <p>{product.sales} sales</p>
        </div>

        <h1 className="product-show__title">{product.title}</h1>

        {decimalCount(product.price) ? (
          <p className="product-show__price">${product.price}0</p>
        ) : (
          <p className="product-show__price">${product.price}</p>
        )}

        <div className="product-show__quantity-wrapper">
          <p>Quantity</p>
        <QuantityCounter max={product.quantity}/>
        </div>
        
        <button type="button" className="product-show__add-cart">Add to cart</button>
        <p className="product-show__body">{product.description}</p>
        <p className="product-show__time">{product.date}</p>
      </div>

    </div>
  );
}

export default ProductShow;