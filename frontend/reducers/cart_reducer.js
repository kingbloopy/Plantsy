import { REMOVE_CARTITEM, RECEIVE_CART } from '../actions/cartitem_actions';
import {LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER} from '../actions/session_actions';

const cartReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch(action.type){
    case RECEIVE_CART:
      return action.items;
    case REMOVE_CARTITEM:
      delete nextState[action.cartitemId]
      return nextState;
    case RECEIVE_CURRENT_USER:
      if (action.user.cart) {
        return action.user.cart;
      } else {
        return state;
      }
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default cartReducer;