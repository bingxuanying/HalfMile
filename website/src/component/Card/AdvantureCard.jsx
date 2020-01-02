import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./index.sass";

class AdvantureCard extends Component {
  render() {
    const name = this.props.name;
    const price = this.props.price;
    const image = this.props.img;

    return (
      <Card className="advanture-card card border-0 text-left ml-0 mr-3">
        <Card.Img className="advanture-card-img" variant="top" src={image} />
        <Card.Body className="advanture-card-body pl-0 pt-2">
          <Card.Title className="mb-0">{name}</Card.Title>
          <Card.Text className="mb-0">Est. ${price}/per night</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default AdvantureCard;
