import React from "react";

class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitDemoUser = this.handleSubmitDemoUser.bind(this);
    this.errors = this.props.errors;
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    // const user = Object.assign({}, this.state);
    const user = {
      email: (this.state.email).toLowerCase(),
      password: (this.state.password).toLowerCase()
    }
    this.props.login(user);
  }

  handleSubmitDemoUser(e){
    e.preventDefault();
    const demoUser = {
      email: 'demo@demo.com',
      password: 'demo123'
    }
    this.props.login(demoUser);
  }

  renderErrors(){
    const errors = this.props.errors;
    // remove inline styling!!
    return(
      <ul className="login-form__form__errors" style={{listStyleType: "none"}}>
        { errors.length > 1 ? (
          errors.map((error, i) => <li key={i}>{error}</li>)
          ) : (
            <li>{errors[0]}</li>
          )
        }
      </ul>
    );
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
          {this.props.registerLink}
          </div>

          <div className="login-form__form__input-wrapper">

            {this.renderErrors()}

            <label className="login-form__form__label">Email address
              <input
              type="text"
              className="login-form__form__input"
              value={this.state.email}
              onChange={this.update('email')}
              />
            </label>

            <label className="login-form__form__label">Password
              <input
              type="password"
              className="login-form__form__input"
              value={this.state.password}
              onChange={this.update('password')}
              />
            </label>
          </div>

          <div>
            <label className="login-form__form__check-label">
              <input type="checkbox" className="login-form__form__checkbox"/>
              Stay signed in
            </label>
            {this.props.forgotPasswordLink}
          </div>

          <input type="submit" className="login-form__form__submit" value="Sign in"/>

          {this.props.troubleLink}

          <p>OR</p>

            <button className="login-form__form__demo-button" onClick={this.handleSubmitDemoUser}>Continue with Demo User</button>

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