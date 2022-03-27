import { connect } from "react-redux";
import Explore from "./explore";

const mapStateToProps = ({ session, entities }) => ({
  currentUser: entities.users[session.id],
});

export default connect(mapStateToProps, null)(Explore);