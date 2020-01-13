import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./index.sass";

class AdvantureCard extends Component {
  render() {
    const name = this.props.name;
    const price = this.props.price;
    const image = this.props.img;

    return (
      <Card className="adventure-card card border-0 text-left">
        <Card.Img className="adventure-card-img" variant="top" src={image} />
        <Card.Body className="adventure-card-body pl-0 pt-2">
          <Card.Title className="mb-0">{name}</Card.Title>
          <Card.Text className="mb-0">From ${price}/person</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default AdvantureCard;
