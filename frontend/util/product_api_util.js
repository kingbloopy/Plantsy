export const fetchAllProducts = () => (
  $.ajax({
    method: 'GET',
    url: '/api/products'
  })
);

export const fetchUserProducts = userProducts => {
  return $.ajax({
    method: 'GET',
    url: '/api/products',
    data: { userProducts }
  })
}

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
    data: product,
    contentType: false,
    processData: false,
  })
);

export const updateProduct = product => (
  $.ajax({
    method: 'PATCH',
    url: `/api/products/${product.id}`,
    data: { product }
  })
);

export const deleteProduct = productId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/products/${productId}`,
  })
);