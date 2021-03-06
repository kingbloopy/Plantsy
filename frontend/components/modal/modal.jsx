import React from "react";
import { closeModal } from '../../actions/modal_actions';
import { connect } from "react-redux";
import LoginFormContainer from "../login/login_container";
import SignupFormContainer from "../signup/signup_container";
import ForgotPasswordContainer from "./forgot_password";
import TroubleModalContainer from "./trouble_signing_in";
import CheckoutModalContainer from "./checkout_modal";
import HelpModalContainer from "./help_center";
import { useState } from "react";
import DeleteProduct from "./delete_product";

const Modal = ({ modal, closeModal }) => {
  let [modalTransition, setModalTransition] = useState(false);

  const closeModalTransition = () => {
    setModalTransition(true) 
    return setTimeout(() => {
        closeModal();
        setModalTransition(false)
    }, 200);
  }

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
    case 'checkout':
      component = <CheckoutModalContainer />;
      break;
    case 'help':
      component = <HelpModalContainer/>;
      break;
    case 'delete-product':
      component = <DeleteProduct />;
      break;
    default:
      return null;
  }

  const transition = modalTransition ? "-reverse" : "";

  return (
    <div className={`modal-background${transition}`} onClick={closeModalTransition}>
        <div className={`modal-child${transition}`} onClick={e => e.stopPropagation()}>
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

