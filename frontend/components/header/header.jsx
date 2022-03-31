import React from "react";
import { Link } from "react-router-dom";

const Header = ({ currentUser, logout, openModal, cart }) => {

  return (
    <div className="header">

      <div className="header__upper">

        <Link className="header__link" to="/">
          <img className="header__logo" src={window.plantsyLogo} />
        </Link>

        <div className="header__search-wrapper">
          <input className="header__search-input" placeholder="Search for anything"></input>
          <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">    <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 19.585938 21.585938 C 20.137937 22.137937 21.033938 22.137938 21.585938 21.585938 C 22.137938 21.033938 22.137938 20.137938 21.585938 19.585938 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z" /></svg>
        </div>

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