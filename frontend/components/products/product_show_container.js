import { connect } from "react-redux";
import ProductShow from "./product_show";
import { fetchProduct, removeProduct } from "../../actions/product_actions";
import { openModal } from '../../actions/modal_actions';
import { addCartItem, updateCartItem, fetchCart } from '../../actions/cartitem_actions';
import { fetchAllReviews, createReview, updateReview, removeReview } from "../../actions/reviews_actions";

const mapStateToProps = (state, ownProps) => {
  return {
  product: state.entities.products[ownProps.match.params.productId],
  maxQuantity: state.entities.products[ownProps.match.params.productId] ? state.entities.products[ownProps.match.params.productId].quantity : null,
  currentUser: state.entities.users[state.session.id],
  cart: Object.values(state.entities.cart),
  reviews: Object.values(state.entities.reviews),
  currentUserId: state.session.id
}};

export default connect(mapStateToProps, {
  fetchProduct, 
  openModal,
  addCartItem,
  updateCartItem,
  fetchCart,
  fetchAllReviews,
  removeReview,
  updateReview,
  createReview,
  removeProduct
})(ProductShow);