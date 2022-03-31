import React from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import SmallFooterContainer from "./small_footer";

const Footer = props => {
  const location = useLocation();
  const path = location.pathname;
  // console.log(location.pathname)

  if (path === '/'){
    return (
      <div className="footer">
        <div className="footer__info">
          <h1>What is Plantsy?</h1>
          <div className="footer__info__content-wrapper">
            <div className="section-1">
              <h1>A community doing good</h1>
              <p>Plantsy is a global online marketplace, where people come together to grow, sell, buy, and collect unique plants. We're also a community pushing for positive change for small businesses, people, and the planet.</p>
            </div>
            <div className="section-2">
              <h1>Support independed growers</h1>
              <p>There’s no Plantsy warehouse – just millions of people growing the plants they love. We make the whole process easy, helping you connect directly with growers to find something extraordinary.</p>
            </div>
            <div className="section-3">
              <h1>Peace of mind</h1>
              <p>Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.</p>
            </div>
          </div>
        </div>
        <SmallFooterContainer/>
      </div>
    );
  } else if (path === "/cart"){
    return null;
  } else {
    return (
      <div>
        <SmallFooterContainer/>
      </div>
    );
  }
}

// export default withRouter(Footer);

export default connect(null, null)(Footer);