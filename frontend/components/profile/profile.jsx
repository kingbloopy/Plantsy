import React from "react";
import { connect } from "react-redux";
import { fetchAllProducts } from '../../actions/product_actions';
import { useEffect } from "react";
import ProductItem from "../products/product_index_item";


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

  return (
    <div className="profile">
        <div className="profile__upper">
          <h1>{props.currentUser.name}</h1>
          <div className="profile__upper__add-wrapper">
            <h1>&#43;</h1>
            <h2>Add a listing</h2>
          </div>
          <div className="profile__lower">
            <h1>Your shop</h1>
            <div className="shop-stats">
              <h2>{props.currentUser.shop.name}</h2>
              <p>{props.currentUser.shop.sales} sales</p>
            </div>
            <h2>{products.length} listings</h2>
          <div className="recommended__header-wrapper">
            <ul className="recommended__wrapper">
              {products.map((product, i) => {
                return <ProductItem profile={true} className="recommended__product" product={product} key={i} />
              })}
            </ul>
          </div>
          </div>
        </div>
    </div>
  );
}

const mapStateToProps = ({ entities, session }) => ({
  currentUser: entities.users[session.id],
  products: Object.values(entities.products)
});

export default connect(mapStateToProps, { fetchAllProducts })(Profile);