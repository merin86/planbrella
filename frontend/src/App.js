import React from "react";
import { Route, Routes } from "react-router-dom";
import classNames from "classnames";
import NavBar from "./components/NavBar";
import Home from "./pages/home/Home";
import SignInForm from "./pages/auth/SignInForm";
import SignUpForm from "./pages/auth/SignUpForm";
import Tasks from "./pages/tasks/Tasks";
import TaskCreateForm from "./pages/tasks/TaskCreateForm";
import TaskDetail from "./pages/tasks/TaskDetail";
import TaskEdit from "./pages/tasks/TaskEdit";
import Footer from "./components/Footer";
import styles from "./App.module.css";
import useMenuState from "./hooks/useMenuState";
import "./api/axiosDefaults";

function App() {
  const { menuOpen, setMenuOpen, paddingTop } = useMenuState(); // Custom hook to manage menu state

  return (
    <div
      className={classNames(styles.App, { [styles.contentShift]: menuOpen })}
    >
      <NavBar onToggle={(isOpen) => setMenuOpen(isOpen)} /> {/* Navbar component with toggle handler */}
      <div className={styles.content} style={{ paddingTop, flex: 1 }}> {/* Main content area with dynamic padding */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page route */}
          <Route path="/sign-in" element={<SignInForm />} /> {/* Sign-in form route */}
          <Route path="/sign-up" element={<SignUpForm />} /> {/* Sign-up form route */}
          <Route path="/tasks" element={<Tasks />} /> {/* Tasks list route */}
          <Route path="/tasks/create" element={<TaskCreateForm />} /> {/* Task creation form route */}
          <Route path="/tasks/:id" element={<TaskDetail />} /> {/* Task detail view route */}
          <Route path="/tasks/:id/edit" element={<TaskEdit />} /> {/* Task edit form route */}
          <Route path="*" element={<p>Page not found!</p>} /> {/* Fallback route for undefined paths */}
        </Routes>
      </div>
      <Footer /> {/* Footer component */}
    </div>
  );
}

export default App;
