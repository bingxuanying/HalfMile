import React, { Component } from "react";
import image from "./assets/AdvantureEx.jpg";
import { Card } from "react-bootstrap";
import "./index.sass"

class AdvantureCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardTitle: "伦敦 感受英伦风情",
            price: 168
        };
    }
    render() {
        return (
            <Card className="advanture-card card border-0 text-left ml-0 mr-3">
                <Card.Img className="advanture-card-img" variant="top" src={image} />
                <Card.Body className="advanture-card-body pl-0 pt-2">
                    <Card.Title className="font-weight-bold">
                        {this.state.cardTitle}
                    </Card.Title>
                    <Card.Text className="font-weight-bold mb-0">人均 ￥{this.state.price}/晚</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default AdvantureCard;
