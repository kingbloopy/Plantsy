import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchAllProducts } from './actions/product_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser){
    const preloadedState = {
      session: { id: window.currentUser.user.id },
      entities: {
        users: { [window.currentUser.user.id]: window.currentUser.user },
        cart: window.currentUser.cart
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});