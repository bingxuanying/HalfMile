import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Button, IconButton } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { MdStar, MdStarHalf } from "react-icons/md";

import "./index.sass";

class ActivityCard extends Component {
  render() {
    const name = this.props.name;
    // const price = this.props.price;
    const image = this.props.img;
    const id = this.props.id;
    const latLong = this.props.latLong;
    const rateStars = this.props.stars;
    const timeCost = this.props.timeCost;

    function addToList() {
      console.log(id);
    }
    function showLocation() {
      console.log(latLong);
    }
    function buildStars() {
      let stars = [];
      let i = 0;
      for (i = 0; i < Math.floor(rateStars); i++) {
        stars.push(
          <span key={i}>
            <MdStar />
          </span>
        );
      }
      if (!Number.isInteger(rateStars))
        stars.push(
          <span key={i}>
            <MdStarHalf />
          </span>
        );
      return stars;
    }
    const starGroup = buildStars();

    return (
      <Card className="activity-card card ml-0">
        <Card.Img className="activity-card-img" variant="top" src={image} />
        <Card.Body className="activity-card-body pl-0 pt-2 pb-1">
          <div className="activity-card-body-title">
            <Card.Title className="activity-card-body-title-text">
              {name}
            </Card.Title>
            <div className="activity-card-body-title-icon">
              <IconButton onClick={showLocation}>
                <LocationOnIcon />
              </IconButton>
            </div>
          </div>
          <div className="activity-card-body-rate">
            <div>{starGroup}</div>
            <div>Est. Time&nbsp;&nbsp;{timeCost}</div>
          </div>
          <div className="activity-card-option">
            <Button onClick={addToList}>Add to my list</Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default ActivityCard;
