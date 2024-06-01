import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/logo.jpg";
import styles from "../styles/NavBar.module.css";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";

const NavBar = ({ onToggle }) => {
  const [expanded, setExpanded] = useState(false);
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const navigate = useNavigate();

  const handleToggle = () => {
    setExpanded(!expanded);
    onToggle(!expanded);
  };

  const handleClose = () => {
    setExpanded(false);
    onToggle(false);
  };

  const handleSignOut = async () => {
    try {
      await axios.post("/dj-rest-auth/logout/");
      localStorage.removeItem('token');
      setCurrentUser(null);
      handleClose();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const loggedInIcons = (
    <>
      <NavLink
        className={({ isActive }) => isActive ? styles.NavLinkActive : styles.NavLink}
        to="/tasks"
        onClick={handleClose}
      >
        Tasks
      </NavLink>
      <span className={styles.NavLink} onClick={handleSignOut}>
        Sign Out
      </span>
      <span className={styles.NavText}>
        {currentUser?.username}
      </span>
    </>
  );

  const loggedOutIcons = (
    <>
      <NavLink
        className={({ isActive }) => isActive ? styles.NavLinkActive : styles.NavLink}
        to="/sign-in"
        onClick={handleClose}
      >
        Sign In
      </NavLink>
      <NavLink
        className={({ isActive }) => isActive ? styles.NavLinkActive : styles.NavLink}
        to="/sign-up"
        onClick={handleClose}
      >
        Sign Up
      </NavLink>
    </>
  );

  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top" expanded={expanded}>
      <Container className="d-flex justify-content-center">
        <NavLink to="/" className={styles.BrandContainer} onClick={handleClose}>
          <Navbar.Brand>
            <img src={logo} alt="logo" height="80" width="80" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            <NavLink
              className={({ isActive }) => isActive ? styles.NavLinkActive : styles.NavLink}
              to="/"
              onClick={handleClose}
            >
              Home
            </NavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
