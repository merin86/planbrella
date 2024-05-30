import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import styles from "../styles/NavBar.module.css";

function NavBar({ onToggle }) {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
    onToggle(!expanded);
  };

  const handleClose = () => {
    setExpanded(false);
    onToggle(false);
  };

  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleClose}>
          <img src={logo} alt="logo" height="80" width="80" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav
            className={`mx-auto text-center d-flex align-items-center ${styles.NavLinks}`}
          >
            <Nav.Link
              as={NavLink}
              to="/"
              end
              className={styles.NavLink}
              activeClassName={styles.NavLinkActive}
              onClick={handleClose}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/sign-in"
              className={styles.NavLink}
              activeClassName={styles.NavLinkActive}
              onClick={handleClose}
            >
              Sign in
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/sign-up"
              className={styles.NavLink}
              activeClassName={styles.NavLinkActive}
              onClick={handleClose}
            >
              Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
