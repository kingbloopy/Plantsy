import React from "react";
import { closeModal } from '../../actions/modal_actions';
import { connect } from "react-redux";
import LoginFormContainer from "../login/login_container";
import SignupFormContainer from "../signup/signup_container";
import ForgotPasswordContainer from "./forgot_password";
import TroubleModalContainer from "./trouble_signing_in";

const Modal = ({ modal, closeModal }) => {

  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'forgot':
      component = <ForgotPasswordContainer />;
      break;
    case 'trouble':
      component = <TroubleModalContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);