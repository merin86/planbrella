import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.jpg";
import styles from '../styles/NavBar.module.css';

function NavBar() {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" height="90" width="90" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mx-auto text-center d-flex align-items-center">
            <Nav.Link href="#home" className={styles.NavLink}>Home</Nav.Link>
            <Nav.Link href="#sign-in" className={styles.NavLink}>Sign in</Nav.Link>
            <Nav.Link href="#sign-up" className={styles.NavLink}>Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
