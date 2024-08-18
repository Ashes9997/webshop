
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";

function myNavBar({isLoggedIn}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
        <Navbar color="primary" expand = {"sm"}>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <link className="nav-link" to={"/"}>
                Home

              </link>
            </NavItem>

            <NavItem>
              <link className="nav-link" to={"/"}>
                Cart

              </link>
            </NavItem>

            <NavItem>
              <link className="nav-link" to={"/"}>
                Login

              </link>
            </NavItem>

            
            
          </Nav>
          <NavbarText>Simple Text</NavbarText>

        </Collapse>
      </Navbar>
            
 
  </div>
);
}


 

 export default myNavBar;


