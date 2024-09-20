import React, { useState } from 'react';
import './TransferMoney.css'; // Styling

const TransferMoney = () => {
  // States to manage form input values
  const [accountNumber, setAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [amount, setAmount] = useState('');
  const [purpose, setPurpose] = useState('');
  const [accountType, setAccountType] = useState('Savings'); // Default account type
  const [errorMessage, setErrorMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Validation function
  const validateForm = () => {
    if (!accountNumber || !ifscCode || !amount || !purpose || !accountType) {
      setErrorMessage('All fields are required.');
      return false;
    }
    if (accountNumber.length < 10 || isNaN(accountNumber)) {
      setErrorMessage('Account Number must be at least 10 digits.');
      return false;
    }
    if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifscCode)) {
      setErrorMessage('Invalid IFSC code format.');
      return false;
    }
    if (isNaN(amount) || amount <= 0) {
      setErrorMessage('Amount must be a positive number.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  // Handle Transfer
  const handleTransfer = () => {
    if (validateForm()) {
      setIsModalOpen(true); // Open modal on successful validation
    }
  };

  return (
    <div className="transfer-container">
      <h2 className="transfer-title">Transfer Money</h2>

      <div className="transfer-form">
        {/* Account Number Field */}
        <div className="form-group">
          <label htmlFor="accountNumber">Account Number</label>
          <input
            type="text"
            id="accountNumber"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            placeholder="Enter account number"
          />
        </div>

        {/* IFSC Code Field */}
        <div className="form-group">
          <label htmlFor="ifscCode">IFSC Code</label>
          <input
            type="text"
            id="ifscCode"
            value={ifscCode}
            onChange={(e) => setIfscCode(e.target.value)}
            placeholder="Enter IFSC code"
          />
        </div>

        {/* Amount Field */}
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>

        {/* Account Type Dropdown */}
        <div className="form-group">
          <label htmlFor="accountType">Account Type</label>
          <select
            id="accountType"
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
          >
            <option value="Savings">Savings</option>
            <option value="FD">Fixed Deposit (FD)</option>
            <option value="Current">Current Account</option>
          </select>
        </div>

        {/* Purpose Field */}
        <div className="form-group">
          <label htmlFor="purpose">Purpose</label>
          <textarea
            id="purpose"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            placeholder="Reason for transfer..."
          ></textarea>
        </div>

        {/* Error Message */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {/* Transfer Button */}
        <button className="transfer-btn" onClick={handleTransfer}>
          Transfer
        </button>
      </div>

      {/* Modal for successful transfer */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Transfer Successful</h3>
            <p>
              You have successfully transferred {amount} to account{' '}
              {accountNumber} for the purpose of "{purpose}". The transfer was
              made from your {accountType} account.
            </p>
            <button
              className="modal-close-btn"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransferMoney;
