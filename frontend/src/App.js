import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import classNames from 'classnames';
import Home from './components/Home';
import SignIn from './components/SignIn';
import NavBar from "./components/NavBar";
import SignUpForm from './pages/auth/SignUpForm';
import styles from "./App.module.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <div className={classNames(styles.App, { [styles.contentShift]: menuOpen })}>
      <NavBar onToggle={(isOpen) => setMenuOpen(isOpen)} />
      <div className={styles.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route path="*" element={<p>Page not found!</p>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
