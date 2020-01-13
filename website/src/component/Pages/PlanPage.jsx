import React, { Component } from "react";
import { connect } from "react-redux";
import stepActions from "../../actions/stepActions";

class PlanPage extends Component {
  render() {
    return <div></div>;
  }
}

const mapStateToProps = state => {
  // console.log(state.plan[0].home);
  return {
    section: state.section
  };
};

const mapDispatchToProps = () => {
  return {
    updateHomeAdress: planActions.updateHomeAdress
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(PlanPage);
