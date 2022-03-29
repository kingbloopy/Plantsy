import { connect } from "react-redux";
import ProductShow from "./product_show";
import { fetchProduct } from "../../actions/product_actions";
import { openModal } from '../../actions/modal_actions';
import { addCartItem, updateCartItem, fetchCart } from '../../actions/cartitem_actions';
// import { checkForCartItem } from "../../util/cart_selectors";

const mapStateToProps = (state, ownProps) => {
  const product = state.entities.products[ownProps.match.params.productId];
  const currentUser = state.entities.users[state.session.id];
  const cart = currentUser.cart;
  // let productId;
  // if (product){
  //   productId = product.id
  // }
  // console.log('CONTAINER', state.entities.cart)
  return {
    product,
    // itemExists: checkForCartItem(cart, productId),
    currentUser,
    cart
    // cart: state.entities.cart
  }
}

export default connect(mapStateToProps, {
  fetchProduct, 
  openModal,
  addCartItem,
  updateCartItem,
  fetchCart
})(ProductShow);