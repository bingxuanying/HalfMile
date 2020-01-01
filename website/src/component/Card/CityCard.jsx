import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { MdStar, MdStarHalf } from "react-icons/md";
import "./index.sass";

class CityCard extends Component {
  render() {
    const image = this.props.img;
    const city = this.props.city;
    const cityInfo = this.props.cityInfo;
    return (
      <Card className="city-card card border-0 text-left ml-0 mr-4">
        <Card.Img className="city-card-img" variant="top" src={image} />
        <Card.Body className="city-card-body pl-0 pt-2">
          <Card.Title className="city-card-title font-weight-bold">
            {city}
          </Card.Title>
          <Card.Text className="city-card-text mb-0">{cityInfo}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default CityCard;
