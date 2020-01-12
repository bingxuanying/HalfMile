import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Button, IconButton } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { buildStars } from "./util/buildStars";
import "./index.sass";

class HotelCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }
  render() {
    const name = this.props.obj.name;
    const price = this.props.obj.price;
    const image = this.props.obj.img;
    const latLong = this.props.obj.latLong;
    const rateStars = this.props.obj.stars;
    const info = this.props.obj.info;

    function addToList() {}
    function showLocation() {
      console.log(latLong);
    }
    const starGroup = buildStars(rateStars);

    return (
      <Card className="hotel-card card ml-1">
        <Card.Img className="hotel-card-img" variant="top" src={image} />
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
            <div className="hotel-card-body-title-icon">
              <IconButton onClick={showLocation}>
                <LocationOnIcon />
              </IconButton>
            </div>
          </div>
          <div className="hotel-card-body-rate">
            <div>{starGroup}</div>
            <div>Est. Cost&nbsp;&nbsp;${price}</div>
          </div>
          <div className="hotel-card-option">
            <Button color="primary" onClick={addToList}>
              Add to my list
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

export default HotelCard;
