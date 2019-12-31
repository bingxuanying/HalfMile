import React, { Component } from "react";
import HeaderContainer from "./Header/HeaderContainer";
import ContentCover from "./Content/ContentCover";
import ContentCate from "./Content/ContentCate";
import FooterContainer from "./Footer/FooterContainer";
import CardHolder from "./Card/CardHolder";
import "./HomePage.css";

// For TEST Purpose
class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <head>
          <HeaderContainer />
        </head>
        <body>
          <ContentCover />
          <div className="content-category-containter">
            <ContentCate />
            <ContentCate />
          </div>
        </body>
        <footer className="homepage-footer">
          <FooterContainer />
        </footer>
      </div>
    );
  }
}

export default HomePage;
