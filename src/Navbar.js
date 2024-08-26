import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  // NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";

function MyNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="primary" expand="sm">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link className="nav-Link" to="/Home">
                Home
              </Link>
            </NavItem>

            <NavItem>
              <Link className="nav-Link" to="/Cart">
                Cart
              </Link>
            </NavItem>

            <NavItem>
              <Link className="nav-Link" to="/Login">
                Login
              </Link>
            </NavItem>
          </Nav>
          {<NavbarText>My Nav Bar</NavbarText>}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavBar;