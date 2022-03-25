import React from "react";
import { fetchAllProducts } from "../actions/product_actions";
import { connect } from "react-redux";
import { useEffect } from "react";

const Test = (props) => {
  console.log(props);

  useEffect(() => {
    props.fetchAllProducts();
  }, []);

  if (props.products.length > 0){
    return (
      <div>
        <ul>
          {props.products.map((pro, i) => {
            return <li key={i}>
              <h1>{pro.title}: ${pro.price}</h1>
              {pro.description.split('\n').map((text, idx) => <p key={idx}>{text}</p>)}
              {pro.photoURLs.map((photo_url, idx) => <img key={idx} className="test-pic" src={photo_url} />)}
              <br/>
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
        {pro.description.split('\n').map((text, idx) => <p key={idx}>{text}</p>)}
      {pro.photoURLs.map((photo_url, idx) => <img key={idx} className="test-pic" src={photo_url} />)}
    </div>
    );
  } else {
    return null;
  }
}

const mapStateToProps = ({ entities }) => ({
  products: Object.values(entities.products)
});

const mapDispatchToProps = dispatch => ({
  fetchAllProducts: () => dispatch(fetchAllProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);

