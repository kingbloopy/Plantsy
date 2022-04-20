import { connect } from "react-redux";
import { createProduct } from '../../actions/product_actions';
import Upload from './upload';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  createProduct: product => dispatch(createProduct(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(Upload);