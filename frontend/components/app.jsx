import React from "react";
import { Route, Switch, } from "react-router-dom";
import Modal from './modal/modal';
import HeaderContainer from "./header/header_container";
import ProductShowContainer from "./products/product_show_container";
import SplashContainer from "./splash/splash_container";
import CartContainer from "./cart/cart_container";
import FooterContainer from "./footer/footer";
import CategoryIndexContainer from "./products/category_index/category_index_container";
import SearchResults from "./search/search_results";
import { Fragment } from 'react';
import ScrollButton from "./misc/scroll_button";
import { Content } from './misc/scroll_styles';
import Profile from "./profile/profile";
import { ProtectedRoute } from "../util/route_util";



const App = () => (
  <Fragment>
    <Content>
      <Modal/>
      <header>
        <HeaderContainer/>
      </header>
      <Switch>
        <Route path="/bromeliads" component={CategoryIndexContainer}/>
        <Route path="/herbs" component={CategoryIndexContainer}/>
        <Route path="/orchids" component={CategoryIndexContainer}/>
        <Route path="/pottery" component={CategoryIndexContainer}/>
        <Route path="/houseplants" component={CategoryIndexContainer}/>
        <Route path="/succulents" component={CategoryIndexContainer}/>
        <Route path="/cacti" component={CategoryIndexContainer}/>
        <Route path="/supplies" component={CategoryIndexContainer}/>
        <Route path="/air-plants" component={CategoryIndexContainer}/>
        <Route path="/bonsai" component={CategoryIndexContainer}/>
        <Route path="/search/:query" component={SearchResults}/>
        <Route exact path="/products/:productId" component={ProductShowContainer}/>
        <ProtectedRoute path="/profile/:userId" component={Profile}/>
        <Route exact path="/cart" component={CartContainer} />
        <SplashContainer exact path="/" />
      </Switch>
      <footer>
        <FooterContainer/>
      </footer>
        <ScrollButton />
    </Content>
  </Fragment>
);

export default App;