import { connect } from "react-redux";
import { fetchAllProducts } from "../../actions/product_actions";
import Recommended from './recommended';

const mapStateToProps = ({ entities }) => ({
  products: Object.values(entities.products),
});

const mapDispatchToProps = dispatch => ({
  fetchAllProducts: () => dispatch(fetchAllProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Recommended);