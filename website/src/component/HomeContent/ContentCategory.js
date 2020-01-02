import React, { Component } from "react";
import { CardDeck, CardGroup, CardColumns } from "react-bootstrap";
import "./ContentCategory.css";
class ContentCategory extends Component {
  render() {
    const cards_row1 = this.props.cards_row1;
    const title = this.props.title;
    const subTitle = this.props.subTitle;

    return (
      <div className="content-category">
        <div className="content-category-header">
          <h3>{title}</h3>
          <span>{subTitle}</span>
        </div>
        <CardDeck className="cardDeck card-deck">{cards_row1}</CardDeck>
      </div>
    );
  }
}

export default ContentCategory;
