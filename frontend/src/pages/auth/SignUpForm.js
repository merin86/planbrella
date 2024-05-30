import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../../styles/SignUpForm.module.css';

function SignUpForm() {
  const [signUpData, setSignUpData] = useState({
    username: '',
    password1: '',
    password2: '',
  });
  const { username, password1, password2 } = signUpData;

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/dj-rest-auth/registration/', signUpData);
      navigate('/sign-in');
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <div>
      <h2 className={styles.header}>Sign Up</h2>
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

          <Form.Group controlId="password1" className="mt-3">
            <Form.Label className="d-none">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              name="password1"
              value={password1}
              onChange={handleChange}
              className={styles.input}
            />
          </Form.Group>
          {errors.password1?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group controlId="password2" className="mt-3">
            <Form.Label className="d-none">Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              name="password2"
              value={password2}
              onChange={handleChange}
              className={styles.input}
            />
          </Form.Group>
          {errors.password2?.map((message, idx) => (
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
            Sign Up
          </Button>
        </Form>

        <div className={styles.divider}>or</div>

        <p className={styles.signInText}>
          Already have an account?{' '}
          <Link to="/sign-in" className={styles.link}>
            Sign in here!
          </Link>
        </p>
      </Container>
    </div>
  );
}

export default SignUpForm;
