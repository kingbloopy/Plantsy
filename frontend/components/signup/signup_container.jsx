import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { signup } from '../../actions/session_actions';
import SignUp from './signup';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  signin: <Link to="/sign-in">Sign in</Link>
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);