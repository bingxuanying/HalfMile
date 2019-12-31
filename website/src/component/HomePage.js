import React, { Component } from "react";
import HeaderContainer from "./Header/HeaderContainer";
import ContentCover from "./Content/ContentCover";
import ContentCategory from "./Content/ContentCategory";
import FooterContainer from "./Footer/FooterContainer";
import "./HomePage.css";

// For TEST Purpose
class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="homepage-header">
          <HeaderContainer />
        </div>
        <div className="homepage-body">
          <ContentCover />
          <div className="content-category-containter">
            <ContentCategory />
            <ContentCategory />
          </div>
        </div>
        <footer className="homepage-footer">
          <FooterContainer />
        </footer>
      </div>
    );
  }
}

export default HomePage;
