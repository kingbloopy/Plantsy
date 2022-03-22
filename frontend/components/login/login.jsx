import React from "react";
import classNames from "classnames";
// import 'regenerator-runtime/runtime';

class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitDemoUser = this.handleSubmitDemoUser.bind(this);
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const user = {
      email: (this.state.email).toLowerCase(),
      password: (this.state.password).toLowerCase()
    }
    this.props.login(user).then(this.props.closeModal);
  }

  handleSubmitDemoUser(e){
    e.preventDefault();
    const demoUser = {
      email: 'demo@demo.com',
      password: 'demo123'
    }
    this.props.login(demoUser).then(this.props.closeModal);
  }

  componentDidMount(){
    this.props.removeErrors()
  }

  render(){
    return(
      <div className="login-form">
        <div className="login-form__inner">
        <form className="login-form__form" onSubmit={this.handleSubmit}>

          <div className="login-form__form__header-wrapper">
          <h1>Sign in</h1>
          {this.props.registerButton}
          </div>

          <div className="login-form__form__input-wrapper">
            
            <div className="login-form__form__inputs">
              <label className="login-form__form__label">Email address
                <input
                type="text"
                className="login-form__form__input"
                value={this.state.email}
                onChange={this.update('email')}
                />
              </label>
              <p className="login-form__form__error">{this.props.errors.email}</p>
            </div>

            <div className="login-form__form__inputs">
              <label className="login-form__form__label">Password
                <input
                type="password"
                className="login-form__form__input"
                value={this.state.password}
                onChange={this.update('password')}
                />
              </label>
              <p className="login-form__form__error">{this.props.errors.password}</p>
            </div>

          </div>

          <div className="login-form__form__input2-wrapper">
            <label className="login-form__form__check-label">
              <input 
              type="checkbox" 
              className="login-form__form__checkbox"
              />
              Remember me
            </label>
            {this.props.forgotPasswordLink}
          </div>

          <div className="login-form__form__lower-link-wrapper">
            <input type="submit" className="login-form__form__submit" value="Sign in"/>

            {this.props.troubleLink}

            <p>OR</p>

            <button className="demo-user-button" onClick={this.handleSubmitDemoUser}>Continue with Demo User</button>

          </div>

          <p className="login-form__form__terms">
            By clicking Sign in or Continue, you agree to Plantsy's Terms of Use and Privacy Policy. 
          </p>

        </form>
        </div>
      </div>
    );
  }
}

export default LoginForm

// stay signed in
// forgot your password?
// trouble signing in?
// or
// Continue with Demo user