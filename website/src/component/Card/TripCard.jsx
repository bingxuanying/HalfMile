import React, { Component } from "react";
import image from "./assets/mytrip.png";
import { Card, Button } from "react-bootstrap";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton, Menu, MenuItem, } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ShareIcon from '@material-ui/icons/Share';
import "./index.sass";

class TripCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tripTitle: "My Trip",
            tripDuration: 5,
            startData: "12/5",
            endDate: "12/8",
            anchorEl: ""
        };
    }
    render() {
        return (
            <Card className="trip-card card border-0 text-left ml-0 mr-3">
                <Card.Img className="trip-card-img" variant="top" src={image} />
                <div className="trip-card-shade">
                    <div className="trip-card-days-wrapper">
                        <div className="trip-card-days">
                            {this.state.tripDuration}D
                    </div>
                    </div>
                    <div className="trip-card-title-wrapper">
                        <span className="trip-card-title-title">{this.state.tripTitle}</span>
                        <span className="trip-card-title-date">{this.getDate()}</span>
                    </div>
                    <div className="trip-card-option">
                        <IconButton onClick={this.menuClick}>
                            <MoreVertIcon style={{ color: "white" }} /></IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={this.state.anchorEl}
                            keepMounted
                            open={Boolean(this.state.anchorEl)}
                            onClose={this.handleClose}

                        >
                            <MenuItem onClick={this.editClick}>
                                <EditIcon />&nbsp;EDIT
                            </MenuItem>
                            <MenuItem onClick={this.deleteClick}>
                                <DeleteIcon />&nbsp;DELETE
                            </MenuItem>
                            <MenuItem onClick={this.shareClick}>
                                <ShareIcon />&nbsp;SHARE
                            </MenuItem>
                        </Menu>
                    </div>
                </div>
            </Card>
        );
    }
    getDate = () => {
        return (
            <span>
                {this.state.startData}&nbsp;-&nbsp;{this.state.endDate}
            </span>
        );
    }
    menuClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    }
    handleClose = () => {
        this.setState({ anchorEl: null });
    }
    editClick = () => {
        console.log("edit Clicked");
        this.handleClose();
    }
    deleteClick = () => {
        console.log("delete Clicked");
        this.handleClose();
    }
    shareClick = () => {
        console.log("share Clicked");
        this.handleClose();
    }
}

export default TripCard;
