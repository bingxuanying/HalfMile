import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { MdStar, MdStarHalf } from "react-icons/md";
import "./index.sass";

class GuideCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardTitle: "Default City",
      cardSubTitle: "Default Author",
      cardText: "Default info",
      stars: 5
    };
  }
  render() {
    this.getProps();
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
        <span>
          <MdStar key={i} />
        </span>
      );
    }
    if (!Number.isInteger(this.state.stars))
      stars.push(
        <span>
          <MdStarHalf key={i} />
        </span>
      );
    return stars;
  };
  getProps = () => {
    this.setState({ cardTitle: this.props.city });
    this.setState({ cardSubTitle: this.props.author });
    this.setState({ cardText: this.props.info });
    this.setState({ stars: this.props.stars });
    this.setState({ img: this.props.img });
  };
}

export default GuideCard;
