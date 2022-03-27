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

// export const fetchUserProducts = userId => (
//   $.ajax({
//     method: 'GET',
//     url: `/api/users/${userId}/products`
//   })
// );

// export const createProduct = product => (
//   $.ajax({
//     method: 'POST',
//     method: '/api/products',
//     data: { product }
//   })
// );

// export const updateProduct = product => (
//   $.ajax({
//     method: 'PATCH',
//     method: `/api/products/${product.id}`,
//     data: { product }
//   })
// );

// export const deleteProduct = product => (
//   $.ajax({
//     method: 'DELETE',
//     method: `/api/products/${product.id}`,
//   })
// );