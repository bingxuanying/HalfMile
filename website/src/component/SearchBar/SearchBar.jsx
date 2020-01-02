import React, { Component } from "react";
import { Form, FormGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
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
      <Form className="search-bar">
        <Form.Group controlId="keyword">
          <FaSearch className="search-bar-icon" />
          <Form.Control className="search-bar-contenent" type="text" placeholder="Enter Destenation" />
        </Form.Group>
      </Form>
    );
  }
}

export default SearchBar;
