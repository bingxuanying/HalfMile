import React, { Component } from "react";
import image from "./assets/mytrip.png";
import { Card, Button } from "react-bootstrap";
import "./index.sass";

class TripCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tripTitle: "My Trip",
            tripDuration: 5,
            startData: new Date()
        };
    }
    render() {
        console.log(this.state.startData);
        return (
            <Card className="trip-card card border-0 text-left ml-0 mr-3">
                <Card.Img className="trip-card-img" variant="top" src={image} />
                <div className="trip-card-shade">
                    <div className="trip-card-days">
                        5days
                    </div>
                    {/* trip-card-title includes startData and title */}
                    <div className="trip-card-title">
                        my fking trip
                    </div>
                    <div className="trip-card-option"><Button /></div>
                </div>
            </Card>
        );
    }
}

export default TripCard;
