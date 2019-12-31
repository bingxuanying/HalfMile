import React, { Component } from "react";
import HeaderContainer from "./Header/HeaderContainer";
import ContentCover from "./Content/ContentCover";
import ContentCategory from "./Content/ContentCategory";
import FooterContainer from "./Footer/FooterContainer";
import GuideCard from "./Card/GuideCard";
import AdventureCard from "./Card/AdvantureCard";
import CityCard from "./Card/CityCard";
import "./HomePage.css";

// For TEST Purpose
class HomePage extends Component {
  render() {
    const travelPlans_Guide = [
      <GuideCard />,
      <GuideCard />,
      <GuideCard />,
      <GuideCard />
    ];
    const travelPlans_Adventure = [
      <AdventureCard />,
      <AdventureCard />,
      <AdventureCard />,
      <AdventureCard />,
      <AdventureCard />,
      <AdventureCard />
    ];
    const travelPlans_City = [<CityCard />, <CityCard />, <CityCard />];

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
              cards_row1={travelPlans_Guide}
              style={{ marginTop: "240px" }}
            />
            <ContentCategory
              title={"Take Adventures"}
              subTitle={
                "Leave and go where there are no electricity no mobile networks and not many humans"
              }
              cards_row1={travelPlans_Adventure}
            />
            <ContentCategory
              title={"Travel Around the World"}
              subTitle={
                "The world outside is yet to be seen. Please kindly say 'bon voyage' to me"
              }
              cards_row1={travelPlans_City}
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
