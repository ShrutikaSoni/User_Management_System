import React, { useState } from "react";
import "./LoginPage.css"; // Make sure to add your CSS styles in this file
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  // Simulated authentication function
  const authenticateUser = (email, password) => {
    // Replace this with your real API or database check
    const dummyUser = {
      email: "admin@example.com",
      password: "password123",
    };

    if (email === dummyUser.email && password === dummyUser.password) {
      return true; // Authentication successful
    }
    return false; // Authentication failed
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (authenticateUser(email, password)) {
      setErrorMessage(""); // Clear any existing error message
      navigate("/users"); // Redirect to the Users page after successful login
    } else {
      setErrorMessage("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="wrapper">
      <div className="title">Login Form</div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Email Address</label>
        </div>
        <div className="field">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Password</label>
        </div>

        <div className="checkbox">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <div className="pass-link">
          <a href="#">Forgot password?</a>
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="field">
        <Link to="/users" style={{ textDecoration: 'none', color: 'white' }}><button type='submit'>Login</button></Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

