import React, { Component } from "react";
import { Form, FormGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "./index.sass";
import { ControlLabel } from "react-bootstrap";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  render() {
    return (
      <Form className="search-bar">
        <Form.Group controlId="keyword">
          <FaSearch className="search-bar-icon" />
          <Form.Control className="search-bar-contenent" type="text"
            placeholder="Enter Destenation" onChange={this.handleChange}
            onKeyPress={this.handleKeyPress} />
        </Form.Group>
      </Form>
    );
  }

  handleChange = (event) => {
    this.setState({ input: event.target.value })
    // console.log(event.target.value);
  }
  handleKeyPress = (event) => {
    var code = event.keyCode || event.which;
    if (code === 13) { //13 is the enter keycode
      console.log("We enter ENTER");
    }
  }
}

export default SearchBar;
