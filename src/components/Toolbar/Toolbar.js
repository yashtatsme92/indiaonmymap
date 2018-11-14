import React from 'react';

import { Navbar, Nav, NavItem} from 'react-bootstrap';

const toolbar = () => (
    
    <Navbar inverse collapseOnSelect >
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">India on My Map</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Buy Space
      </NavItem>
      {/* <NavItem eventKey={2} href="#">
        Link Right
      </NavItem> */}
    </Nav>
  </Navbar.Collapse>
</Navbar>
    // <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
    //     <a className="navbar-brand" href="#">Some Logo</a>
    //     <ul className="navbar-nav">
    //         <li className="nav-item">
    //             <a className="nav-link" href="#">Login</a>
    //         </li>
    //         <li className="nav-item">
    //             <a className="nav-link" href="#">Buy</a>
    //         </li>
    //     </ul>
    // </nav>
);

export default toolbar;