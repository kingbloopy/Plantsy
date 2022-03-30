import { connect } from "react-redux";
import ProductShow from "./product_show";
import { fetchProduct } from "../../actions/product_actions";
import { openModal } from '../../actions/modal_actions';
import { addCartItem, updateCartItem, fetchCart } from '../../actions/cartitem_actions';

const mapStateToProps = (state, ownProps) => ({
  product: state.entities.products[ownProps.match.params.productId],
  currentUser: state.entities.users[state.session.id],
  cart: Object.values(state.entities.cart)
});

export default connect(mapStateToProps, {
  fetchProduct, 
  openModal,
  addCartItem,
  updateCartItem,
  fetchCart,
})(ProductShow);