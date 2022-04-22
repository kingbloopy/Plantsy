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
            <div className="header__buttons">
              <Link to={`/profile/${currentUser.id}`}>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                  width="26pt" height="26pt" viewBox="0 0 48.000000 48.000000"
                  preserveAspectRatio="xMidYMid meet">

                  <g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)" stroke="none">
                    <path d="M172 429 c-48 -14 -109 -80 -123 -131 -23 -89 12 -182 88 -229 57
-36 154 -34 210 3 62 41 88 90 88 168 0 77 -26 127 -85 166 -43 29 -125 39
-178 23z m102 -95 c31 -30 9 -84 -34 -84 -24 0 -50 26 -50 50 0 10 7 26 16 34
8 9 24 16 34 16 10 0 26 -7 34 -16z m51 -134 c19 -31 -28 -70 -85 -70 -57 0
-104 39 -85 70 8 13 162 13 170 0z"/>
                  </g>
                </svg>
                {/* <img src={window.profilePic}/> */}
              </Link>
              <button className="header__logout-button" onClick={logout}>Sign out</button>
            </div>
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
        <Link to="airplants">Air Plants</Link>
        <Link to="bonsai">Bonsai</Link>
      </ul>
    </div>
  );
}

export default Header;