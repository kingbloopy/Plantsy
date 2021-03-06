import { useEffect } from "react";
import React from "react";
import RecommendedItem from "./recommended_item";
import Spinner from '../../misc/spinner';

const Recommended = (props) => {

  useEffect(() => {
    props.fetchAllProducts();
  }, []);

  if (props.products[props.products.length - 1] && props.currentUser) {
    const recProducts = [];
    while (recProducts.length !== 10){
      const randPro = props.products[Math.floor(Math.random() * props.products.length)];
      if (!recProducts.includes(randPro)) {
        recProducts.push(randPro);
      }
    }

    return (
      <div className="recommended">
        <div className="recommended__title-wrapper">
          <h1>Recommended for you</h1>
        </div>
        <div className="recommended__header-wrapper">
          <ul className="recommended__wrapper splash-wrapper">
            {recProducts.map((product, i) => {
              return <RecommendedItem className="recommended__product" product={product} key={i}/>
            })}
          </ul>
        </div>
      </div>
    );
  } else if (props.products.length > 0 && !props.currentUser) {
    return null;
  } else {
    return (
      <Spinner/>
    );
  }
}

export default Recommended;