import React, { Component } from "react";
import HeaderContainer from "./Header/HeaderContainer";
import FooterContainer from "./Footer/FooterContainer";
import Card from "./Card/Card";
import "./HomePage.css";

// For TEST Purpose
class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="hompage-recomendation">
          <Card />
        </div>
        <footer className="homepage-footer">
          <FooterContainer />
        </footer>
      </div>
    );
  }
}

export default HomePage;
