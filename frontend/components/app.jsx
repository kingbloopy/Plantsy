import React from "react";
import { Route, Switch, } from "react-router-dom";
import Modal from './modal/modal';
import HeaderContainer from "./header/header_container";
import ProductShowContainer from "./products/product_show_container";
import SplashContainer from "./splash/splash_container";
import CartContainer from "./cart/cart_container";
import FooterContainer from "./footer/footer";


const App = () => (
  <div>
    <Modal/>
    <header>
      <HeaderContainer/>
    </header>
    <Switch>
      <Route exact path="/products/:productId" component={ProductShowContainer}/>
      <Route exact path="/cart" component={CartContainer} />
      <SplashContainer exact path="/" />
    </Switch>
    <footer>
      <FooterContainer/>
    </footer>
  </div>
);

export default App;