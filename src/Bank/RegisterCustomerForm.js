import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Registeruser.css'; // Import your CSS file for styling

const RegisterCustomerForm = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: 'Male',
    contactNo: '',
    age: '',
    street: '',
    city: '',
    pincode: '',
    aadhaarCard: '',
    panCard: ''
  });

  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name) {
      newErrors.name = 'Name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = 'Name should contain only alphabets';
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is not valid';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password should be at least 6 characters long';
    }

    // Contact number validation
    if (!formData.contactNo) {
      newErrors.contactNo = 'Contact No is required';
    } else if (!/^\d{10}$/.test(formData.contactNo)) {
      newErrors.contactNo = 'Contact No should be 10 digits';
    }

    // Age validation
    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (isNaN(formData.age) || formData.age < 18) {
      newErrors.age = 'Age must be at least 18';
    }

    // Street validation
    if (!formData.street) {
      newErrors.street = 'Street is required';
    }

    // City validation
    if (!formData.city) {
      newErrors.city = 'City is required';
    }

    // Pincode validation
    if (!formData.pincode) {
      newErrors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = 'Pincode must be 6 digits';
    }

    // Aadhaar Card validation
    if (!formData.aadhaarCard) {
      newErrors.aadhaarCard = 'Aadhaar Card is required';
    } else if (!/^\d{12}$/.test(formData.aadhaarCard)) {
      newErrors.aadhaarCard = 'Aadhaar Card must be 12 digits';
    }

    // PAN Card validation
    if (!formData.panCard) {
      newErrors.panCard = 'PAN Card is required';
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panCard)) {
      newErrors.panCard = 'PAN Card must be in the format AAAAA9999A';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Simulate form submission (e.g., API call) and then navigate to AddBankAccount page
      console.log('Form submitted', formData);
      navigate('/add-bank-account', { state: { customer: formData } }); // Pass form data as state
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Register Customer</h2>

      {/* Name Field */}
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? 'error-input' : ''}
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>

      {/* Email Field */}
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'error-input' : ''}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>

      {/* Password Field */}
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={errors.password ? 'error-input' : ''}
        />
        {errors.password && <span className="error-message">{errors.password}</span>}
      </div>

      {/* Gender Field */}
      <div className="form-group">
        <label>Gender</label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      {/* Contact No Field */}
      <div className="form-group">
        <label>Contact No</label>
        <input
          type="text"
          name="contactNo"
          value={formData.contactNo}
          onChange={handleChange}
          className={errors.contactNo ? 'error-input' : ''}
        />
        {errors.contactNo && <span className="error-message">{errors.contactNo}</span>}
      </div>

      {/* Age Field */}
      <div className="form-group">
        <label>Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className={errors.age ? 'error-input' : ''}
        />
        {errors.age && <span className="error-message">{errors.age}</span>}
      </div>

      {/* Street Field */}
      <div className="form-group">
        <label>Street</label>
        <input
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
          className={errors.street ? 'error-input' : ''}
        />
        {errors.street && <span className="error-message">{errors.street}</span>}
      </div>

      {/* City Field */}
      <div className="form-group">
        <label>City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className={errors.city ? 'error-input' : ''}
        />
        {errors.city && <span className="error-message">{errors.city}</span>}
      </div>

      {/* Pincode Field */}
      <div className="form-group">
        <label>Pincode</label>
        <input
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          className={errors.pincode ? 'error-input' : ''}
        />
        {errors.pincode && <span className="error-message">{errors.pincode}</span>}
      </div>

      {/* Aadhaar Card Field */}
      <div className="form-group">
        <label>Aadhaar Card</label>
        <input
          type="text"
          name="aadhaarCard"
          value={formData.aadhaarCard}
          onChange={handleChange}
          className={errors.aadhaarCard ? 'error-input' : ''}
        />
        {errors.aadhaarCard && <span className="error-message">{errors.aadhaarCard}</span>}
      </div>

      {/* PAN Card Field */}
      <div className="form-group">
        <label>PAN Card</label>
        <input
          type="text"
          name="panCard"
          value={formData.panCard}
          onChange={handleChange}
          className={errors.panCard ? 'error-input' : ''}
        />
        {errors.panCard && <span className="error-message">{errors.panCard}</span>}
      </div>

      {/* Submit Button */}
      <button type="submit" className="submit-button">Register User</button>
    </form>
  );
};

export default RegisterCustomerForm;
