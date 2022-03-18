import React from "react";
import { Provider } from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import WelcomeContainer from "./welcome/welcome_container";
import LoginFormContainer from "./login/login_container";
import SignUpFormContainer from "./signup/signup_container";


const App = () => (
  <div>
    <header>
    {/* <ProtectedRoute exact path="/welcome" /> */}
    <WelcomeContainer />
    </header>
    <Switch>
    <AuthRoute exact path="/sign-in" component={LoginFormContainer}/>
    <AuthRoute exact path="/register" component={SignUpFormContainer}/>
    </Switch>
  </div>
);

export default App;