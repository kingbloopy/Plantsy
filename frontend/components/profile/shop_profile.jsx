import React from "react";
import { connect } from "react-redux";
import { fetchShop } from '../../actions/shop_actions';
import { fetchAllProducts } from '../../actions/product_actions';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Spinner from "../misc/spinner";
import CategoryItem from "../products/category_index/category_item";

const ShopProfile = props => {
  const location = useLocation();
  const shopId = location.pathname.split('/')[2];
  const shop = props.shop[0]

  useEffect(() => {
    props.fetchAllProducts();
    props.fetchShop(shopId);
  }, []);

  useEffect(() => {
    props.fetchShop(shopId);
  }, [location]);

  let products = []
  if (props && props.products) {
    products = props.products.filter(product => (
      product.shopId == shopId)
    )
  }

  if (props.products && props.shop && products[products.length - 1]) {
    return (
      <div className="category-index">
          <div className="category-index__info-wrapper shop-header">
            <h1>
              Welcome to {props.shop && shop?.name}
            </h1>
            <h2>{props.shop && shop?.sales} sales</h2>
          </div>
        <div className="category-index__ul-wrapper">
          <ul className="category-index__items-wrapper">
            {products.map((item, idx) => (
              <li key={idx}>
                <CategoryItem item={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <Spinner/>
    )
  }
}

const MapStateToProps = ({ entities }) => ({
  shop: Object.values(entities.shop),
  products: Object.values(entities.products)
});

export default connect(MapStateToProps, { fetchShop, fetchAllProducts })(ShopProfile);