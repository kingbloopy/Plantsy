import React from "react";
import Recommended from './recommended/recommended';
import Explore from './explore/explore';
import Orchids from "./orchids/orchids";
import HousePlants from "./houseplants/house_plants";
import Discover from "./discover/discover";

const Splash = props => {
debugger
  return (
    <div className="splash-wrapper">
      <Explore currentUser={props.currentUser}/>
      <Recommended fetchAllProducts={props.fetchAllProducts} products={props.products} currentUser={props.currentUser}/>
      <Orchids products={props.products} fetchByCategory={props.fetchByCategory} />
      <HousePlants products={props.products} fetchByCategory={props.fetchByCategory} />
      <Discover products={props.products} />
    </div>
  );
}

export default Splash