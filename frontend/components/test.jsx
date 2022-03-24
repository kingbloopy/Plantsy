import React from "react";
import { fetchAllProducts } from "../actions/product_actions";
import { connect } from "react-redux";
import { useEffect } from "react";

const Test = (props) => {

  useEffect(() => {
    props.fetchAllProducts();
  }, []);
  
  // const pro = props.products[0];

  if (props.products.length > 0){
    return (
      <div>
        <ul>
          {props.products.map((pro, i) => {
            return <li key={i}>
              <h1>{pro.title}: ${pro.price}</h1>
              {pro.photoURLs.map((photo_url, idx) => <img key={idx} className="test-pic" src={photo_url} />)}
            </li>
          })}
        </ul>
      </div>
    );
  } else if (props.products.length === 1){
    const pro = props.products[0];
    return (
    <div className="test">
        <h1>{pro.title}: ${pro.price}</h1>
      {pro.photoURLs.map((photo_url, idx) => <img key={idx} className="test-pic" src={photo_url} />)}
    </div>
    );
  } else {
    return null;
  }

  // return props.products.length > 0 ? (
  //   <div className="test">
  //     <h1>{pro.title}</h1>
  //     <h2>{pro.category}</h2>
  //     <p>{pro.description}</p>
  //     {pro.photoURLs.map((photo_url, idx) => <img key={idx} className="test-pic" src={photo_url} />)}
  //   </div>
  // ) : (
  //   null
  // )
}

const mapStateToProps = ({ entities }) => ({
  products: Object.values(entities.products)
});

const mapDispatchToProps = dispatch => ({
  fetchAllProducts: () => dispatch(fetchAllProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);

