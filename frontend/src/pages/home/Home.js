import React from "react";
import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/Home.module.css";

const Home = () => {
  const currentUser = useCurrentUser();

  return (
    <div className={styles.Container}>
      <div className={styles.TextBox}>
        <h2>
          {currentUser
            ? "Planbrella, Productivity App"
            : "Welcome to Planbrella"}
        </h2>
        {currentUser ? (
          <p>
            Welcome back, {currentUser.username}!<br />
            Organize your tasks efficiently and stay on top of your schedule.
            <br />
            You can manage your tasks by visiting the{" "}
            <NavLink to="/tasks" className={styles.Link}>
              Tasks page
            </NavLink>
            .
          </p>
        ) : (
          <p>
            Your premier solution for organizing tasks both personally and
            professionally.
            <br />
            If you already have an account, please{" "}
            <NavLink to="/sign-in" className={styles.Link}>
              sign in here
            </NavLink>
            . New users can create an account by{" "}
            <NavLink to="/sign-up" className={styles.Link}>
              signing up here
            </NavLink>
            .
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
