import React, { Component } from "react";
import image from "./assets/mytrip.png";
import { Card } from "react-bootstrap";
import { MdStar, MdStarHalf } from 'react-icons/md';
import "./index.sass";

class TripCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <Card className="trip-card">
                <Card.Img className="trip-card-img" variant="top" src={image} />
                {/* <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body> */}
            </Card>
        );
    }
}

export default TripCard;
