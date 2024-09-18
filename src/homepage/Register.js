import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [gender, setGender] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [age, setAge] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !password || !gender || !contactNo || !age || !street || !city || !pincode) {
      setError('All fields are required.');
      alert('All fields are required.');
      return;
    }

    if (!validateEmail(email)) {
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
    alert('Registration successful!');
    // Perform registration action here

    // Navigate to the login page
    navigate('/Login');
  };

  return (
    <div style={styles.container}>
      <h2>Admin Register</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputRow}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Id:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
          </div>
        </div>
        <div style={styles.inputRow}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password:</label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>User Gender:</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              style={styles.input}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div style={styles.inputRow}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Contact No:</label>
            <input
              type="text"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Age:</label>
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              style={styles.input}
            />
          </div>
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Street:</label>
          <textarea
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            style={{ ...styles.input, width: '100%' }}
          />
        </div>
        <div style={styles.inputRow}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>City:</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Pincode:</label>
            <input
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              style={styles.input}
            />
          </div>
        </div>
        <div style={styles.showPasswordContainer}>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
            id="showPassword"
          />
          <label htmlFor="showPassword" style={styles.showPasswordLabel}>
            Show Password
          </label>
        </div>
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>Register User</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '30px',
    borderRadius: '10px',
    backgroundColor: '#FDF1DC',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    border: '2px solid #9C1A1C',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputRow: {
    display: 'flex',
    gap: '20px',
  },
  inputGroup: {
    flex: 1,
  },
  input: {
    width: '90%',
    padding: '12px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '16px',
  },
  button: {
    padding: '12px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#9C1A1C',
    color: 'white',
    cursor: 'pointer',
    fontSize: '18px',
  },
  showPasswordContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: '15px',
  },
  showPasswordLabel: {
    marginLeft: '10px',
    fontSize: '16px',
  },
  error: {
    color: 'red',
    marginBottom: '15px',
  },
};

export default Register;
