import { connect } from "react-redux";
import Header from "./header";
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({ session, entities }) => ({
  currentUser: entities.users[session.id],
  cart: Object.keys(entities.cart)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);