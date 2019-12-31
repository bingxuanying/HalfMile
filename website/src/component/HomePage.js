import React, { Component } from "react";
import HeaderContainer from "./Header/HeaderContainer";
import ContentCover from "./Content/ContentCover";
import ContentCategory from "./Content/ContentCategory";
import FooterContainer from "./Footer/FooterContainer";
import GuidCard from "./Card/GuidCard";
import "./HomePage.css";

// For TEST Purpose
class HomePage extends Component {
  render() {
    const travelPlans_row1 = [
      <GuidCard />,
      <GuidCard />,
      <GuidCard />,
      <GuidCard />
    ];
    return (
      <div className="homepage">
        <div className="homepage-header">
          <HeaderContainer />
        </div>
        <div className="homepage-body">
          <ContentCover />
          <div className="content-category-containter">
            <ContentCategory
              title={"Top-Rated Travel Guides"}
              subTitle={
                "Be fascinated by following in the footsteps of someone else"
              }
              cards_row1={travelPlans_row1}
            />
            <ContentCategory
              title={"Take Adventures"}
              subTitle={
                "Leave and go where there are no electricity no mobile networks and not many humans"
              }
            />
            <ContentCategory
              title={"Travel Around the World"}
              subTitle={
                "The world outside is yet to be seen. Please kindly say 'bon voyage' to me"
              }
            />
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
