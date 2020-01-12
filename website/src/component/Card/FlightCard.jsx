import React, { Component } from "react";
import { Card } from "@material-ui/core";
import "./index.sass";

class FlightCard extends Component {
    render() {
        const departTime = this.props.obj.departTime;
        const arriveTime = this.props.obj.arriveTime;
        const flightNumber = this.props.obj.flightNumber;
        const flightCompany = this.props.obj.flightCompany;
        const duration = this.props.obj.duration;
        const stops = this.props.obj.stops;
        const price = this.props.obj.price.basicEco;
        return (
            <Card className="flight-card">
                {flightNumber}
            </Card>
        );
    }
}

export default FlightCard;
