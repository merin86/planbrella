import React from "react";
import { Route, Routes } from "react-router-dom";
import classNames from "classnames";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SignInForm from "./pages/auth/SignInForm";
import SignUpForm from "./pages/auth/SignUpForm";
import Footer from "./components/Footer";
import styles from "./App.module.css";
import useMenuState from "./hooks/useMenuState";
import "./api/axiosDefaults";

function App() {
  const { menuOpen, setMenuOpen, paddingTop } = useMenuState();

  return (
    <div
      className={classNames(styles.App, { [styles.contentShift]: menuOpen })}
    >
      <NavBar onToggle={(isOpen) => setMenuOpen(isOpen)} />
      <div className={styles.content} style={{ paddingTop, flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route path="*" element={<p>Page not found!</p>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
