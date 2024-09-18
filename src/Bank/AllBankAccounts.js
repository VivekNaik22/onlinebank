import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './AllBankAccounts.css';

const AllBankAccounts = () => {
  const initialAccounts = [
    {
      customerName: 'Demo Customer10',
      bankName: 'Demo Bank10',
      accountNo: '11111000',
      ifscCode: '123',
      accountType: 'Saving',
      status: 'Open',
    },
    {
      customerName: 'Demo Customer20',
      bankName: 'Demo Bank20',
      accountNo: '22222000',
      ifscCode: '456',
      accountType: 'Checking',
      status: 'Open',
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [accounts, setAccounts] = useState(initialAccounts);
  const [filteredAccounts, setFilteredAccounts] = useState(initialAccounts);
  const [errors, setErrors] = useState({});

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery) {
      setErrors({ searchQuery: 'Account number is required' });
      setFilteredAccounts(initialAccounts);
    } else if (!initialAccounts.some(acc => acc.accountNo.includes(searchQuery))) {
      setErrors({ searchQuery: 'No account found with this number' });
      setFilteredAccounts([]);
    } else {
      setErrors({});
      setFilteredAccounts(initialAccounts.filter(acc => acc.accountNo.includes(searchQuery)));
    }
  };

  const handleLockAccount = (accountNo) => {
    const updatedAccounts = accounts.map(account =>
      account.accountNo === accountNo
        ? { ...account, status: account.status === 'Open' ? 'Locked' : 'Open' }
        : account
    );
    setAccounts(updatedAccounts);
    setFilteredAccounts(updatedAccounts);
    alert(`Account ${accountNo} has been ${updatedAccounts.find(acc => acc.accountNo === accountNo).status.toLowerCase()}.`);
  };

  return (
    <div className="all-bank-accounts">
      <h2>All Bank Accounts</h2>
      <form className="search-form" onSubmit={handleSearch}>
        <div className="form-group">
          <label>Account Number</label>
          <input
            type="text"
            placeholder="Enter account no..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`form-control ${errors.searchQuery ? 'is-invalid' : ''}`}
          />
          {errors.searchQuery && <div className="invalid-feedback">{errors.searchQuery}</div>}
        </div>
        <button type="submit" className="btn btn-primary">Search</button>
      </form>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Bank Name</th>
            <th>Account No.</th>
            <th>IFSC Code</th>
            <th>Account Type</th>
            <th>Status</th>
            <th>Complete Detail</th>
            <th>Action</th>
            <th>Statement</th>
          </tr>
        </thead>
        <tbody>
          {filteredAccounts.length > 0 ? filteredAccounts.map((account, index) => (
            <tr key={index}>
              <td>{account.customerName}</td>
              <td>{account.bankName}</td>
              <td>{account.accountNo}</td>
              <td>{account.ifscCode}</td>
              <td>{account.accountType}</td>
              <td>{account.status}</td>
              <td>
                <Link to="/account-details" className="btn btn-secondary">View Detail</Link>
              </td>
              <td>
                <button
                  className={`btn ${account.status === 'Open' ? 'btn-danger' : 'btn-success'}`}
                  onClick={() => handleLockAccount(account.accountNo)}
                >
                  {account.status === 'Open' ? 'Lock Account' : 'Unlock Account'}
                </button>
              </td>
              <td>
                <Link to="/account-transactions" className="btn btn-info">View</Link>
              </td>
            </tr>
          )) : <tr><td colSpan="9" style={{ textAlign: 'center' }}>No accounts found</td></tr>}
        </tbody>
      </table>
    </div>
  );
};

export default AllBankAccounts;
