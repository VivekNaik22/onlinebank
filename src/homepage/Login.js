import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [customerId, setCustomerId] = useState(''); // State for customer ID
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!role) {
      setError('Please select a role.');
      alert('Please select a role.');
      return;
    }

    if (!password) {
      setError('Password is required.');
      alert('Password is required.');
      return;
    }

    // Validate customer ID when role is customer
    if (role === 'customer' && !customerId) {
      setError('Customer ID is required for customers.');
      alert('Customer ID is required for customers.');
      return;
    }

    // Validate email for admin and bankManager roles
    if ((role === 'admin' || role === 'bankManager') && !validateEmail(email)) {
      setError('Invalid email format.');
      alert('Invalid email format.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      alert('Password must be at least 6 characters long.');
      return;
    }

    setError('');
    alert('Login successful!');

    // Redirect based on role
    if (role === 'admin') {
      navigate('/admin-home');
    } else if (role === 'bankManager') {
      navigate('/bank-homepage');
    } else if (role === 'customer') {
      navigate('/user-homepage');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const getRegisterLink = () => {
    switch (role) {
      case 'admin':
        return '/register-admin'; 
      case 'customer':
        return '/register-user'; 
      case 'bankManager':
        return '/register-bank-manager'; 
      default:
        return '#'; 
    }
  };

  return (
    <div style={styles.container}>
      <h2>User Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>User Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={styles.input}
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="customer">Customer</option>
            <option value="bankManager">Bank Manager</option>
          </select>
        </div>

        {/* Conditionally render Customer ID if role is customer */}
        {role === 'customer' && (
          <div style={styles.inputGroup}>
            <label>Customer ID:</label>
            <input
              type="number"
              value={customerId}
              onChange={(e) => setCustomerId(e.target.value)}
              style={styles.input}
              placeholder="Enter your Customer ID"
              min="1" // Ensures the number is positive
            />
          </div>
        )}

        {/* Conditionally render Email ID if role is not customer */}
        {(role === 'admin' || role === 'bankManager') && (
          <div style={styles.inputGroup}>
            <label>Email ID:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              placeholder="Enter your email"
            />
          </div>
        )}

        {/* Password field is shown for all roles */}
        <div style={styles.inputGroup}>
          <label>Password:</label>
          <div style={styles.passwordContainer}>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.passwordInput}
              placeholder="Enter your password"
            />
            <button 
              type="button" 
              onClick={togglePasswordVisibility} 
              style={styles.showPasswordButton}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>Login</button>
        <p style={styles.registerLink}>
          Don't have an account? <Link to={getRegisterLink()}>Register here</Link>
        </p>
        <p style={styles.forgotPasswordLink}>
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '450px',
    margin: '50px auto',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#F8F0E3',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    border: '1px solid #9C1A1C',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    width: 'calc(100% - 24px)', // Adjusted width calculation for proper alignment
    padding: '12px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  passwordContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  passwordInput: {
    width: 'calc(100% - 60px)',
    padding: '12px',
    borderRadius: '5px 0 0 5px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  showPasswordButton: {
    width: '60px',
    padding: '12px',
    backgroundColor: '#9C1A1C',
    color: 'white',
    border: 'none',
    borderRadius: '0 5px 5px 0',
    cursor: 'pointer',
    fontSize: '14px',
  },
  button: {
    padding: '12px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#9C1A1C',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
  },
  error: {
    color: 'red',
    marginBottom: '15px',
  },
  registerLink: {
    marginTop: '10px',
  },
  forgotPasswordLink: {
    marginTop: '10px',
  },
};

export default Login;
