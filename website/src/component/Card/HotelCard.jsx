import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { buildStars } from "./util/buildStars";
import "./index.sass";

import { connect } from "react-redux";
import * as planActions from "../../actions/planActions";

class HotelCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    var city = this.props.cities[this.props.page - 1].name;

    this.props.updateHotel(this.props.obj, city);
  }

  render() {
    const name = this.props.obj.name;
    const price = this.props.obj.price;
    const image = this.props.obj.img;
    // const latLong = this.props.obj.latLong;
    const rateStars = this.props.obj.stars;
    const info = this.props.obj.info;
    const location = this.props.obj.location;

    const starGroup = buildStars(rateStars);

    return (
      <Card className="hotel-card card">
        <Card.Img className="hotel-card-img" src={image} />
        <div
          className="hotel-card-shade-wrapper"
          onMouseEnter={this.openInfo}
          onMouseLeave={this.closeInfo}
        >
          {this.state.hover && <div className="hotel-card-shade"></div>}
        </div>
        <Card.Body className="hotel-card-body pl-0 pt-2 pb-1">
          <div className="hotel-card-body-title">
            <Card.Title className="hotel-card-body-title-text">
              {name}
            </Card.Title>
            <span className="hotel-card-body-title-price">${price}</span>
          </div>
          <div className="hotel-card-body-subtitle mb-0">{location}</div>
          <div className="hotel-card-body-rate">
            <div>{starGroup}</div>
          </div>
          <div className="hotel-card-body-info">
            <span>{info}</span>
          </div>
          <div className="hotel-card-option">
            <Button
              className="hotel-card-option-btn"
              onClick={this.handleClick}
            >
              {/* View Prices */}
              Select this
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
  openInfo = event => {
    event.preventDefault();
    if (!this.state.hover) {
      this.setState({ hover: true });
    }
  };
  closeInfo = event => {
    event.preventDefault();
    if (this.state.hover) {
      this.setState({ hover: false });
    }
  };
}

const mapStateToProps = state => {
  return {
    initStartDate: state.plan[0].startDate,
    cities: state.step.cities,
    page: state.step.page
  };
};

const mapDispatchToProps = () => {
  return {
    updateHotel: planActions.updateHotel
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(HotelCard);
