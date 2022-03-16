import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className="main-navbar" bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">
        iMovil
      </Navbar.Brand>
      <Nav className="justify-content-end" style={{ width: "92%" }}>
        <Nav.Link as={NavLink} to="/phone/Samsung">
          Samsung
        </Nav.Link>
        <Nav.Link as={NavLink} to="/phone/Apple">
          Apple
        </Nav.Link>
        <Nav.Link as={NavLink} to="/phone/Xiaomi">
          Xiaomi
        </Nav.Link>
        <Nav.Link as={NavLink} to="/carrito">
          <CartWidget />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
