import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';

const Navigation = props => (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">button-click</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="disabled text-white" href="/">Click an image to begin!</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="disabled text-white" href="/">Score: {props.score} | Top Score: 0</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );

  export default Navigation;
