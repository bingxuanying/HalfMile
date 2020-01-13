import React, { Component } from "react";
import { connect } from "react-redux";
import stepActions from "../../actions/stepActions";
import "./ProfilePage.sass";
import FooterContainer from "../Footer/FooterContainer";
import { Avatar } from "@material-ui/core";
class ProfilePage extends Component {
  render() {
    return (
      <div className="profile-page">
        <div className="profile-page-person">
          <div className="photo">
            <Avatar className="photo-avatar" src="https://scontent.fsac1-2.fna.fbcdn.net/v/t1.0-1/p320x320/68954643_1138292369694476_5427723203302653952_o.jpg?_nc_cat=103&_nc_ohc=Mp79CnEXxX0AX_WT8o7&_nc_ht=scontent.fsac1-2.fna&_nc_tp=1&oh=c98375ebaef647824a9cb22b6cee2272&oe=5E8EDADC"
              alt="profile img" />
          </div>
          <div className="info-box">
            <div className="option">Option</div>
            <div className="name">Name</div>
            <div className="email">Email</div>
            <div className="home-address">Home Address</div>
            <div className="payment">payment</div>
          </div>
        </div>
        <div className="profile-page-mytrip"></div>
        <div className="profile-page-recommand"></div>
        <div className="profile-page-footer"><FooterContainer /></div>
      </div>
    );
  }
}

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
