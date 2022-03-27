import React from "react";

const Header = ({ currentUser, logout, openModal }) => {

  return (
    <div className="header">

      <div className="header__upper">

        <img className="header__logo" src={window.plantsyLogo} />

        <div className="header__search-wrapper">
          <input className="header__search-input" placeholder="Search for anything"></input>
        </div>

        <div className="header__button-wrapper">
          {currentUser ? (
              <button className="header__logout-button" onClick={logout}>Sign out</button>
          ) : (
              <button className="header__signin-button" onClick={() => openModal('login')}>Sign in</button>
          )}
        </div>

        <div className="header__cart__wrapper">
          <img className="header__cart__img" src={window.cartImg}></img>
        </div>
      </div>
      

      <ul className="header__nav-links">
        <li>Bromeliads</li>
        <li>Herbs</li>
        <li>Orchids</li>
        <li>Pottery</li>
        <li>Houseplants</li>
        <li>Succulents</li>
        <li>Cacti</li>
        <li>Supplies</li>
        <li>Air Plants</li>
        <li>Bonsai</li>
      </ul>
    </div>
  );
}

export default Header;