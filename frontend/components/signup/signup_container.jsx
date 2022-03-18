import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { signup, login } from '../../actions/session_actions';
import SignUpForm from './signup';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);