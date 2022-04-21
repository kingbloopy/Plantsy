import { connect } from "react-redux";
import { createProduct } from '../../actions/product_actions';
import Upload from './upload';
import { createShop } from '../../actions/shop_actions';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
});

export default connect(mapStateToProps, { createProduct, createShop })(Upload);