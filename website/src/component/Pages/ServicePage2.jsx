import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import HeaderContainer from "../Header/HeaderContainer";
import { TripOverview } from "../TripOverview";
import "./ServicePage.sass";
import { SearchResult } from "../SearchResult";

import SearchBarLoca from "../LocationBox/SearchBar/SearchBarLoca";
import Map from "../Map/Map";

class ServicePage2 extends Component {
  render() {
    return (
      <div className="servicepage-containter">
        <div className="servicepage-cover">
          <TripOverview base="city" />
        </div>
        <div className="servicepage-main">
          {/* sdie bar section */}
          <div className="servicepage-sidebar">
            <div className="servicepage-sidebar-searchbar">
              <SearchBarLoca />
            </div>
            <div className="servicepage-sidebar-menu">
              <SearchResult />
            </div>
          </div>
          {/* map section */}
          <div className="servicepage2-map">
            <Map />
          </div>

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

export default ServicePage2;
