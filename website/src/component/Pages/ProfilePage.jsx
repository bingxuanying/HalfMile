import React, { Component } from "react";
import { connect } from "react-redux";
import "./ProfilePage.sass";
import FooterContainer from "../Footer/FooterContainer";
import {
  Avatar,
  IconButton,
  Tooltip,
  Divider,
  Button,
  TextField
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ContentCategory from "../HomeContent/ContentCategory";
import { TripCard, GuideCard } from "../Card";
import guideImg1 from "../Card/assets/tokyo.jpg";
import guideImg2 from "../Card/assets/guide1.jpg";
import guideImg3 from "../Card/assets/guide2.jpg";
import guideImg4 from "../Card/assets/guide3.jpg";

import * as userActions from "../../actions/userActions";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Weili Yin",
      nameEdit: false,
      email: "xlyin@ucdavis.edu",
      emailEdit: false,
      homeAddress: "4447 Cowell Blvd 57, Davis,CA,95618",
      homeAddressEdit: false,
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
      ],
      paymentMethodEdit: false
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
                ref={ref => (this.upload = ref)}
                accept="image/*"
                id="photoInput"
                style={{ display: "none" }}
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={e => this.upload.click()}
                >
                  <CameraAltIcon />
                  Upload
                </Button>
              </label>
              <Button
                onClick={this.logout}
                variant="contained"
                color="secondary"
              >
                <ExitToAppIcon />
                LOGOUT
              </Button>
            </div>
            <div className="info-box">
              <div className="name">
                <div className="title">
                  Name
                  {this.state.nameEdit ? (
                    <div className="subtitle">
                      <TextField
                        defaultValue={this.state.name}
                        onChange={event => {
                          const { value } = event.target;
                          this.setState({ name: value });
                        }}
                      />
                    </div>
                  ) : (
                    <div className="subtitle">{this.state.name}</div>
                  )}
                </div>
                {this.state.nameEdit ? (
                  <Tooltip className="option" title="save" arrow>
                    <IconButton
                      onClick={() => {
                        this.saveClick("name");
                      }}
                    >
                      <SaveIcon />
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Tooltip className="option" title="edit" arrow>
                    <IconButton
                      onClick={() => {
                        this.editClick("name");
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                )}
              </div>
              <Divider />
              <div className="email">
                <div className="title">
                  Email
                  {this.state.emailEdit ? (
                    <div className="subtitle">
                      <TextField
                        defaultValue={this.state.email}
                        onChange={event => {
                          const { value } = event.target;
                          this.setState({ email: value });
                        }}
                      />
                    </div>
                  ) : (
                    <div className="subtitle">{this.state.email}</div>
                  )}
                </div>
                {this.state.emailEdit ? (
                  <Tooltip className="option" title="save" arrow>
                    <IconButton
                      onClick={() => {
                        this.saveClick("email");
                      }}
                    >
                      <SaveIcon />
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Tooltip className="option" title="edit" arrow>
                    <IconButton
                      onClick={() => {
                        this.editClick("email");
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                )}
              </div>
              <Divider variant="middle" />
              <div className="home-address">
                <div className="title">
                  Home&nbsp;Address
                  {this.state.homeAddressEdit ? (
                    <div className="subtitle">
                      <TextField
                        style={{ width: "400px" }}
                        defaultValue={this.state.homeAddress}
                        onChange={event => {
                          const { value } = event.target;
                          this.setState({ homeAddress: value });
                        }}
                      />
                    </div>
                  ) : (
                    <div className="subtitle">{this.state.homeAddress}</div>
                  )}
                </div>
                {this.state.homeAddressEdit ? (
                  <Tooltip className="option" title="save" arrow>
                    <IconButton
                      onClick={() => {
                        this.saveClick("address");
                      }}
                    >
                      <SaveIcon />
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Tooltip className="option" title="edit" arrow>
                    <IconButton
                      onClick={() => {
                        this.editClick("address");
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                )}
              </div>
              <Divider />
              <div className="payment">
                <div className="title">
                  Payment
                  <div className="subtitle">
                    {this.state.paymentMethod[0].nickName}
                  </div>
                </div>
                <Tooltip className="option" title="edit" arrow>
                  <IconButton
                    onClick={() => {
                      this.editClick("payment");
                    }}
                  >
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
  editClick = type => {
    switch (type) {
      case "name":
        this.setState({ nameEdit: true });
        break;
      case "email":
        this.setState({ emailEdit: true });
        break;
      case "address":
        this.setState({ homeAddressEdit: true });
        break;
      case "payment":
        this.setState({ paymentMethodEdit: true });
        break;
      default:
        break;
    }
  };
  saveClick = type => {
    switch (type) {
      case "name":
        this.setState({ nameEdit: false });
        break;
      case "email":
        this.setState({ emailEdit: false });
        break;
      case "address":
        this.setState({ homeAddressEdit: false });
        break;
      case "payment":
        this.setState({ paymentMethodEdit: false });
        break;
      default:
        break;
    }
  };
  handleChange = event => {
    this.setState(event.target.value);
  };
  logout = () => {
    console.log("Log OUT !");
    this.props.logout();
  };
}
const travelPlans_Trip = [
  <TripCard
    key="C1"
    tripTitle="s4966910084's trip"
    tripDuration={5}
    startData="12/5"
    endDate="12/8"
  />,
  <TripCard
    key="C2"
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
    logout: userActions.logout
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(ProfilePage);
