import React, { Component } from "react";
import { connect } from "react-redux";
import stepActions from "../../actions/stepActions";
import "./ProfilePage.sass";
import FooterContainer from "../Footer/FooterContainer";
import { Avatar, IconButton, Tooltip, Divider, Button } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import ContentCategory from "../HomeContent/ContentCategory";
import { TripCard } from "../Card";


class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Weili Yin",
      email: "xlyin@ucdavis.edu",
      homeAddress: "4447 Cowell Blvd 57, Davis,CA,95618",
      paymentMethod: [{
        "nickName": "Freedom",
        "cardNumber": "4242424242424242",
        "nameOnCard": "weili yin",
        "expireMonth": 6,
        "expireDay": 24,
        "cvs": 123
      }, {
        "nickName": "CSR",
        "cardNumber": "4242424242424242",
        "nameOnCard": "weili yin",
        "expireMonth": 6,
        "expireDay": 24,
        "cvs": 123
      }],

    }
  }
  render() {
    return (
      <div className="profile-page">
        <div className="profile-page-contant">
          <div className="profile-page-person">
            <div className="photo">
              <Avatar className="photo-avatar" src="https://scontent.fsac1-2.fna.fbcdn.net/v/t1.0-1/p320x320/68954643_1138292369694476_5427723203302653952_o.jpg?_nc_cat=103&_nc_ohc=Mp79CnEXxX0AX_WT8o7&_nc_ht=scontent.fsac1-2.fna&_nc_tp=1&oh=c98375ebaef647824a9cb22b6cee2272&oe=5E8EDADC"
                alt="profile img" />
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
                  <IconButton><EditIcon /></IconButton>
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
                  <IconButton><EditIcon /></IconButton>
                </Tooltip>
              </div>
              <Divider />
              <div className="home-address"><div className="title">
                Home&nbsp;Address
                <Divider />
                <span className="subtitle">&nbsp;{this.state.homeAddress}</span>
              </div>
                <Tooltip className="option" title="edit" arrow>
                  <IconButton><EditIcon /></IconButton>
                </Tooltip></div>
              <Divider />
              <div className="payment"><div className="title">
                Payment
                <Divider />
                <span className="subtitle">&nbsp;{this.state.paymentMethod[0].nickName}</span>
              </div>
                <Tooltip className="option" title="edit" arrow>
                  <IconButton><EditIcon /></IconButton>
                </Tooltip></div>
            </div>
          </div>
          <Divider />
          <div className="profile-page-mytrip">
            <ContentCategory
              title={"Your Trip"}
              cards_row1={travelPlans_City}
            />
          </div>
          <div className="profile-page-recommand"></div>
        </div>
        <div className="profile-page-footer"><FooterContainer /></div>
      </div>
    );
  }
}
const travelPlans_City = [
  <TripCard
    key="C3"
    tripTitle="s4966910084's trip"
    tripDuration={5}
    startData="12/5"
    endDate="12/8"
  />,
  <TripCard
    key="C3"
    tripTitle="s4966910084's trip"
    tripDuration={5}
    startData="12/5"
    endDate="12/8"
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
