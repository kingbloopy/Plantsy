export * as ProductUtil from '../util/product_api_util';

export const RECEIEVE_ALL_PRODUCTS = 'RECEIEVE_ALL_PRODUCTS';
export const RECEIEVE_PRODUCT = 'RECEIEVE_PRODUCT';

const receiveAllProducts = products => ({
  type: RECEIEVE_ALL_PRODUCTS,
  products
});

const receiveProduct = product => ({
  type: RECEIEVE_PRODUCT,
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