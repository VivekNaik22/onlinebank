import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './CustomerBankAccountDetail.css';  // Optional CSS for styling

const CustomerBankAccountDetail = () => {
  const [accountDetails, setAccountDetails] = useState({
    bankName: 'Demo Bank10',
    bankAccountNo: '1234567890',
    ifscCode: 'DEMO12345',
    customerName: 'Demo Customer10',
    customerContact: '9876543210',
    creationDate: '8/30/2023, 7:33:22 PM',
    availableBalance: 1000,
    accountStatus: 'Open',
    accountType: 'Savings', // Default account type
  });

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [error, setError] = useState('');

  const validateAndDownloadStatement = () => {
    // Check if both dates are filled in
    if (!startDate || !endDate) {
      setError('Both start and end dates are required');
      return;
    }

    // Check if the end date is later than the start date
    if (new Date(startDate) > new Date(endDate)) {
      setError('End date must be later than or equal to the start date');
      return;
    }

    // If validation passes, clear the error and generate the PDF
    setError('');
    generatePDF();
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    // Title and date range
    doc.text('Bank Statement', 20, 20);
    doc.text(`Statement Period: ${startDate} to ${endDate}`, 20, 30);

    // Add account details to the PDF
    const accountInfo = [
      ['Bank Name', accountDetails.bankName],
      ['Account No.', accountDetails.bankAccountNo],
      ['IFSC Code', accountDetails.ifscCode],
      ['Customer Name', accountDetails.customerName],
      ['Customer Contact', accountDetails.customerContact],
      ['Creation Date', accountDetails.creationDate],
      ['Available Balance', accountDetails.availableBalance],
      ['Account Status', accountDetails.accountStatus],
      ['Account Type', accountDetails.accountType],  // Add Account Type to PDF
    ];

    doc.autoTable({
      head: [['Detail', 'Information']],
      body: accountInfo,
      startY: 40,
    });

    // Simulate transactions in the given date range
    const transactions = [
      ['01/09/2023', 'Deposit', 1000],
      ['05/09/2023', 'Withdrawal', -500],
      ['10/09/2023', 'Deposit', 2000],
    ];

    // Add transactions table
    doc.autoTable({
      head: [['Date', 'Transaction Type', 'Amount']],
      body: transactions,
      startY: doc.autoTable.previous.finalY + 10,
    });

    // Download the PDF
    doc.save(`Bank_Statement_${startDate}_to_${endDate}.pdf`);
  };

  return (
    <div className="account-details-container">
      <h2>Customer Bank Account Detail</h2>

      <div className="form-group">
        <label htmlFor="bank">Bank</label>
        <input type="text" id="bank" value={accountDetails.bankName} readOnly />
      </div>

      <div className="form-group">
        <label htmlFor="bankAccountNo">Bank Account No.</label>
        <input type="text" id="bankAccountNo" value={accountDetails.bankAccountNo} readOnly />
      </div>

      <div className="form-group">
        <label htmlFor="ifscCode">IFSC Code</label>
        <input type="text" id="ifscCode" value={accountDetails.ifscCode} readOnly />
      </div>

      <div className="form-group">
        <label htmlFor="customerName">Customer</label>
        <input type="text" id="customerName" value={accountDetails.customerName} readOnly />
      </div>

      <div className="form-group">
        <label htmlFor="customerContact">Customer Contact</label>
        <input type="text" id="customerContact" value={accountDetails.customerContact} readOnly />
      </div>

      <div className="form-group">
        <label htmlFor="creationDate">Creation Date</label>
        <input type="text" id="creationDate" value={accountDetails.creationDate} readOnly />
      </div>

      <div className="form-group">
        <label htmlFor="availableBalance">Available Balance</label>
        <input type="text" id="availableBalance" value={accountDetails.availableBalance} readOnly />
      </div>

      <div className="form-group">
        <label htmlFor="accountStatus">Account Status</label>
        <input type="text" id="accountStatus" value={accountDetails.accountStatus} readOnly />
      </div>

      {/* Account Type Dropdown */}
      <div className="form-group">
        <label htmlFor="accountType">Account Type</label>
        <select
          id="accountType"
          value={accountDetails.accountType}
          onChange={(e) =>
            setAccountDetails({ ...accountDetails, accountType: e.target.value })
          }
          style={{ padding: '8px' }}
        >
          <option value="Savings">Savings</option>
          <option value="FD">Fixed Deposit (FD)</option>
          <option value="Current">Current Account</option>
        </select>
      </div>

      {/* Date selection inputs */}
      <div className="form-group">
        <label htmlFor="startDate">Select Start Date</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="endDate">Select End Date</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      {/* Error message */}
      {error && <p className="error-message">{error}</p>}

      <button className="download-statement-btn" onClick={validateAndDownloadStatement}>
        Download Statement
      </button>
    </div>
  );
};

export default CustomerBankAccountDetail;
