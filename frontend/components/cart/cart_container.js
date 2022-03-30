import { fetchCart, removeCartItem } from '../../actions/cartitem_actions';
import { connect } from 'react-redux';
import CartShow from './cart_show';

const mapStateToProps = ({ entities, session }) => ({
  cartItems: Object.keys(entities.cart).map(key => entities.cart[key]),
  currentUser: entities.users[session.id]
});

const mapDispatchToProps = dispatch => ({
  fetchCart: () => dispatch(fetchCart()),
  removeCartItem: cartItemId => dispatch(removeCartItem(cartItemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartShow);