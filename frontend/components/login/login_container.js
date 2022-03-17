import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { login } from '../../actions/session_actions';
import LoginForm from './login';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  registerLink: <Link to="/register" className="login-form__form__register-button">Register</Link>,
  forgotPasswordLink: <Link to="/forgot-password">Forgot your password?</Link>,
  troubleLink: <Link to="/trouble-signing-in">Trouble signing in?</Link>
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);