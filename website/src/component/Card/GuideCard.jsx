import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { MdStar, MdStarHalf } from "react-icons/md";
import "./index.sass";

class GuideCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardTitle: this.props.city,
      cardSubTitle: this.props.author,
      cardText: this.props.info,
      stars: this.props.stars
    };
  }
  render() {
    var starGroup = this.buildStars();
    return (
      <Card className="guide-card card border-0 text-left ml-0 mr-4">
        <Card.Img
          className="guide-card-img"
          variant="top"
          src={this.props.img}
        />
        <Card.Body className="guide-card-body pl-0 pt-2">
          <Card.Title className="guide-card-title">
            {this.state.cardTitle}
          </Card.Title>
          <Card.Subtitle className="mb-0 text-muted">
            By {this.state.cardSubTitle}
          </Card.Subtitle>
          <Card.Text className="mb-0">{this.state.cardText}</Card.Text>
          <Card.Text className="mt-0">{starGroup}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
  buildStars = () => {
    let stars = [];
    let i = 0;
    for (i = 0; i < Math.floor(this.state.stars); i++) {
      stars.push(
        <span key={i}>
          <MdStar />
        </span>
      );
    }
    if (!Number.isInteger(this.state.stars))
      stars.push(
        <span key={i}>
          <MdStarHalf />
        </span>
      );
    return stars;
  };
}

export default GuideCard;
