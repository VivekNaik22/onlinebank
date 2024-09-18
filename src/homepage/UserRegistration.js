import React, { useState } from 'react';

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    contactNo: '',
    age: '',
    gender: '',
    street: '',
    city: '',
    pincode: '',
    aadharCardNo: '', // Updated field name to "aadharCardNo"
  });
  const [error, setError] = useState('');

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

  const validateAadhar = (aadharCardNo) => {
    return /^\d{12}$/.test(aadharCardNo); // Aadhar Card number should be 12 digits
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword, contactNo, age, gender, street, city, pincode, aadharCardNo } = formData;

    if (!name || !email || !password || !confirmPassword || !contactNo || !age || !gender || !street || !city || !pincode || !aadharCardNo) {
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

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      alert('Passwords do not match.');
      return;
    }

    if (!validateAadhar(aadharCardNo)) {
      setError('Invalid Aadhar Card number.');
      alert('Invalid Aadhar Card number.');
      return;
    }

    setError('');
    alert('Registration successful!');
    // Perform registration action here
  };

  return (
    <div style={styles.container}>
      <h2>Customer Registration</h2>
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
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={styles.input}
          />
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
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div style={styles.inputGroup}>
          <label>Street:</label>
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
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
        <div style={styles.inputGroup}>
          <label>Aadhar Card No:</label>
          <input
            type="text"
            name="aadharCardNo"
            value={formData.aadharCardNo}
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
    maxWidth: '500px',
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

export default UserRegistration;
