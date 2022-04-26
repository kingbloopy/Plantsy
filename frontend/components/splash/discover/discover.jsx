import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Discover = props => {

  return (
    <div className="discover">
      <div className="discover__inner">
        <h2>Discover Unique Items</h2>
        <p>Based on your activity</p>

        <div className="image-grid">
          <Link className="image-grid-col-2 image-grid-row-2" to="/products/84">
            {/* <img src={window.tester2}></img> */}
            <LazyLoadImage src="https://plantsy-dev.s3.us-west-1.amazonaws.com/splash/discover/succulent.jpg" />
            <p>Cliff Cotyledon Crassulaceae</p>
          </Link>
          <Link to="/products/32">
            {/* <img className="discover__img" src={window.pic}></img> */}
            <LazyLoadImage src="https://plantsy-dev.s3.us-west-1.amazonaws.com/splash/discover/pink.PNG" />
            <p>Pink Aglaonema Evergreen</p>
          </Link>
          <Link to="/products/55">
            <img src={window.tester1}></img>
            {/* <LazyLoadImage src="https://plantsy-dev.s3.us-west-1.amazonaws.com/splash/discover/brom.jpg" /> */}
            <p>Blue Tango Bromeliad</p>
          </Link>
          <Link to="/products/104">
            {/* <img src={window.pic}></img> */}
            <LazyLoadImage src="https://plantsy-dev.s3.us-west-1.amazonaws.com/splash/discover/cactus.jpg" />
            <p>Live Miniature Cactus</p>
          </Link>
          <Link  to="/products/26">
            {/* <img src={window.tester2}></img> */}
            <LazyLoadImage src="https://plantsy-dev.s3.us-west-1.amazonaws.com/splash/discover/fern.jpg" />
            <p>Maidenhair Fern</p>
          </Link>
          <Link to="/products/17">
            {/* <img src={window.pic}></img> */}
            <LazyLoadImage src="https://plantsy-dev.s3.us-west-1.amazonaws.com/splash/discover/pep.jpg" />
            <p>Chinese Money Plant</p>
          </Link>
          <Link to="/products/58">
            {/* <img src={window.tester1}></img> */}
            <LazyLoadImage src="https://plantsy-dev.s3.us-west-1.amazonaws.com/splash/discover/pineapple.JPG" />
            <p>Pineapple Plant with Fruit</p>
          </Link>
        </div>
      </div>

    </div>
  );
}

export default Discover