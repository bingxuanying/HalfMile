import React, { Component } from "react";
import "./GuidCard.sass";
import image from "./tokyo.jpg";
import { Card, Button } from "react-bootstrap";

class GuidCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardTitle: "Tokyo 3 Days",
      cardSubTitle: "Weili",
      cardText: "Nice Trip to Tokyo",
      stars: 5
    };
  }
  buildStars = () => {
    return <span>{this.state.stars}</span>;
  };
  render() {
    var starGroup = this.buildStars();
    return (
      <Card className="card border-0 text-left ml-0 mr-3">
        <Card.Img variant="top" src={image} />
        <Card.Body className="pl-0 pt-2">
          <Card.Title>
            {this.state.cardTitle}
            <span> Star here</span>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {this.state.cardSubTitle}
          </Card.Subtitle>
          <Card.Text>{this.state.cardText}</Card.Text>
          {starGroup}
        </Card.Body>
      </Card>
    );
  }
}

export default GuidCard;
