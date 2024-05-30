import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../../styles/SignUpForm.module.css";

function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    // Hantera sign-up-logik här
  };

  return (
    <div>
      <h2 className={styles.header}>Sign Up</h2>
      <Container className={styles.formContainer}>
        <Form onSubmit={handleSignUp}>
          <Form.Group controlId="formUsername">
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={styles.input}
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
            />
          </Form.Group>

          <Form.Group controlId="formConfirmPassword" className="mt-3">
            <Form.Control
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={styles.input}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className={styles.submitButton}>
            Sign Up
          </Button>
        </Form>

        <div className={styles.divider}>or</div>

        <p className={styles.signInText}>
          Already have an account?{" "}
          <Link to="/sign-in" className={styles.link}>
            Sign in here!
          </Link>
        </p>
      </Container>
    </div>
  );
}

export default SignUpForm;
