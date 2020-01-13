import React, { Component } from "react";
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
        <div className="cardDeck">{cards_row1}</div>
      </div>
    );
  }
}

export default ContentCategory;
