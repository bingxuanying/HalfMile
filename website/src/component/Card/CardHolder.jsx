import React, { Component } from "react";
import "./CardHolder.sass";
import image from "./tokyo.jpg";
import { Card, Button } from 'react-bootstrap';

class CardHolder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: '18rem',
            buttonTitle: "See Detail",
            cardTitle: "Tokyo 3 Days",
            cardSubTitle: "Weili",
            cardText: "Nice Trip to Tokyo"
        };
    }
    render() {
        return (
            <Card className="card" style={{ width: this.state.width }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{this.state.cardTitle}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.state.cardSubTitle}</Card.Subtitle>
                    <Card.Text>{this.state.cardText}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default CardHolder;
