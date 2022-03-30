// if item already exists in the cart
export const checkForCartItem = (cart, productId) => {

  // for (const cartItem of cart) {
  //   if (cartItem.product_id === productId) return cartItem;
  // }
  // return null;
  for (const cartItem of cart) {
    if (cartItem.product_id === productId) return cartItem.id;
  }
  return null;
  let id;
  cart.forEach(cartItem => {
    if (cartItem.product_id === productId) id = cartItem.id;
  });
  return id;
}