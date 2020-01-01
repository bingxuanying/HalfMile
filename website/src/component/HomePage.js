import React, { Component } from "react";
import HeaderContainer from "./Header/HeaderContainer";
import ContentCover from "./Content/ContentCover";
import ContentCategory from "./Content/ContentCategory";
import FooterContainer from "./Footer/FooterContainer";
import GuideCard from "./Card/GuideCard";
import AdventureCard from "./Card/AdvantureCard";
import CityCard from "./Card/CityCard";
import "./HomePage.css";

import adImg from "./Card/assets/AdvantureEx.jpg";
import cityImg from "./Card/assets/Shanghai.png";
import guideImg from "./Card/assets/tokyo.jpg";

// For TEST Purpose
class HomePage extends Component {
  render() {
    const cityInfo =
      "In 2077, they voted my city the worst place to live in America. Main issues? Sky high rate of violence and more people living below the poverty line than anywhere else";
    const travelPlans_Guide = [
      <GuideCard
        key="G1"
        city="3 days Tokyo - Osaka"
        author="Weili Yin"
        info="Nice trip to Tokro with idot guides"
        stars={5}
        img={guideImg}
      />,
      <GuideCard
        key="G2"
        city="Tokyo"
        author="weili"
        info="Nice trip"
        stars={4.5}
        img={guideImg}
      />,
      <GuideCard
        key="G3"
        city="Tokyo"
        author="weili"
        info="Nice trip"
        stars={4}
        img={guideImg}
      />,
      <GuideCard
        key="G4"
        city="Tokyo"
        author="weili"
        info="Nice trip"
        stars={4}
        img={guideImg}
      />
    ];
    const travelPlans_Adventure = [
      <AdventureCard key="A1" name="London" price="168" img={adImg} />,
      <AdventureCard key="A2" name="Mexico Cave" price="300" img={adImg} />,
      <AdventureCard key="A3" name="London" price="168" img={adImg} />,
      <AdventureCard key="A4" name="London" price="168" img={adImg} />,
      <AdventureCard key="A5" name="London" price="168" img={adImg} />,
      <AdventureCard key="A6" name="London" price="168" img={adImg} />
    ];
    const travelPlans_City = [
      <CityCard key="C1" city="TAIZHOU" img={cityImg} cityInfo={cityInfo} />,
      <CityCard key="C2" city="WENGLING" img={cityImg} cityInfo={cityInfo} />,
      <CityCard key="C3" city="SHANGHAI" img={cityImg} cityInfo={cityInfo} />
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
