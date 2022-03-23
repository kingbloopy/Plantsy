import { RECEIEVE_ALL_PRODUCTS, RECEIEVE_PRODUCT } from "../actions/product_actions";

const productsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type){
    case RECEIEVE_ALL_PRODUCTS:
      return Object.assign({}, action.products);
    case RECEIEVE_PRODUCT:
      nextState[action.product.id] = action.product;
      return nextState;
    default: 
      return state;
  }
}

export default productsReducer;