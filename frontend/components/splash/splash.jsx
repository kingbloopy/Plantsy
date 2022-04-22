import React from "react";
import Recommended from "./recommended";
import Explore from "./explore";
import Orchids from "./orchids/orchids";
import HousePlants from "./houseplants/house_plants";
import { useEffect } from "react";

const Splash = props => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Explore currentUser={props.currentUser}/>
      <Recommended fetchAllProducts={props.fetchAllProducts} products={props.products} currentUser={props.currentUser}/>
      <Orchids products={props.products} fetchByCategory={props.fetchByCategory} />
      <HousePlants products={props.products} fetchByCategory={props.fetchByCategory} />
    </div>
  );
}

export default Splash