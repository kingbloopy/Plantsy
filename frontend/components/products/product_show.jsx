import React from "react";
import { useEffect } from "react";

const ProductShow = props => {

  useEffect(() => {
    props.fetchProduct(props.match.params.productId);
  }, []);

  return(
    <div>
      <h1>{props.product.title}</h1>
      <p>{props.product.shop}</p>
    </div>
  );
}

export default ProductShow;