import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PlanPage_Part1 from "./PlanPage_Part1";
import PlanPage_Part2 from "./PlanPage_Part2";
import CheckoutPage from "./CheckoutPage";

class PlanPage extends Component {
  constructor() {
    super();

    this.renderSwitch = this.renderSwitch.bind(this);
  }

  renderSwitch(section) {
    switch (section) {
      case "city":
        return <PlanPage_Part1 />;
      case "airline":
        return <PlanPage_Part2 />;
      case "hotel":
        return <PlanPage_Part2 />;
      case "activity":
        return <PlanPage_Part2 />;
      case "checkout":
        return <CheckoutPage />;
    }
  }

  render() {
    return <div>{this.renderSwitch(this.props.section)}</div>;
  }
}

const mapStateToProps = state => {
  return {
    section: state.step.section
  };
};

export default withRouter(connect(mapStateToProps)(PlanPage));
