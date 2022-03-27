import React from "react";
import Recommended from "./recommended";
import Explore from "./explore";

const Splash = props => {
  return (
    <div>
      <Explore currentUser={props.currentUser}/>
      <Recommended fetchAllProducts={props.fetchAllProducts} products={props.products} currentUser={props.currentUser}/>
    </div>
  );
}

export default Splash