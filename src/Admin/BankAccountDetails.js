import React, { useState } from 'react';
import jsPDF from 'jspdf';
import './BankAccountDetails.css';

const BankAccountDetails = () => {
  const [accountDetails, setAccountDetails] = useState({
    bank: 'Demo Bank',
    bankAccountNo: '',
    ifscCode: 'Demo@123',
    customer: 'DemoCust',
    customerContact: '',
    creationDate: '8/11/2023, 9:17:59 PM',
    availableBalance: '',
    accountStatus: 'Open',
  });

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    
    if (!accountDetails.bankAccountNo) {
      newErrors.bankAccountNo = 'Bank Account Number is required.';
    } else if (!/^\d+$/.test(accountDetails.bankAccountNo)) {
      newErrors.bankAccountNo = 'Bank Account Number must be numeric.';
    }
    
    if (!accountDetails.customerContact) {
      newErrors.customerContact = 'Customer Contact is required.';
    } else if (!/^\d{10}$/.test(accountDetails.customerContact)) {
      newErrors.customerContact = 'Customer Contact must be a 10-digit number.';
    }
    
    if (!accountDetails.availableBalance) {
      newErrors.availableBalance = 'Available Balance is required.';
    } else if (isNaN(accountDetails.availableBalance) || Number(accountDetails.availableBalance) < 0) {
      newErrors.availableBalance = 'Available Balance must be a positive number.';
    }
    
    if (!startDate) {
      newErrors.startDate = 'Start Date is required.';
    }
    
    if (!endDate) {
      newErrors.endDate = 'End Date is required.';
    } else if (new Date(startDate) > new Date(endDate)) {
      newErrors.endDate = 'End Date cannot be before Start Date.';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleDownloadStatement = () => {
    if (!validate()) return;

    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text('Bank Account Statement', 105, 20, null, null, 'center');

    doc.text(`Bank: ${accountDetails.bank}`, 20, 30);
    doc.text(`Bank Account No: ${accountDetails.bankAccountNo}`, 20, 40);
    doc.text(`IFSC Code: ${accountDetails.ifscCode}`, 20, 50);
    doc.text(`Customer: ${accountDetails.customer}`, 20, 60);
    doc.text(`Customer Contact: ${accountDetails.customerContact}`, 20, 70);
    doc.text(`Creation Date: ${accountDetails.creationDate}`, 20, 80);
    doc.text(`Available Balance: ${accountDetails.availableBalance}`, 20, 90);
    doc.text(`Account Status: ${accountDetails.accountStatus}`, 20, 100);
    doc.text(`Statement Period: ${startDate} to ${endDate}`, 20, 110);

    // Example of adding transactions - replace with real data
    doc.text('Transactions:', 20, 120);
    doc.text('- [Transaction 1 details]', 30, 130);
    doc.text('- [Transaction 2 details]', 30, 140);
    doc.text('- [Transaction 3 details]', 30, 150);

    // Adjust the file name as needed
    doc.save(`Bank_Statement_${startDate}_to_${endDate}.pdf`);
  };

  return (
    <div className="account-details-container">
      <div className="header">Customer Bank Account Detail</div>
      <div className="form">
        <div className="form-group">
          <label>Bank</label>
          <input
            type="text"
            name="bank"
            value={accountDetails.bank}
            onChange={handleChange}
            disabled
          />
        </div>
        <div className="form-group">
          <label>Bank Account No.</label>
          <input
            type="text"
            name="bankAccountNo"
            value={accountDetails.bankAccountNo}
            onChange={handleChange}
          />
          {errors.bankAccountNo && <span className="error">{errors.bankAccountNo}</span>}
        </div>
        <div className="form-group">
          <label>IFSC Code</label>
          <input
            type="text"
            name="ifscCode"
            value={accountDetails.ifscCode}
            onChange={handleChange}
            disabled
          />
        </div>
        <div className="form-group">
          <label>Customer</label>
          <input
            type="text"
            name="customer"
            value={accountDetails.customer}
            onChange={handleChange}
            disabled
          />
        </div>
        <div className="form-group">
          <label>Customer Contact</label>
          <input
            type="text"
            name="customerContact"
            value={accountDetails.customerContact}
            onChange={handleChange}
          />
          {errors.customerContact && <span className="error">{errors.customerContact}</span>}
        </div>
        <div className="form-group">
          <label>Creation Date</label>
          <input
            type="text"
            name="creationDate"
            value={accountDetails.creationDate}
            onChange={handleChange}
            disabled
          />
        </div>
        <div className="form-group">
          <label>Available Balance</label>
          <input
            type="text"
            name="availableBalance"
            value={accountDetails.availableBalance}
            onChange={handleChange}
          />
          {errors.availableBalance && <span className="error">{errors.availableBalance}</span>}
        </div>
        <div className="form-group">
          <label>Account Status</label>
          <input
            type="text"
            name="accountStatus"
            value={accountDetails.accountStatus}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          {errors.startDate && <span className="error">{errors.startDate}</span>}
        </div>
        <div className="form-group">
          <label>End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          {errors.endDate && <span className="error">{errors.endDate}</span>}
        </div>
        <button onClick={handleDownloadStatement} className="download-button">
          Download Statement
        </button>
      </div>
    </div>
  );
};

export default BankAccountDetails;
