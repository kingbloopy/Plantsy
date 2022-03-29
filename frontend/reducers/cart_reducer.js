import { REMOVE_CARTITEM, RECEIVE_CART } from '../actions/cartitem_actions';
import {LOGOUT_CURRENT_USER} from '../actions/session_actions';

const cartReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CART:
      return action.items;
    case REMOVE_CARTITEM:
      const nextState = Object.assign({}, state);
      delete nextState[action.cartitemId]
      return nextState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default cartReducer;