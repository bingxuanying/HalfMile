import React, { Component } from "react";
import { connect } from "react-redux";
import stepActions from "../../actions/stepActions";
import "./ProfilePage.sass";

class ProfilePage extends Component {
  render() {
    return (
      <div className="profile-page">
        <div className="profile-page-person"></div>
        <div className="profile-page-mytrip"></div>
        <div className="profile-page-recommand"></div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    section: state.step.section
  };
};

const mapDispatchToProps = () => {
  return {
    // updateHomeAdress: planActions.updateHomeAdress
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(ProfilePage);
