import React from "react";
import { Link } from "react-router-dom";

const Welcome = ({ currentUser, logout, openModal }) => {


  const sessionLinks = () => (
    <div className="splash">
      <img className="s-logo" src={window.plantsyLogo} />
        <div className="splash__nav-wrapper">
        <button className="splash__sign-in-button" onClick={() => openModal('login')}>Sign in</button>
        </div>
        <div className="splash__message-wrapper">
          <h2 className="splash__message">Explore one-of-a-kind finds from independent growers</h2>
        </div>
    </div>
  );

  const welcomeMessage = () => {
    const name = (currentUser.name);
    const capitalizedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
    return(
    <div className="welcome">
      <img className="w-logo" src={window.plantsyLogo} />
      <div className="welcome__nav-wrapper">
        <button className="welcome__logout" onClick={logout}>Sign out</button>
      </div>
      <div className="welcome__wrapper">
        <h2 className="welcome__message">Welcome back, {capitalizedName}!</h2>
      </div>
    </div>
    );
  }

  return currentUser ? welcomeMessage() : sessionLinks();
}

export default Welcome;