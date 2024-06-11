import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/logo.jpg";
import styles from "../styles/NavBar.module.css";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";

const NavBar = ({ onToggle }) => {
  // State to track if the navbar is expanded
  const [expanded, setExpanded] = useState(false);
  // Get the current user from context
  const currentUser = useCurrentUser();
  // Function to set the current user in context
  const setCurrentUser = useSetCurrentUser();
  // Hook to navigate programmatically
  const navigate = useNavigate();

  // Toggle the navbar expansion and call the onToggle prop
  const handleToggle = () => {
    setExpanded(!expanded);
    onToggle(!expanded);
  };

  // Close the navbar and call the onToggle prop
  const handleClose = () => {
    setExpanded(false);
    onToggle(false);
  };

  // Handle sign out, clear the token, update user context and navigate to home
  const handleSignOut = async () => {
    try {
      await axios.post("/dj-rest-auth/logout/");
      localStorage.removeItem('token');
      setCurrentUser(null);
      handleClose();
      navigate("/");
    } catch (err) {
      // console.log(err);
    }
  };

  // Icons to display when user is logged in
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

  // Icons to display when user is logged out
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
