import React from "react";
import { connect } from "react-redux";

const HelpCenter = props => {
  return (
    <div className="help-center">
      <h1>Have a question?</h1>
      <h2>Feel free to contact me directly with any questions regarding Plantsy or more:</h2>
      <a href="mailto:maggiemae.mcd@gmail.com">
        maggiemae.mcd@gmail.com
      </a>
    </div>
  );
}

export default connect(null, null)(HelpCenter);