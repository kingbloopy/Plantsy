export const fetchShop= shopId => (
  $.ajax({
    method: 'GET',
    url: `/api/shops/${shopId}`
  })
);

export const createShop= shop => (
  $.ajax({
    method: 'POST',
    url: '/api/shops',
    data: { shop }
  })
);

export const updateShop= shop => (
  $.ajax({
    method: 'PATCH',
    url: `/api/products/${shop.id}`,
    data: { shop }
  })
);