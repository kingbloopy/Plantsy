import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import productsReducer from "./products_reducer";
import cartReducer from "./cart_reducer";
import reviewsReducer from "./reviews_reducer";
import shopReducer from "./shop_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
  cart: cartReducer,
  reviews: reviewsReducer,
  shop: shopReducer
});

export default entitiesReducer;