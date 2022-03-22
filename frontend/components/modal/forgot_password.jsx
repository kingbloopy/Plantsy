import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { login } from "../../actions/session_actions";
import { connect } from "react-redux";

const ForgotPasswordModal = props => {
  
  const handleSubmitDemoUser = e => {
    e.preventDefault();
    const demoUser = {
      email: 'demo@demo.com',
      password: 'demo123'
    }
    props.login(demoUser).then(props.closeModal);
  }

  return(
    <div className="forgot-pass">
      <h1>
        Forgot you password?
      </h1>

      <p>Please try signing in as a Demo user to access Plantsy's content.</p>

      <button onClick={handleSubmitDemoUser}>Continue with Demo User</button>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  closeModal: () => dispatch(closeModal())
});

export default connect(null, mapDispatchToProps)(ForgotPasswordModal);
