import { connect } from "react-redux";
import { fetchByCategory } from "../../../actions/product_actions";
import CategoryIndex from "./category_index";

const mapStateToProps = ( { entities }) => ({
  products: Object.values(entities.products)
});

const mapDispatchToProps = dispatch => ({
  fetchByCategory: category => dispatch(fetchByCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryIndex);