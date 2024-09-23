import React, { useState } from 'react';
import axios from 'axios';

const BankManagerRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    dateOfBirth: '',
    contactNo: '',
    address: '',
    gender: '',
    pincode: '',
  });
  const [error, setError] = useState('');
  const signupURL = 'http://localhost:8080/api/auth/admin/signup';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateContactNo = (contactNo) => {
    return /^\d{10}$/.test(contactNo);
  };

  const validatePincode = (pincode) => {
    return /^\d{6}$/.test(pincode);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, contactNo, address, pincode, gender, dateOfBirth } = formData;

    if (!name || !email || !password || !contactNo || !address || !pincode || !gender || !dateOfBirth) {
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

    if (!validateContactNo(contactNo)) {
      setError('Contact number must be 10 digits.');
      alert('Contact number must be 10 digits.');
      return;
    }

    if (!validatePincode(pincode)) {
      setError('Pincode must be 6 digits.');
      alert('Pincode must be 6 digits.');
      return;
    }

    try {
      const response = await axios.post(signupURL, formData);
      const message = response.data.message;
      alert(message);
      setFormData({
        name: '',
        email: '',
        password: '',
        dateOfBirth: '',
        contactNo: '',
        address: '',
        gender: '',
        pincode: '',
      });
    } catch (error) {
      console.error('Error registering Bank Manager:', error);
      alert('Error registering Bank Manager. Please try again.');
    } finally {
      setError('');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Bank Manager Registration</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Email Id:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Gender:</label>
          <div style={styles.radioGroup}>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
              style={styles.radioButton}
            />
            <label>Male</label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
              style={styles.radioButton}
            />
            <label>Female</label>
          </div>
        </div>
        <div style={styles.inputGroup}>
          <label>Contact No:</label>
          <input
            type="text"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Pincode:</label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>Register</button>
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
  radioGroup: {
    display: 'flex',
    alignItems: 'center',
  },
  radioButton: {
    margin: '0 10px',
  },
  input: {
    width: 'calc(100% - 20px)',
    padding: '12px',
    borderRadius: '5px',
    border: '1px solid #ccc',
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
};

export default BankManagerRegistration;
