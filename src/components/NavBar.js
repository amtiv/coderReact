import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <Navbar className="main-navbar" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="home">iMovil</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href="Samsung">Samsung</Nav.Link>
          <Nav.Link href="Xiaomi">Xiaomi</Nav.Link>
          <Nav.Link href="Apple">Apple</Nav.Link>
          <Nav.Link href="Huawei">Huawei</Nav.Link>
          <Nav.Link>
            <CartWidget />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
