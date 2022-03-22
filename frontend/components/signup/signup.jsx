import React from "react";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitDemoUser = this.handleSubmitDemoUser.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      email: (this.state.email).toLowerCase(),
      name: (this.state.name).toLowerCase(),
      password: (this.state.password).toLowerCase()
    }
    this.props.signup(user).then(this.props.closeModal);
  }

  handleSubmitDemoUser(e) {
    e.preventDefault();
    const demoUser = {
      email: 'demo@demo.com',
      password: 'demo123'
    }
    this.props.login(demoUser).then(this.props.closeModal);
  }

  componentDidMount() {
    this.props.removeErrors()
  }

  render() {
    return (
      <div className="signup-form">
        <div className="signup-form__inner">
          <form className="signup-form__form" onSubmit={this.handleSubmit}>

            <div className="signup-form__form__header-wrapper">
              <h1>Create your account</h1>
              <h3>Registration is easy.</h3>
            </div>

            <div className="signup-form__form__input-wrapper">

              <div className="signup-form__form__inputs">
                <label className="signup-form__form__label">Email address
                  <input
                    type="text"
                    className="signup-form__form__input"
                    value={this.state.email}
                    onChange={this.update('email')}
                  />
                </label>
                <p className="signup-form__form__error">{this.props.errors.email}</p>
              </div>

              <div className="signup-form__form__inputs">
                <label className="signup-form__form__label">First name
                  <input
                    type="text"
                    className="signup-form__form__input"
                    value={this.state.name}
                    onChange={this.update('name')}
                  />
                </label>
                <p className="signup-form__form__error">{this.props.errors.name}</p>
              </div>

              <div className="signup-form__form__inputs">
                <label className="signup-form__form__label">Password
                  <input
                    type="password"
                    className="signup-form__form__input"
                    value={this.state.password}
                    onChange={this.update('password')}
                  />
                </label>
                <p className="signup-form__form__error">{this.props.errors.password}</p>
              </div>
            </div>

            <div className="signup-form__form__lower-inputs">
              <input type="submit" className="signup-form__form__submit" value="Register" />

              <p>OR</p>

              <button className="signup-form__form__demo-button" onClick={this.handleSubmitDemoUser}>Continue with Demo User</button>
            </div>

            <p className="signup-form__form__terms">
              By clicking Register or Continue, you agree to Plantsy's Terms of Use and Privacy Policy.
            </p>

          </form>
        </div>
      </div>
    );
  }
}

export default SignUpForm;