import React from "react";
import { connect } from "react-redux";
import { fetchAllProducts } from '../../actions/product_actions';
import { useEffect } from "react";
import ProductItem from "../products/product_index_item";
import Spinner from '../misc/spinner';
import { Link } from "react-router-dom";


const Profile = props => {
  
  useEffect(() => {
    props.fetchAllProducts();
  }, []);

  let products;
  if (props && props.products){
    products = props.products.filter(product => (
      product.sellerId === props.currentUser.id)
    )
  }

  if (props.products[props.products.length - 1]){
  return (
    <div className="profile">
        <div className="profile__upper">
          <div className="profile__upper__left">
            <h1>{props.currentUser.name}</h1>
            <div className="stats">
              <p>{products.length} listings</p>
              {props.currentUser.shop ? (
                <p>{props.currentUser.shop.sales} sales</p>
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
          {props.currentUser.shop ? (
            <Link className="shop-name" to="/">{props.currentUser.shop.name}</Link>
          ) : (
            <Link className="upload" to="/create-listing">Add a listing to create your shop</Link>
          )}
        <div className="recommended__header-wrapper">
          <ul className="recommended__wrapper">
            {products.map((product, i) => {
              return <ProductItem profile={true} className="recommended__product" product={product} key={i} />
            })}
          </ul>
        </div>
        </div>
    </div>
  );
  } else {
    return (
      <Spinner/>
    )
  }
}

const mapStateToProps = ({ entities, session }) => ({
  currentUser: entities.users[session.id],
  products: Object.values(entities.products)
});

export default connect(mapStateToProps, { fetchAllProducts })(Profile);