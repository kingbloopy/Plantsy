// if item already exists in the cart
export const checkForCartItem = (cart, productId) => {

  let exists = false;
  cart.forEach(cartItem => {
    if (cartItem.product_id === productId) exists = true;
  });
  return exists;
}