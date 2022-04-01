import React from "react";
import Recommended from "./recommended";
import Explore from "./explore";
import Orchids from "./orchids/orchids";

const Splash = props => {
  return (
    <div>
      <Explore currentUser={props.currentUser}/>
      <Recommended fetchAllProducts={props.fetchAllProducts} products={props.products} currentUser={props.currentUser}/>
      <Orchids products={props.products} fetchByCategory={props.fetchByCategory} />
    </div>
  );
}

export default Splash