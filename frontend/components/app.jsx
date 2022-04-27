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
        <Route exact path="/bromeliads" component={CategoryIndexContainer}/>
        <Route exact path="/herbs" component={CategoryIndexContainer}/>
        <Route exact path="/orchids" component={CategoryIndexContainer}/>
        <Route exact path="/pottery" component={CategoryIndexContainer}/>
        <Route exact path="/houseplants" component={CategoryIndexContainer}/>
        <Route exact path="/succulents" component={CategoryIndexContainer}/>
        <Route exact path="/cacti" component={CategoryIndexContainer}/>
        <Route exact path="/supplies" component={CategoryIndexContainer}/>
        <Route exact path="/airplants" component={CategoryIndexContainer}/>
        <Route exact path="/bonsai" component={CategoryIndexContainer}/>
        <ProtectedRoute exact path="/create-listing" component={Upload}/>
        <Route exact path="/search/:query" component={SearchResults}/>
        <Route exact path="/shop/:query" component={ShopProfile}/>
        <Route exact path="/products/:productId" component={ProductShowContainer}/>
        <ProtectedRoute exact path="/profile/:userId" component={Profile}/>
        <Route exact path="/cart" component={CartContainer} />
        <Route path="/" component={SplashContainer} />
      </Switch>
      <footer>
        <FooterContainer/>
      </footer>
        <ScrollButton />
    </Content>
  </Fragment>
);

export default App;