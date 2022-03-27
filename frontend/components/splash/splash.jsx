import React from "react";
import Recommended from "./recommended";
import Explore from "./explore/explore";

const Splash = props => {
  return (
    <div>
      <Explore/>
      <Recommended fetchAllProducts={props.fetchAllProducts} products={props.products} currentUser={props.currentUser}/>
    </div>
  );
}

export default Splash