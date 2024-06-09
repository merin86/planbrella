import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from '../../styles/SignInUpForm.module.css';
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";

function SignInForm() {
  const setCurrentUser = useSetCurrentUser();

  // State to manage form input data
  const [signInData, setSignInData] = useState({
    username: '',
    password: '',
  });
  const { username, password } = signInData;

  // State to manage form errors
  const [errors, setErrors] = useState({});

  // Hook to navigate to different routes
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send sign in request
      const { data } = await axios.post('/dj-rest-auth/login/', signInData);
      localStorage.setItem('token', data.key);

      // Fetch current user data
      const userResponse = await axios.get("/dj-rest-auth/user/");
      setCurrentUser(userResponse.data);
      navigate('/');
    } catch (err) {
      // Set errors if any
      setErrors(err.response?.data);
    }
  };

  return (
    <div>
      <h2 className={styles.header}>Sign In</h2>
      <Container className={styles.formContainer}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="username">
            <Form.Label className="d-none">Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              name="username"
              value={username}
              onChange={handleChange}
              className={styles.input}
            />
          </Form.Group>
          {errors.username?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group controlId="password" className="mt-3">
            <Form.Label className="d-none">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={handleChange}
              className={styles.input}
            />
          </Form.Group>
          {errors.password?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          {errors.non_field_errors?.map((message, idx) => (
            <Alert key={idx} variant="warning" className="mt-3">
              {message}
            </Alert>
          ))}

          <Button variant="primary" type="submit" className={styles.submitButton}>
            Sign In
          </Button>
        </Form>

        <div className={styles.divider}>or</div>

        <p className={styles.signUpText}>
          Don&apos;t have an account?{' '}
          <Link to="/sign-up" className={styles.link}>
            Sign up here!
          </Link>
        </p>
      </Container>
    </div>
  );
}

// Define prop types for the SignInForm component
SignInForm.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
};

export default SignInForm;
