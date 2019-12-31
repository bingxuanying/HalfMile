import React, { Component } from "react";
import image from "./assets/tokyo.jpg";
import { Card } from "react-bootstrap";
import { MdStar, MdStarHalf } from 'react-icons/md';
import "./index.sass";

class GuideCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardTitle: "Tokyo 3 Days",
      cardSubTitle: "Weili",
      cardText: "Nice Trip to Tokyo",
      stars: 4.5
    };
  }
  buildStars = () => {
    let stars = [];
    for (let i = 0; i < Math.floor(this.state.stars); i++) {
      stars.push(<span><MdStar /></span>)
    }
    if (!Number.isInteger(this.state.stars))
      stars.push(<span><MdStarHalf /></span>);
    return stars;
  }
  render() {
    var starGroup = this.buildStars();
    return (
      <Card className="guide-card card border-0 text-left ml-0 mr-3">
        <Card.Img className="guide-card-img" variant="top" src={image} />
        <Card.Body className="pl-0 pt-2">
          <Card.Title>
            {this.state.cardTitle}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            By {this.state.cardSubTitle}
          </Card.Subtitle>
          <Card.Text className="mb-0">{this.state.cardText}</Card.Text>
          <Card.Text className="mt-0">{starGroup}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default GuideCard;
