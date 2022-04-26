import React from "react";
import { connect } from "react-redux";
import { fetchUserProducts } from '../../actions/product_actions';
import { useEffect } from "react";
import RecommendedItem from "../splash/recommended/recommended_item";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { fetchShop, updateShop } from "../../actions/shop_actions";


const Profile = props => {
  let [shop, setShop] = useState('');
  let products;
  
  useEffect(() => {
    props.fetchUserProducts(true);
    if (props.currentUser.shop){
      setShop(props.currentUser.shop)
    }
  }, []);

  if (props && props.products){
    products = props.products.filter(product => (
      product.sellerId === props.currentUser.id)
    )
  }

  return (
    <div className="profile">
      <div className="profile__inner">
          <div className="profile__upper">
            <div className="profile__upper__left">
              <h1>{props.currentUser.name}</h1>
              <div className="stats">
                <p>{products.length} listings</p>
                {shop ? (
                  <p>{shop.sales} sales</p>
                  ) : (
                  <p>0 sales</p>
                )}
              </div>
            </div>
            <div className="profile__upper__add-wrapper">
              <Link to="/create-listing">&#43;</Link>
              <h2>Add a listing</h2>
            </div>
          </div>
          <div className="profile__lower">
            <h1>Your shop</h1>
            {shop ? (
              <Link className="shop-name" to="/">{shop.name}</Link>
            ) : (
              <Link className="upload-shop" to="/create-listing">Add a listing to create your shop</Link>
            )}
          <div className="recommended__header-wrapper">
            {products[products.length - 1] ? (
              <ul className="recommended__wrapper">
                {products.map((product, i) => {
                  return <RecommendedItem profile={true} className="recommended__product" product={product} key={i} />
                })}
              </ul>
            ) : (
              null
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ entities, session }) => ({
  currentUser: entities.users[session.id],
  products: Object.values(entities.products),
  shop: Object.values(entities.shop)
});

export default connect(mapStateToProps,
  { fetchUserProducts })(Profile);