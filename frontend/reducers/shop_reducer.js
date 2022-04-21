import { RECEIVE_SHOP } from "../actions/shop_actions";

const shopReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_SHOP:
      return action.shop;
    default:
      return state;
  }
}

export default shopReducer;