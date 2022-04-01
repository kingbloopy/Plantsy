import React from "react";
import { Link } from "react-router-dom";

const Explore = ({ currentUser }) => {

  let capitalizedName;
  if (currentUser){
    const name = (currentUser.name);
    capitalizedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  }

  return (
    <div className="explore">
      <div className="explore__wrapper">
        {currentUser ? (
          <h2 className="explore__wrapper__welcome-message">Welcome back, {capitalizedName}!</h2>
          ) : (
            <h2 className="explore__wrapper__explore-message">Explore one-of-a-kind finds from independent growers</h2>
        )}
      </div>
      <div className="explore__circles-wrapper">

        <Link to="/bromeliads" className="explore__circles-wrapper__circle-wrapper">
          <img className="explore__circles-wrapper__circle-wrapper__circle" src={window.bromeliad}></img>
          <h1 className="title">Bromeliads</h1>
        </Link>

        <Link to="herbs" className="explore__circles-wrapper__circle-wrapper">
          <img className="explore__circles-wrapper__circle-wrapper__circle" src={window.herbs}></img>
          <h1 className="title">Herbs</h1>
        </Link>

        <Link to="orchids" className="explore__circles-wrapper__circle-wrapper">
          <img className="explore__circles-wrapper__circle-wrapper__circle" src={window.orchid}></img>
          <h1 className="title">Orchids</h1>
        </Link>

        <Link to="houseplants" className="explore__circles-wrapper__circle-wrapper">
          <img className="explore__circles-wrapper__circle-wrapper__circle" src={window.houseplants}></img>
          <h1 className="title">House Plants</h1>
        </Link>

        <Link to="succulents" className="explore__circles-wrapper__circle-wrapper">
          <img className="explore__circles-wrapper__circle-wrapper__circle" src={window.succulents}></img>
          <h1 className="title">Succulents</h1>
        </Link>

        <Link to="cacti" className="explore__circles-wrapper__circle-wrapper">
          <img className="explore__circles-wrapper__circle-wrapper__circle" src={window.cactus}></img>
          <h1 className="title">Cacti</h1>
        </Link>

      </div>
    </div>
  );
}

export default Explore;