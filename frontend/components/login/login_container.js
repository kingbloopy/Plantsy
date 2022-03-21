import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { login, removeErrors } from '../../actions/session_actions';
import LoginForm from './login';
import { ErrorsUtil } from "../../util/errors_util";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = ({ errors }) => ({
  errors: ErrorsUtil(errors.session),
  // registerLink: <Link to="/register" className="login-form__form__register-button">Register</Link>,
  forgotPasswordLink: <Link to="/forgot-password">Forgot your password?</Link>,
  troubleLink: <Link to="/trouble-signing-in">Trouble signing in?</Link>
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  removeErrors: () => dispatch(removeErrors()),
  registerButton: <button onClick={() => dispatch(openModal('signup'))}>Register</button>,
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);