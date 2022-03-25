import React from "react";
// import { Provider } from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Modal from './modal/modal';
import Test from "./test";
import HeaderContainer from "./header/header_container";
import ExploreContainer from "./explore/expore_container";
import RecommendedContainer from "./recommended/recommended_container";
import ProductContainer from "./products/product_show_container";


const App = () => (
  <div>
    <Modal/>
    <header>
      <HeaderContainer/>
    </header>
      <ExploreContainer/>
      <Switch>
      <Route path="/products/:productId" component={ProductContainer} />
      <ProtectedRoute path="/" component={RecommendedContainer} />
      </Switch>
    {/* <Test/> */}
  </div>
);

export default App;