import React from "react";
import { Provider } from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
// can add custom AuthRoute and ProtectedRoute in route_util
import WelcomeContainer from "./welcome/welcome_container";
import LoginFormContainer from "./login/login_container";


const App = () => (
  <div>
    <header>
    <WelcomeContainer/>
    </header>
    <Route path="/sign-in" component={LoginFormContainer}/>
  </div>
);

export default App;