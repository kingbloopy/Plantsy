import React from "react";

const Header = ({ currentUser, logout, openModal }) => {

  return (
    <div className="header">
      
      <img className="header__logo" src={window.plantsyLogo} />
      <input className="header__search-input"></input>
      <div className="header__nav-wrapper">
        {currentUser ? (
            <button className="header__logout-button" onClick={logout}>Sign out</button>
        ) : (
            <button className="header__signin-button" onClick={() => openModal('login')}>Sign in</button>
        )}
        <div className="header__cart__wrapper">
          <img className="header__cart__img" src={window.cartImg}></img>
        </div>
      </div>

      {/* <ul className="header__nav-links">
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
      </ul> */}
    </div>
  );
}

export default Header;