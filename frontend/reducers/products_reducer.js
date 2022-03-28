import { RECEIVE_ALL_PRODUCTS, RECEIVE_PRODUCT } from "../actions/product_actions";

const productsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type){
    case RECEIVE_ALL_PRODUCTS:
      return Object.assign({}, action.products);
    case RECEIVE_PRODUCT:
      console.log('REDUCER', action.product);
      nextState[action.product.id] = action.product;
      return nextState;
    default: 
      return state;
  }
}

export default productsReducer;