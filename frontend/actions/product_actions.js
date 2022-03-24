import * as ProductUtil from '../util/product_api_util';

export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';

const receiveAllProducts = products => ({
  type: RECEIVE_ALL_PRODUCTS,
  products
});

const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product
});

export const fetchAllProducts = () => dispatch => (
  ProductUtil.fetchAllProducts()
  .then(products => dispatch(receiveAllProducts(products)))
);

export const fetchProduct = (product) => dispatch => (
  ProductUtil.fetchProduct(product)
  .then(product => dispatch(receiveProduct(product)))
);