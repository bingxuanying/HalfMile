import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { connect } from "react-redux";

class HeaderMid extends Component {
  constructor() {
    super();

    this.titleSwitch = this.titleSwitch.bind(this);
    this.infoSwitch = this.infoSwitch.bind(this);
  }

  titleSwitch(section) {
    switch (section) {
      case "city":
        return <p>Select places you wanna go</p>;
      case "airline":
        return <p>Select airline</p>;
      case "hotel":
        return <p>Select hotel</p>;
      case "activity":
        return <p>Select activites</p>;
      case "checkout":
        return <p>Checkout Page</p>;
      default:
        return null;
    }
  }

  infoSwitch(section, page) {
    switch (section) {
      case "airline":
        return <p>{this.props.cities[page - 1].name}</p>;
      case "hotel":
        return <p>{this.props.cities[page - 1].name}</p>;
      case "activity":
        return (
          <p>
            Day {page} - {this.props.cities[page - 1].name}
          </p>
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <Nav.Link as={Link} to="/plan" className="navbar-middle">
        <div>{this.titleSwitch(this.props.section)}</div>
        <div>{this.infoSwitch(this.props.section, this.props.page)}</div>
      </Nav.Link>
    );
  }
}

const mapStateToProps = state => {
  return {
    section: state.step.section,
    page: state.step.page,
    cities: state.step.cities
  };
};

export default connect(mapStateToProps)(HeaderMid);
