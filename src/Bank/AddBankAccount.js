import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import './AddBankAccount.css'; // Assuming CSS for styling

const AddBankAccount = () => {
  const location = useLocation(); // Get location state
  const customer = location.state?.customer || {}; // Fallback if state is not provided
  const navigate = useNavigate(); // Initialize useNavigate

  const [formData, setFormData] = useState({
    bankName: 'Demo Bank',
    bankCode: 'DEMO10',
    customerName: customer.name || '',
    customerEmail: customer.email || '',
    customerContact: customer.contactNo || '',
    accountNumber: '',
    ifscCode: '',
    accountType: ''
  });

  const [errors, setErrors] = useState({});

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const contactRegex = /^[0-9]{10}$/;
    const accountNumberRegex = /^[0-9]{9,18}$/;
    const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;

    // Email validation
    if (!formData.customerEmail || !emailRegex.test(formData.customerEmail)) {
      newErrors.customerEmail = 'Please enter a valid email address.';
    }

    // Contact number validation
    if (!formData.customerContact || !contactRegex.test(formData.customerContact)) {
      newErrors.customerContact = 'Please enter a valid 10-digit contact number.';
    }

    // Account number validation
    if (!formData.accountNumber || !accountNumberRegex.test(formData.accountNumber)) {
      newErrors.accountNumber = 'Please enter a valid account number (9 to 18 digits).';
    }

    // IFSC Code validation
    if (!formData.ifscCode || !ifscRegex.test(formData.ifscCode)) {
      newErrors.ifscCode = 'Please enter a valid IFSC code.';
    }

    // Account type validation
    if (!formData.accountType) {
      newErrors.accountType = 'Please select an account type.';
    }

    setErrors(newErrors);

    // Returns true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Data:', formData);
      // Navigate to the BankAccountDetails page after successful form submission
      navigate(`/account-acdetails/${customer.name}`);
    } else {
      console.log('Form has errors.');
    }
  };

  return (
    <div className="add-bank-account-container">
      <h2>Add Bank Account for {formData.customerName}</h2>
      <form onSubmit={handleSubmit}>

        {/* Bank Name Field */}
        <div className="form-group">
          <label>Bank Name</label>
          <input
            type="text"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            disabled
          />
        </div>

        {/* Bank Code Field */}
        <div className="form-group">
          <label>Bank Code</label>
          <input
            type="text"
            name="bankCode"
            value={formData.bankCode}
            onChange={handleChange}
            disabled
          />
        </div>

        {/* Customer Name Field */}
        <div className="form-group">
          <label>Customer Name</label>
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            disabled
          />
        </div>

        {/* Customer Email Field */}
        <div className="form-group">
          <label>Customer Email</label>
          <input
            type="email"
            name="customerEmail"
            value={formData.customerEmail}
            onChange={handleChange}
            className={errors.customerEmail ? 'error-input' : ''}
          />
          {errors.customerEmail && <span className="error-message">{errors.customerEmail}</span>}
        </div>

        {/* Customer Contact Field */}
        <div className="form-group">
          <label>Customer Contact</label>
          <input
            type="text"
            name="customerContact"
            value={formData.customerContact}
            onChange={handleChange}
            className={errors.customerContact ? 'error-input' : ''}
          />
          {errors.customerContact && <span className="error-message">{errors.customerContact}</span>}
        </div>

        {/* Account Number Field */}
        <div className="form-group">
          <label>Account Number</label>
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            className={errors.accountNumber ? 'error-input' : ''}
          />
          {errors.accountNumber && <span className="error-message">{errors.accountNumber}</span>}
        </div>

        {/* IFSC Code Field */}
        <div className="form-group">
          <label>IFSC Code</label>
          <input
            type="text"
            name="ifscCode"
            value={formData.ifscCode}
            onChange={handleChange}
            className={errors.ifscCode ? 'error-input' : ''}
          />
          {errors.ifscCode && <span className="error-message">{errors.ifscCode}</span>}
        </div>

        {/* Account Type Field */}
        <div className="form-group">
          <label>Account Type</label>
          <select
            name="accountType"
            value={formData.accountType}
            onChange={handleChange}
            className={errors.accountType ? 'error-input' : ''}
          >
            <option value="">Select Account Type</option>
            <option value="Savings">Savings</option>
            <option value="Current">Current</option>
            <option value="Fixed Deposite">Fixed Deposite</option>
          </select>
          {errors.accountType && <span className="error-message">{errors.accountType}</span>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">Add Account</button>
      </form>
    </div>
  );
};

export default AddBankAccount;
