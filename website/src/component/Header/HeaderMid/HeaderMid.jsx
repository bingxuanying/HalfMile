import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { connect } from "react-redux";

class HeaderMid extends Component {
  constructor() {
    super();

    this.infoSwitch = this.infoSwitch.bind(this);
    this.titleSwitch = this.titleSwitch.bind(this);
  }

  infoSwitch(section) {
    switch (section) {
      case "city":
        return (
          <div className="navbar-mid-info">Select places you wanna go</div>
        );
      case "airline":
        return <div className="navbar-mid-info">Select airline</div>;
      case "hotel":
        return <div className="navbar-mid-info">Select hotel</div>;
      case "activity":
        return <div className="navbar-mid-info">Select activites</div>;
      default:
        return null;
    }
  }

  titleSwitch(section, page) {
    switch (section) {
      case "airline":
        return (
          <div className="navbar-mid-title">
            {this.props.cities[page - 1].name}
          </div>
        );
      case "hotel":
        return (
          <div className="navbar-mid-title">
            {this.props.cities[page - 1].name}
          </div>
        );
      case "activity":
        return (
          <div className="navbar-mid-title">
            {this.props.plan[page].city.name}
            <span> - Day {page}</span>
          </div>
        );
      case "checkout":
        return <div className="navbar-mid-title">Checkout Page</div>;
      default:
        return null;
    }
  }

  render() {
    return (
      <Nav.Link as={Link} to="/plan" className="navbar-middle pl-4 p-0">
        <div className="navbar-mid-left">
          {this.titleSwitch(this.props.section, this.props.page)}
        </div>
        <div className="navbar-middle-right">
          {this.infoSwitch(this.props.section)}
        </div>
      </Nav.Link>
    );
  }
}

const mapStateToProps = state => {
  return {
    section: state.step.section,
    page: state.step.page,
    cities: state.step.cities,
    plan: state.plan
  };
};

export default connect(mapStateToProps)(HeaderMid);
