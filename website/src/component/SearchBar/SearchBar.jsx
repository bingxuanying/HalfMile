import React, { Component } from "react";
import "./index.sass";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  render() {
    return (
      <div className="search-bar">
        <div className="search-bar-icon">Icon here</div>
        <div className="search-bar-contenent">Content Here</div>
      </div>
    );
  }
}

export default SearchBar;
