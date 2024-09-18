import React, { useState } from 'react';
import './ForgotPassword.css'; // Assuming you want to style this page as well

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call your API to send a password reset email
    // For now, we just simulate this with a simple message
    if (email) {
      setMessage(`If an account with ${email} exists, a password reset link has been sent.`);
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Send Reset Link</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default ForgotPassword;
