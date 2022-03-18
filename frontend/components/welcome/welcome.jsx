import React from "react";
import { Link } from "react-router-dom";

const Welcome = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="welcome-links">
      <Link to="/sign-in">Sign in</Link>
    </div>
  );

  const welcomeMessage = () => {
    const name = (currentUser.name);
    const capitalizedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
    return(
    <div className="welcome-wrapper">
      <h2 className="welcome-message">Welcome back, {capitalizedName}!</h2>
      <button className="logout-button" onClick={logout}>Sign out</button>
    </div>
    );
  }

  return currentUser ? welcomeMessage() : sessionLinks();
}

export default Welcome;