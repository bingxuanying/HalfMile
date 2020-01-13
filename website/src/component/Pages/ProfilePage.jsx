import React, { Component } from "react";
import { connect } from "react-redux";
import stepActions from "../../actions/stepActions";

class ProfilePage extends Component {
  render() {
    return <div></div>;
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
