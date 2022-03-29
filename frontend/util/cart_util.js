
export const fetchCart = () => (
  $.ajax({
    method: 'GET',
    url: '/api/cartitems'
  })
);

export const createCartitem = cartitem => (
  $.ajax({
    method: 'POST',
    url: '/api/cartitems',
    data: { cartitem }
  })
);

export const removeCartitem = cartitemId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/cartitems/${cartitemId}`
  })
);

export const updateCartitem = (cartitemId, cartitem, increase) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/cartitems/${cartitemId}`,
    data: { cartitem, increase }
  })
);
