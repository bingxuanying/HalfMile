import React, { Component } from "react";
import { connect } from "react-redux";
import stepActions from "../../actions/stepActions";
import PlanPage_Part1 from "./PlanPage_Part1";
import PlanPage_Part2 from "./PlanPage_Part2";

class PlanPage extends Component {
  render() {
    return (
      <div>
        {this.props.section === "city" ? (
          <PlanPage_Part1 />
        ) : (
          <PlanPage_Part2 />
        )}
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

export default connect(mapStateToProps, mapDispatchToProps())(PlanPage);
