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
    // const user = Object.assign({}, this.state);
    const user = {
      email: (this.state.email).toLowerCase(),
      name: (this.state.name).toLowerCase(),
      password: (this.state.password).toLowerCase()
    }
    this.props.signup(user);
  }

  handleSubmitDemoUser(e) {
    e.preventDefault();
    const demoUser = {
      email: 'demo@demo.com',
      password: 'demo123'
    }
    this.props.login(demoUser);
  }

  renderErrors() {
    const errors = this.props.errors;
    // remove inline styling!!
    return (
      <ul className="signup-form__form__errors" style={{ listStyleType: "none" }}>
        {errors.length > 1 ? (
          errors.map((error, i) => <li key={i}>{error}</li>)
        ) : (
          <li>{errors[0]}</li>
        )
        }
      </ul>
    );
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

              {this.renderErrors()}

              <label className="signup-form__form__label">Email address
                <input
                  type="text"
                  className="signup-form__form__input"
                  value={this.state.email}
                  onChange={this.update('email')}
                />
              </label>

              <label className="signup-form__form__label">First name
                <input
                  type="text"
                  className="signup-form__form__input"
                  value={this.state.name}
                  onChange={this.update('name')}
                />
              </label>

              <label className="signup-form__form__label">Password
                <input
                  type="password"
                  className="signup-form__form__input"
                  value={this.state.password}
                  onChange={this.update('password')}
                />
              </label>
            </div>

            <input type="submit" className="signup-form__form__submit" value="Register" />

            {this.props.troubleLink}

            <p>OR</p>

            <button className="signup-form__form__demo-button" onClick={this.handleSubmitDemoUser}>Continue with Demo User</button>

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