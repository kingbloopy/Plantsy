import * as ProductUtil from '../util/product_api_util';

export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

const receiveAllProducts = products => ({
  type: RECEIVE_ALL_PRODUCTS,
  products
});

const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product
});

const deleteProduct = productId => ({
  type: REMOVE_PRODUCT,
  productId
});

export const fetchAllProducts = () => dispatch => (
  ProductUtil.fetchAllProducts()
  .then(products => dispatch(receiveAllProducts(products)))
);

export const fetchUserProducts = userProducts => dispatch => (
  ProductUtil.fetchUserProducts(userProducts)
  .then(products => dispatch(receiveAllProducts(products)))
);

export const fetchProduct = (productId) => dispatch => (
  ProductUtil.fetchProduct(productId)
  .then(product => dispatch(receiveProduct(product)))
);

export const fetchByCategory = category => dispatch => (
  ProductUtil.fetchByCategory(category)
  .then(products => dispatch(receiveAllProducts(products)))
);

export const createProduct = product => dispatch => (
  ProductUtil.createProduct(product)
  .then(product => dispatch(receiveProduct(product)))
);

export const removeProduct = productId => dispatch => (
  ProductUtil.deleteProduct(productId)
    .then(() => dispatch(deleteProduct(productId)))
);

export const updateProduct = (product) => dispatch => (
  ProductUtil.updateProduct(product)
    .then(product => dispatch(receiveProduct(product)))
);