import React, { Component } from "react";
import image from "./assets/mytrip.png";
import { Card } from "react-bootstrap";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ShareIcon from "@material-ui/icons/Share";
import "./index.sass";

class TripCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tripTitle: this.props.tripTitle,
      startData: this.props.startData,
      endDate: this.props.endDate,
      anchorEl: null,
      menuToggle: false
    };
  }
  render() {
    return (
      <Card className="trip-card card border-0 text-left">
        <Card.Img className="trip-card-img" variant="top" src={image} />
        <div
          className="trip-card-option "
          onMouseEnter={() => {
            this.openOption();
          }}
          onMouseLeave={() => {
            this.closeOption();
          }}
        >
          {this.state.menuToggle && (
            <div className="trip-card-option-content">
              <div className="edit">
                <IconButton onClick={this.editClick}>
                  <EditIcon style={{ color: "white" }} />
                </IconButton>
              </div>
              <div className="delete">
                <IconButton onClick={this.deleteClick}>
                  <DeleteIcon style={{ color: "white" }} />
                </IconButton>
              </div>
              <div className="share" onClick={this.shareClick}>
                <IconButton>
                  <ShareIcon style={{ color: "white" }} />
                </IconButton>
              </div>
            </div>
          )}
        </div>
        <div className="trip-card-shade">
          <div className="trip-card-title-wrapper">
            <span className="trip-card-title-title">
              {this.state.tripTitle}
            </span>
            <span className="trip-card-title-date">{this.getDate()}</span>
          </div>
          <div className="trip-card-shade-option">
            <IconButton onClick={this.menuClick}>
              {" "}
              <MoreVertIcon />
            </IconButton>
          </div>
          <Menu
            anchorEl={this.state.anchorEl}
            keepMounted
            open={Boolean(this.state.anchorEl)}
            onClose={this.menuClose}
          >
            <MenuItem onClick={this.editClick}>
              <EditIcon /> Edit
            </MenuItem>
            <MenuItem onClick={this.deleteClick}>
              <DeleteIcon /> Delete
            </MenuItem>
            <MenuItem onClick={this.shareClick}>
              <ShareIcon /> Share
            </MenuItem>
          </Menu>
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
  };

  editClick = () => {
    console.log("edit Clicked");
    this.menuClose();
  };
  deleteClick = () => {
    console.log("delete Clicked");
    this.menuClose();
  };
  shareClick = () => {
    console.log("share Clicked");
    this.menuClose();
  };
  openOption = () => {
    if (!this.state.menuToggle) {
      this.setState({ menuToggle: true });
    }
  };
  closeOption = () => {
    if (this.state.menuToggle) {
      this.setState({ menuToggle: false });
    }
  };
  menuClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  menuClose = () => {
    this.setState({ anchorEl: null });
  };
}

export default TripCard;
