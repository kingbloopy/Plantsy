import { fetchCart, removeCartItem, updateCartItem } from '../../actions/cartitem_actions';
import { connect } from 'react-redux';
import CartShow from './cart_show';

const mapStateToProps = ({ entities }) => ({
  cartItems: Object.keys(entities.cart).map(key => entities.cart[key]),
  // currentUser: entities.users[entities.session.id]
});

const mapDispatchToProps = dispatch => ({
  fetchCart: () => dispatch(fetchCart()),
  removeCartItem: cartItemId => dispatch(removeCartItem(cartItemId)),
  updateCartItem: (cartItemId, cartitem, increase) => dispatch(updateCartItem(cartItemId, cartitem, increase))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartShow);