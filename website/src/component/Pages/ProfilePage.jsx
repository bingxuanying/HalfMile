import React, { Component } from "react";
import { connect } from "react-redux";
import stepActions from "../../actions/stepActions";
import "./ProfilePage.sass";
import FooterContainer from "../Footer/FooterContainer";
import {
  Avatar,
  IconButton,
  Tooltip,
  Divider,
  Button
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import ContentCategory from "../HomeContent/ContentCategory";
import { TripCard, GuideCard, CityCard } from "../Card";

import guideImg1 from "../Card/assets/tokyo.jpg";
import guideImg2 from "../Card/assets/guide1.jpg";
import guideImg3 from "../Card/assets/guide2.jpg";
import guideImg4 from "../Card/assets/guide3.jpg";
import cityImg from "../Card/assets/Shanghai.png";
import cityImg1 from "../Card/assets/london.png";
import cityImg2 from "../Card/assets/montreal.png";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Weili Yin",
      email: "xlyin@ucdavis.edu",
      homeAddress: "4447 Cowell Blvd 57, Davis,CA,95618",
      paymentMethod: [
        {
          nickName: "Freedom",
          cardNumber: "4242424242424242",
          nameOnCard: "weili yin",
          expireMonth: 6,
          expireDay: 24,
          cvs: 123
        },
        {
          nickName: "CSR",
          cardNumber: "4242424242424242",
          nameOnCard: "weili yin",
          expireMonth: 6,
          expireDay: 24,
          cvs: 123
        }
      ]
    };
  }
  render() {
    return (
      <div className="profile-page">
        <div className="profile-page-contant">
          <div className="profile-page-person">
            <div className="photo">
              <Avatar
                className="photo-avatar"
                src="https://scontent.fsac1-2.fna.fbcdn.net/v/t1.0-1/p320x320/68954643_1138292369694476_5427723203302653952_o.jpg?_nc_cat=103&_nc_ohc=Mp79CnEXxX0AX_WT8o7&_nc_ht=scontent.fsac1-2.fna&_nc_tp=1&oh=c98375ebaef647824a9cb22b6cee2272&oe=5E8EDADC"
                alt="profile img"
              />
              <input
                accept="image/*"
                id="contained-button-file"
                style={{ display: "none" }}
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary">
                  <CameraAltIcon />
                  Upload
                </Button>
              </label>
            </div>
            <div className="info-box">
              <div className="name">
                <div className="title">
                  Name
                  <Divider />
                  <span className="subtitle">&nbsp;{this.state.name}</span>
                </div>
                <Tooltip className="option" title="edit" arrow>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                </Tooltip>
              </div>
              <Divider />
              <div className="email">
                <div className="title">
                  Email
                  <Divider />
                  <span className="subtitle">&nbsp;{this.state.email}</span>
                </div>
                <Tooltip className="option" title="edit" arrow>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                </Tooltip>
              </div>
              <Divider />
              <div className="home-address">
                <div className="title">
                  Home&nbsp;Address
                  <Divider />
                  <span className="subtitle">
                    &nbsp;{this.state.homeAddress}
                  </span>
                </div>
                <Tooltip className="option" title="edit" arrow>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                </Tooltip>
              </div>
              <Divider />
              <div className="payment">
                <div className="title">
                  Payment
                  <Divider />
                  <span className="subtitle">
                    &nbsp;{this.state.paymentMethod[0].nickName}
                  </span>
                </div>
                <Tooltip className="option" title="edit" arrow>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
          </div>
          <Divider />
          <div className="profile-page-mytrip">
            <ContentCategory
              title={"Your Trip"}
              cards_row1={travelPlans_Trip}
            />
          </div>
          <Divider />
          <div className="profile-page-recommand">
            <ContentCategory
              title={"Recommadation"}
              cards_row1={travelPlans_Guide}
            />
          </div>
        </div>
        <div className="profile-page-footer">
          <FooterContainer />
        </div>
      </div>
    );
  }
}
const travelPlans_Trip = [
  <TripCard
    key="C3"
    tripTitle="s4966910084's trip"
    tripDuration={5}
    startData="12/5"
    endDate="12/8"
  />,
  <TripCard
    key="C4"
    tripTitle="s4966910084's trip"
    tripDuration={5}
    startData="12/5"
    endDate="12/8"
  />,
  <TripCard
    key="C4"
    tripTitle="s4966910084's trip"
    tripDuration={5}
    startData="12/5"
    endDate="12/8"
  />
];
const cityInfo =
  "In 2077, they voted my city the worst place to live in America. Main issues? Sky high rate of violence and more people living below the poverty line than anywhere else";
const travelPlans_City = [
  <CityCard key="C1" city="SHANGHAI" img={cityImg} cityInfo={cityInfo} />,
  <CityCard key="C2" city="LONDON" img={cityImg1} cityInfo={cityInfo} />,
  <CityCard key="C3" city="Mongo" img={cityImg2} cityInfo={cityInfo} />
];

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
const mapStateToProps = state => {
  return {
    section: state.step.section
  };
};

const mapDispatchToProps = () => {
  return {
    // updateHomeAdress: planActions.updateHomeAdress
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(ProfilePage);
