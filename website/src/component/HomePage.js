import React, { Component } from "react";
import HeaderContainer from "./Header/HeaderContainer";
import FooterContainer from "./Footer/FooterContainer";
import "./HomePage.css";

// For TEST Purpose
class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <h1>Hello World</h1>
        <FooterContainer />
      </div>
    );
  }
}

export default HomePage;
