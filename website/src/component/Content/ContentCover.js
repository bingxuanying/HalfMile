import React, { Component } from "react";
import coverImg from "../../assets/Cover.jpg";
import "./ContentCover.css";

class ContentCover extends Component {
  render() {
    return (
      <div className="content-cover">
        <img src={coverImg} className="cover-image" alt="Cover Image"></img>
        <div className="start-box"></div>
      </div>
    );
  }
}

export default ContentCover;
