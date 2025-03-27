import React, { useState } from 'react';
import './login.css'; // Import CSS for styling
import login_logo from "../assets/logo/logo.png";
import {Link} from "react-router-dom";
import Homepage from "./homePage";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    // Reset error message
    setErrorMessage('');
    alert('Login successful!');
  };

  return (
    <>
    <Link to="/">
    <img src={login_logo} className="logologin"/></Link>
    <div className="hiscope_hydra-main-container">
    <div className="login-container">
      <header className="login-header">
        <h1> Hiscope Hydra Naturals water</h1>
        <p>Your go-to source for premium water bottles</p>
      </header>

      <section className="login-form-section">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button type="submit" className="submit-btn">Submit</button>
        </form>

        <div className="forgot-password">
          <a href="/forgot-password">Forgot your password?</a>
        </div>
      </section>
    </div>
    </div>
    </>
  );
};

export default Login;
