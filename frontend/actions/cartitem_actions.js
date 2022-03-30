import * as CartitemUtil from '../util/cart_util';

export const RECEIVE_CART = 'RECEIVE_CART';
export const REMOVE_CARTITEM = 'REMOVE_CARTITEM';

const receiveCart = items => ({
  type: RECEIVE_CART,
  items
});

const deleteCartItem = itemId => ({
  type: REMOVE_CARTITEM,
  itemId
});

export const fetchCart = () => dispatch => (
  CartitemUtil.fetchCart()
  .then(items => dispatch(receiveCart(items)))
);

export const addCartItem = cartitem => dispatch => (
  CartitemUtil.createCartitem(cartitem)
  .then(items => dispatch(receiveCart(items)))
);

export const removeCartItem = cartitemId => dispatch => (
  CartitemUtil.removeCartitem(cartitemId)
  .then(() => dispatch(deleteCartItem(cartitemId)))
);

export const updateCartItem = (cartitem, increase) => dispatch => (
  CartitemUtil.updateCartitem(cartitem, increase)
  .then(items => dispatch(receiveCart(items)))
);