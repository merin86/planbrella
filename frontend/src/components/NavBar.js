import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import styles from "../styles/NavBar.module.css";
import { useCurrentUser } from "../contexts/CurrentUserContext";

function NavBar({ onToggle }) {
  const [expanded, setExpanded] = useState(false);
  const currentUser = useCurrentUser();
  console.log("Current User:", currentUser);

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
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className={`mx-auto text-center d-flex align-items-center ${styles.NavLinks}`}>
            <NavLink to="/" end className={({ isActive }) => isActive ? styles.NavLinkActive : styles.NavLink} onClick={handleClose}>
              Home
            </NavLink>
            {currentUser ? (
              <span className={styles.NavLink}>{currentUser.username}</span>
            ) : (
              <>
                <NavLink to="/sign-in" className={({ isActive }) => isActive ? styles.NavLinkActive : styles.NavLink} onClick={handleClose}>
                  Sign in
                </NavLink>
                <NavLink to="/sign-up" className={({ isActive }) => isActive ? styles.NavLinkActive : styles.NavLink} onClick={handleClose}>
                  Sign up
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
