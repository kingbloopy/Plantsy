import { connect } from "react-redux";
import ProductItem from "./product_index_item";


const mapStateToProps = (state, ownProps) => ({
  product: state.entities.products[ownProps.match.params.productId]
});

export default connect(mapStateToProps, null)(ProductItem);