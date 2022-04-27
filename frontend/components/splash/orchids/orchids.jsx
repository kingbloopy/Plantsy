import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRightCircle } from 'react-icons/bs';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Orchids = props => {

  return (
  <div className="orchids">
    <div className="orchids__inner">
      <div className="orchids__info">
        <h1>Orchids</h1>
        <Link to="/orchids">
          <h2>Shop these unique plants</h2>
          <BsArrowRightCircle className="orchid-arrow" size={16}/>
        </Link>
      </div>
      <ul className="orchids__list-wrapper">
        <Link to="/products/41">
          <LazyLoadImage className="explore__circles-wrapper__circle-wrapper__circle" src={window.tester1}/>
          {/* <LazyLoadImage src="https://plantsy-dev.s3.us-west-1.amazonaws.com/splash/lady.jpg"/> */}
          <p>$46.00</p>
        </Link>
        <Link to="/products/100">
            <LazyLoadImage className="explore__circles-wrapper__circle-wrapper__circle" src={window.pic}/>
          {/* <LazyLoadImage src="https://plantsy-dev.s3.us-west-1.amazonaws.com/splash/pink-flower.JPG" /> */}
          <p>$23.00</p>
        </Link>
        <Link to="/products/68">
            <LazyLoadImage className="explore__circles-wrapper__circle-wrapper__circle" src={window.tester2}/>
          {/* <LazyLoadImage src="https://plantsy-dev.s3.us-west-1.amazonaws.com/splash/yellow-orchid.jpg" /> */}
          <p>$39.00</p>
        </Link>
        <Link to="/products/65">
            <LazyLoadImage className="explore__circles-wrapper__circle-wrapper__circle" src={window.pic}/>
          {/* <LazyLoadImage src="https://plantsy-dev.s3.us-west-1.amazonaws.com/splash/phal.jpg" /> */}
          <p>$18.99</p>
        </Link>
        <Link to="/products/51">
            <LazyLoadImage className="explore__circles-wrapper__circle-wrapper__circle" src={window.tester1}/>
          {/* <LazyLoadImage src="https://plantsy-dev.s3.us-west-1.amazonaws.com/splash/purple-orchid.jpg"/> */}
          <p>$34.00</p>
        </Link>
        <Link to="/products/50">
            <LazyLoadImage className="explore__circles-wrapper__circle-wrapper__circle" src={window.pic}/>
          {/* <LazyLoadImage src="https://plantsy-dev.s3.us-west-1.amazonaws.com/splash/chip.jpg"/> */}
          <p>$44.99</p>
        </Link>
        <Link to="/products/44">
            <LazyLoadImage className="explore__circles-wrapper__circle-wrapper__circle" src={window.tester2}/>
          {/* <LazyLoadImage src="https://plantsy-dev.s3.us-west-1.amazonaws.com/splash/naked.JPG" /> */}
          <p>$12.99</p>
        </Link>
        <Link to="/products/46">
            <LazyLoadImage className="explore__circles-wrapper__circle-wrapper__circle" src={window.pic}/>
          {/* <LazyLoadImage src="https://plantsy-dev.s3.us-west-1.amazonaws.com/splash/zygo.JPG"/> */}
          <p>$42.99</p>
        </Link>
      </ul>
    </div>
  </div>
  );

}

export default Orchids;