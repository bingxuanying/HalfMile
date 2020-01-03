import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import HeaderContainer from "../Header/HeaderContainer";
import "./ServicePage.css";

import SearchBarDemo from "../SearchBar/SearchBarDemo";

class ServicePage extends Component {
  render() {
    return (
      <div className="servicepage-containter">
        <HeaderContainer />
        <div className="servicepage-cover"></div>
        <div className="servicepage-main">
          {/* sdie bar section */}
          <div className="servicepage-sidebar">
            <div className="servicepage-sidebar-searchbar">
              <SearchBarDemo />
            </div>
            <div className="servicepage-sidebar-menu"></div>
          </div>
          {/* map section */}
          <div className="servicepage-map"></div>

          {/* Overflow Btn - position: absolute */}
          <div className="servicepage-floatWindow"></div>
          <button className="servicepage-pre-btn page-btn-bg">
            <FontAwesomeIcon className="page-btn" icon={faCaretLeft} />
          </button>
          <button className="servicepage-next-btn page-btn-bg">
            <FontAwesomeIcon className="page-btn" icon={faCaretRight} />
          </button>
        </div>
      </div>
    );
  }
}

export default ServicePage;
