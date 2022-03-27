import { connect } from "react-redux";
import Splash from "./splash";
import { fetchAllProducts } from "../../actions/product_actions";


const mapStateToProps = ({ entities, session }) => ({
  products: Object.values(entities.products),
  currentUser: entities.users[session.id]
});

const mapDispatchToProps = dispatch => ({
  fetchAllProducts: () => dispatch(fetchAllProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);