import { useEffect } from "react";
import React from "react";
import ProductItem from "../products/product_index_item";

const Recommended = (props) => {

  useEffect(() => {
    props.fetchAllProducts();
  }, []);

  if (props.products.length > 0) {
    const recProducts = [];
    while (recProducts.length !== 10){
      const randPro = props.products[Math.floor(Math.random() * props.products.length)];
      recProducts.push(randPro);
    }

    return (
      <div className="recommended">
        <h1>Recommended for you</h1>
        <div className="recommended__header-wrapper">
          <ul className="recommended__wrapper">
            {recProducts.map((product, i) => {
              return <ProductItem className="recommended__product" product={product} key={i}/>
            })}
          </ul>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Recommended;

// return <li className="recommended__img" key={i}>
//   {pro.photoURLs.map((photo_url, i) => <img key={i} className="test-pic" src={photo_url} />)}
//   {decimalCount(pro.price) ? (
//     <p>${pro.price}0</p>
//   ) : (
//     <p>${pro.price}</p>
//   )}
// </li>