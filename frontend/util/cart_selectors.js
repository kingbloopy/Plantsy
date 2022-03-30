// if item already exists in the cart
export const checkForCartItem = (cart, productId) => {

  let id;
  cart.forEach(cartItem => {
    if (cartItem.product_id === productId) id = cartItem.id;
  });
  return id;
}