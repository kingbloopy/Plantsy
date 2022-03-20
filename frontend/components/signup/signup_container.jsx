import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { signup, login, removeErrors } from '../../actions/session_actions';
import SignUpForm from './signup';
import { ErrorsUtil } from "../../util/errors_util";

const mapStateToProps = ({ errors }) => ({
  errors: ErrorsUtil(errors.session)
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user)),
  removeErrors: () => dispatch(removeErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);