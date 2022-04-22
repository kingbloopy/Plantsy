import * as ShopUtil from '../util/shop_util';

export const RECEIVE_SHOP = 'RECEIVE_SHOP';

const receiveShop = shop => ({
  type: RECEIVE_SHOP,
  shop
});

export const fetchShop = (shopId) => dispatch => (
  ShopUtil.fetchShop(shopId)
    .then(shop => dispatch(receiveShop(shop)))
);

export const createShop = shop => dispatch => (
  ShopUtil.createShop(shop)
    .then(shop => dispatch(receiveShop(shop)))
);

export const updateShop = shop => dispatch => (
  ShopUtil.updateShop(shop)
    .then(shop => dispatch(receiveShop(shop)))
);