import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { login, signup } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser){
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.store = store;
  const newUser = {email: 'kbloops@test.com', name: 'king', password: 'secret'}
  window.newUser = newUser;
  window.user = { email: 'kbloops@test.com', password: 'secret'}
  window.login = login;
  window.signup = signup;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});