import React from "react";
import { useEffect } from "react";
import { fetchProduct } from "../../actions/product_actions";


const ProductItem = props => {

  useEffect(() => {
    fetchProduct(props.pro.id);
  }, [])


  return (
    <div>
      <li key={props.pro.id}>
        <h1>{props.pro.title}: ${props.pro.price}</h1>
        {props.pro.description.split('\n').map((text, idx) => <p key={idx}>{text}</p>)}
        {props.pro.photoURLs.map((photo_url, idx) => <img key={idx} className="test-pic" src={photo_url} />)}
      </li>
    </div>
  )
}

export default ProductItem;