import React, { Component } from "react";
import ContentCover from "../HomeContent/ContentCover";
import ContentCategory from "../HomeContent/ContentCategory";
import FooterContainer from "../Footer/FooterContainer";
import { withRouter } from "react-router-dom";

import { GuideCard, AdventureCard, CityCard, TripCard } from "../Card/index";
import "./HomePage.sass";

import adImg from "../Card/assets/AdvantureEx1.jpg";
import adImg1 from "../Card/assets/AdvantureEx2.jpg";
import adImg2 from "../Card/assets/AdvantureEx3.jpg";
import adImg3 from "../Card/assets/AdvantureEx4.jpg";
import adImg4 from "../Card/assets/AdvantureEx5.jpg";
import adImg5 from "../Card/assets/AdvantureEx6.jpg";
import cityImg from "../Card/assets/Shanghai.png";
import cityImg1 from "../Card/assets/london.png";
import cityImg2 from "../Card/assets/montreal.png";
import guideImg1 from "../Card/assets/tokyo.jpg";
import guideImg2 from "../Card/assets/guide1.jpg";
import guideImg3 from "../Card/assets/guide2.jpg";
import guideImg4 from "../Card/assets/guide3.jpg";
import { Form } from "react-bootstrap";
import { SearchResult } from "../SearchResult";
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
        img={guideImg1}
      />,
      <GuideCard
        key="G2"
        city="Choeng Thale"
        author="Jin xin"
        info="Villa Amonteera, Luxry with fantasy views"
        stars={4.5}
        img={guideImg2}
      />,
      <GuideCard
        key="G3"
        city="Bail Selat"
        author="Ybx"
        info="Hideout Bail-Eco Bamboo hoom"
        stars={4}
        img={guideImg3}
      />,
      <GuideCard
        key="G4"
        city="Wimberley"
        author="HZJ"
        info="Super Cute Retro Airstream"
        stars={4}
        img={guideImg4}
      />
    ];
    const travelPlans_Adventure = [
      <AdventureCard key="A1" name="LONGON TRIP" price="168" img={adImg} />,
      <AdventureCard key="A2" name="ITALY COOKING" price="138" img={adImg1} />,
      <AdventureCard key="A3" name="CUBA GUIDE" price="79" img={adImg2} />,
      <AdventureCard key="A4" name="JAPAN SAMURAI" price="91" img={adImg3} />,
      <AdventureCard key="A5" name="PORTUGAL FLAVOR" price="70" img={adImg4} />,
      <AdventureCard key="A6" name="ITALY TRUFFLES" price="126" img={adImg5} />
    ];
    const travelPlans_City = [
      <CityCard key="C1" city="SHANGHAI" img={cityImg} cityInfo={cityInfo} />,
      <CityCard key="C2" city="LONDON" img={cityImg1} cityInfo={cityInfo} />,
      <TripCard
        key="C3"
        tripTitle="s4966910084's trip"
        tripDuration={5}
        startData="12/5"
        endDate="12/8"
      />
    ];

    return (
      <div className="homepage-containter">
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

export default withRouter(HomePage);
