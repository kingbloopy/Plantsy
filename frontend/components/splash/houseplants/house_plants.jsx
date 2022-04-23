import React from "react";
import HousePlantItem from "./houseplant_item";
import { Link } from "react-router-dom";
import { BsArrowRightCircle } from 'react-icons/bs';

const HousePlants = props => {

  const products = [];
  if (props.products[props.products.length - 1]){
    const housePlantProducts = props.products.filter(product => product.category === 'House Plant');
    while (products.length !== 4) {
      const randPro = housePlantProducts[Math.floor(Math.random() * housePlantProducts.length)];
      if (!products.includes(randPro)){
        products.push(randPro);
      }
    }
  }

  if (props.products[props.products.length - 1]) {
    return (
      <div className="category-index splash-houseplants">
        <Link to="/houseplants">
          <h2>House Plants</h2>
          <BsArrowRightCircle className="houseplant-arrow" size={22}/>
        </Link>
        <div className="category-index__ul-wrapper splash-houseplants__ul-wrapper">
          <ul className="category-index__items-wrapper">
            {products.map((item, idx) => (
              <li key={idx}>
                <HousePlantItem item={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      null
    )
  }
}

export default HousePlants;

