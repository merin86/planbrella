import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import classNames from 'classnames';
import NavBar from "./components/NavBar";
import Home from './components/Home';
import SignInForm from './pages/auth/SignInForm';
import SignUpForm from './pages/auth/SignUpForm';
import styles from "./App.module.css";
import { useCurrentUser } from './contexts/CurrentUserContext';
import "./api/axiosDefaults";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const currentUser = useCurrentUser();
  const [paddingTop, setPaddingTop] = useState("120px");

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (currentUser) {
      setPaddingTop(menuOpen ? "180px" : "120px");
    } else {
      setPaddingTop(menuOpen ? "140px" : "120px");
    }
  }, [currentUser, menuOpen]);

  return (
    <div className={classNames(styles.App, { [styles.contentShift]: menuOpen })}>
      <NavBar onToggle={(isOpen) => setMenuOpen(isOpen)} />
      <div className={styles.content} style={{ paddingTop }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route path="*" element={<p>Page not found!</p>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
