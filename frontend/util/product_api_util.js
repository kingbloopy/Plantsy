export const fetchAllProducts = () => (
  $.ajax({
    method: 'GET',
    url: '/api/products'
  })
);

export const fetchProduct = productId => (
  $.ajax({
    method: 'GET',
    url: `/api/products/${productId}`
  })
);

export const fetchByCategory = category => (
  $.ajax({
    method: 'GET',
    url: `/api/products/?category=${category}`
  })
)

export const createProduct = product => (
  $.ajax({
    method: 'POST',
    url: '/api/products',
    data: { product }
  })
);

export const updateProduct = product => (
  $.ajax({
    method: 'PATCH',
    url: `/api/products/${product.id}`,
    data: { product }
  })
);

export const deleteProduct = product => (
  $.ajax({
    method: 'DELETE',
    url: `/api/products/${product.id}`,
  })
);