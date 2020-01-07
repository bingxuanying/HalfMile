import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../Header.css"

class HeaderLogo extends Component {
  render() {
    return (
        <Nav.Link exact href="/">
          <Navbar.Brand >
            <a>
              {/* <img src="https://img.icons8.com/pastel-glyph/64/000000/travel-signpost.png" /> */}
              <div id="NavLogo">
                Half Mile
              </div>
              
            </a>
          </Navbar.Brand> 
        </Nav.Link>

    );
  }
}

export default HeaderLogo;
