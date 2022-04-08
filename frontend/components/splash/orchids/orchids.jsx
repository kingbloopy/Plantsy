import React from "react";
// import OrchidItem from "./orchids_item";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Orchids = props => {

  const products = props.products.filter(product => product.category === 'Orchid');

if (props.products.length > 0) {
  const orchids = [];
  while (orchids.length !== 12) {
    const randPro = products[Math.floor(Math.random() * products.length)];
    orchids.push(randPro);
  }

    return (
    <div className="orchids">
      <div className="orchids__info">
        <h1>Orchids</h1>
        <Link to="/orchids">
          <h2>Shop these unique plants</h2>
          <img src={window.arrow}/>
        </Link>
      </div>
      <ul className="orchids__list-wrapper">
        <Link to="/products/41">
          <img src="https://plantsy-dev.s3.us-west-1.amazonaws.com/splash/lady.jpg"/>
          <p>$46.00</p>
        </Link>
        <Link to="/products/100">
          <img src="https://plantsy-dev.s3.us-west-1.amazonaws.com/splash/pink-flower.JPG" />
          <p>$23.00</p>
        </Link>
        <Link to="/products/68">
          <img src="https://plantsy-dev.s3.us-west-1.amazonaws.com/splash/yellow-orchid.jpg" />
          <p>$39.00</p>
        </Link>
        <Link to="/products/65">
          <img src="https://plantsy-dev.s3.us-west-1.amazonaws.com/splash/phal.jpg" />
          <p>$18.99</p>
        </Link>
        <Link to="/products/51">
          <img src="https://plantsy-dev.s3.us-west-1.amazonaws.com/splash/purple-orchid.jpg"/>
          <p>$34.00</p>
        </Link>
        <Link to="/products/50">
          <img src="https://plantsy-dev.s3.us-west-1.amazonaws.com/splash/chip.jpg"/>
          <p>$44.99</p>
        </Link>
        <Link to="/products/44">
          <img src="https://plantsy-dev.s3.us-west-1.amazonaws.com/splash/naked.JPG" />
          <p>$12.99</p>
        </Link>
        <Link to="/products/46">
          <img src="https://plantsy-dev.s3.us-west-1.amazonaws.com/splash/zygo.JPG"/>
          <p>$42.99</p>
        </Link>
      </ul>
    </div>
    );
  } else {
    return null
  }
}

export default Orchids;