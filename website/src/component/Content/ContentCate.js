import React, { Component } from "react";
import GuidCard from "../Card/GuidCard";
import { CardDeck, CardGroup, CardColumns } from "react-bootstrap";
import "./ContentCategory.css";
class ContentCate extends Component {
  render() {
    return (
      <div className="content-category">
        <div className="content-category-inner">
          <div className="content-category-header">
            <h3>Airbnb Plus places to stay</h3>
            <span>
              A selection of places to stay verified for quality and design
            </span>
          </div>
          <CardDeck className="cardDeck card-deck">
            <GuidCard />
            <GuidCard />
            <GuidCard />
            <GuidCard />
          </CardDeck>
        </div>
      </div>
    );
  }
}

export default ContentCate;
