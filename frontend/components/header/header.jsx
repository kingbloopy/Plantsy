import React from "react";

const Header = ({ currentUser, logout, openModal }) => {

  return (
    <div className="header">
      <img className="header__logo" src={window.plantsyLogo} />
      <div className="header__nav-wrapper">
        {currentUser ? (
            <button className="header__nav-wrapper__logout-button" onClick={logout}>Sign out</button>
        ) : (
            <button className="header__nav-wrapper__signin-button" onClick={() => openModal('login')}>Sign in</button>
        )}
      </div>
    </div>
  );
}

export default Header;