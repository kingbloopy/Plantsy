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
import Upload from "./profile/upload_container";
import ShopProfile from "./profile/shop_profile";


const App = () => (
  <Fragment>
    <Content>
      <Modal/>
      <header className="head">
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
        <Route path="/airplants" component={CategoryIndexContainer}/>
        <Route path="/bonsai" component={CategoryIndexContainer}/>
        <ProtectedRoute path="/create-listing" component={Upload}/>
        <Route path="/search/:query" component={SearchResults}/>
        <Route path="/shop/:query" component={ShopProfile}/>
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