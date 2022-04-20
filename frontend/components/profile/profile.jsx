import React from "react";
import { connect } from "react-redux";

const Profile = props => {
  console.log(props)
  return (
    <div className="profile">
      <div className="profile__inner">
        <div className="profile__left">
          <h1>{props.currentUser.name}</h1>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ entities, session }) => ({
  currentUser: entities.users[session.id]
});

export default connect(mapStateToProps, null)(Profile);