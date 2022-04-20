import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../search/search_bar";

const Header = ({ currentUser, logout, openModal, cart }) => {

  return (
    <div className="header">

      <div className="header__upper">

        <Link className="header__link" to="/">
          <img className="header__logo" src={window.plantsyLogo} />
        </Link>

        <SearchBar/>

        <div className="header__button-wrapper">
          {currentUser ? (
              <button className="header__logout-button" onClick={logout}>Sign out</button>
          ) : (
              <button className="header__signin-button" onClick={() => openModal('login')}>Sign in</button>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="cart-number-wrapper">
            <p className="empty"></p>
            <Link className="header__cart__wrapper" to="/cart">
              <img className="header__cart__img" src={window.cartImg}></img>
            </Link>
          </div>
        ) : (
          <div className="cart-number-wrapper">
            <p>{cart.length}</p>
            <Link className="header__cart__wrapper" to="/cart">
              <img className="header__cart__img" src={window.cartImg}></img>
            </Link>
          </div>
        )}

      </div>
      

      <ul className="header__nav-links">
        <Link to="/bromeliads">Bromeliads</Link>
        <Link to="/herbs">Herbs</Link>
        <Link to="/orchids">Orchids</Link>
        <Link to="/pottery">Pottery</Link>
        <Link to="/houseplants">Houseplants</Link>
        <Link to="/succulents">Succulents</Link>
        <Link to="/cacti">Cacti</Link>
        <Link to="supplies">Supplies</Link>
        <Link to="air-plants">Air Plants</Link>
        <Link to="bonsai">Bonsai</Link>
      </ul>
    </div>
  );
}

export default Header;