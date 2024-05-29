import React, { useState } from 'react';
import { Form, Button, Container, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../../styles/SignUpForm.module.css';

function SignUpForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (event) => {
    event.preventDefault();
    // Hantera sign-up-logik här
  };

  return (
    <Container className={styles.formContainer}>
      <Form onSubmit={handleSignUp}>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formConfirmPassword" className="mt-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Sign Up
        </Button>
      </Form>

      <div className={styles.divider}>or</div>

      <p>
        Already have an account? <Link to="/sign-in" className={styles.link}>Sign in here!</Link>
      </p>
    </Container>
  );
}

export default SignUpForm;
