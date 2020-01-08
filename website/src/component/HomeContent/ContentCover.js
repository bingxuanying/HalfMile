import React, { Component } from "react";
import coverImg from "../../assets/Cover.jpg";
import Geosuggest from "react-geosuggest";
import "./ContentCover.sass";

class ContentCover extends Component {
  render() {
    return (
      <div className="content-cover">
        <img src={coverImg} className="cover-image" alt="Cover Image"></img>
        <div className="start-box">
          <div className="start-box-header">
            <h1>Take a break and award yourself a memorable trip</h1>
          </div>
          <div className="start-box-content">
            <form onSubmit={e => e.preventDefault()}>
              <div className="start-box-row">
                <div className="start-box-subtitle">HOME ADDRESS</div>
                <Geosuggest
                  placeholder="Where you live"
                  autoCorrect="off"
                  spellCheck="false"
                  onSuggestSelect={this.onSuggestSelect}
                  location={
                    new window.google.maps.LatLng(34.0522342, -118.2436849)
                  }
                  radius={20}
                />
              </div>
              <div className="start-box-row">
                <div className="start-box-50subrow">
                  <div className="start-box-subtitle">START DATE</div>
                </div>
                <div className="start-box-50subrow">
                  <div className="start-box-subtitle">END DATE</div>
                </div>
              </div>
              <div className="start-box-row">
                <div className="start-box-subtitle">GUEST</div>
              </div>
              <div className="start-box-bottom">
                <button type="submit">
                  <span>Start</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContentCover;
