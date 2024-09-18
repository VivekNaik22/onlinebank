import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//bank manager reg
const RegisterBankManager = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [age, setAge] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Valid email is required';
      isValid = false;
    }

    if (!password.trim() || password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    if (!gender) {
      newErrors.gender = 'Gender is required';
      isValid = false;
    }

    if (!contactNo.trim() || !/^\d{10}$/.test(contactNo)) {
      newErrors.contactNo = 'Valid 10-digit contact number is required';
      isValid = false;
    }

    if (!age.trim() || isNaN(age) || age <= 0) {
      newErrors.age = 'Valid age is required';
      isValid = false;
    }

    if (!street.trim()) {
      newErrors.street = 'Street is required';
      isValid = false;
    }

    if (!city.trim()) {
      newErrors.city = 'City is required';
      isValid = false;
    }

    if (!pincode.trim() || !/^\d{6}$/.test(pincode)) {
      newErrors.pincode = 'Valid 6-digit pincode is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      alert('Registration successful!');
      // After successful registration, navigate to the Add Bank form
      navigate('/add-bank');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Register Bank Manager</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputRow}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
            />
            {errors.name && <span style={styles.error}>{errors.name}</span>}
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Id</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
            {errors.email && <span style={styles.error}>{errors.email}</span>}
          </div>
        </div>
        <div style={styles.inputRow}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
            {errors.password && <span style={styles.error}>{errors.password}</span>}
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>User Gender</label>
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
            {errors.gender && <span style={styles.error}>{errors.gender}</span>}
          </div>
        </div>
        <div style={styles.inputRow}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Contact No</label>
            <input
              type="text"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
              style={styles.input}
            />
            {errors.contactNo && <span style={styles.error}>{errors.contactNo}</span>}
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Age</label>
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              style={styles.input}
            />
            {errors.age && <span style={styles.error}>{errors.age}</span>}
          </div>
        </div>
        <div style={styles.inputRow}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Street</label>
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              style={styles.input}
            />
            {errors.street && <span style={styles.error}>{errors.street}</span>}
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              style={styles.input}
            />
            {errors.city && <span style={styles.error}>{errors.city}</span>}
          </div>
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Pincode</label>
          <input
            type="text"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            style={styles.input}
          />
          {errors.pincode && <span style={styles.error}>{errors.pincode}</span>}
        </div>
        <button type="submit" style={styles.button}>Register Bank Manager</button>
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
  header: {
    backgroundColor: '#9C1A1C',
    color: 'white',
    padding: '10px',
    borderRadius: '10px',
    marginBottom: '20px',
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
    width: '150px',
    margin: '0 auto',
  },
  error: {
    color: 'red',
    fontSize: '14px',
    marginTop: '5px',
    display: 'block',
  },
};

export default RegisterBankManager;
