import { useEffect } from "react";
import React from "react";

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

    decimalCount = num => {
      let count = 0;
      if (!!(num % 1)) count++
      return count;
    }

    return (
      <div className="recommended">
        <ul className="recommended__wrapper">
          {recProducts.map((pro, i) => {
            return <li className="recommended__img" key={i}>
              {pro.photoURLs.map((photo_url, i) => <img key={i} className="test-pic" src={photo_url} />)}
              <p>${pro.price}0</p>
            </li>
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

export default Recommended;