import React from "react";

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
    </div>
  );
}

export default Explore;