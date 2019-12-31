import React, { Component } from "react";
import image from "./assets/Shanghai.png";
import { Card } from "react-bootstrap";
import { MdStar, MdStarHalf } from 'react-icons/md';
import "./index.sass"

class CityCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardTitle: "TAIZHOU",
            cardSubtitle: "In 2077, they voted my city the worst place to live in America. Main issues? Sky high rate of violence and more people living below the poverty line than anywhere else"
        };
    }
    render() {
        return (
            <Card className="city-card card border-0 text-left ml-0 mr-3">
                <Card.Img className="city-card-img" variant="top" src={image} />
                <Card.Body className="city-card-body pl-0 pt-2">
                    <Card.Title className="city-card-title font-weight-bold">
                        {this.state.cardTitle}
                    </Card.Title>
                    <Card.Text className="city-card-text mb-0">{this.state.cardSubtitle}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default CityCard;
