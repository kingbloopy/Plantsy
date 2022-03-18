import { connect } from "react-redux";
import Welcome from "./welcome";
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ session, entities }) => ({
  currentUser: entities.users[session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);