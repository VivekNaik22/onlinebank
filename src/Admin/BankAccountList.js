import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BankAccountList.css";

function BankAccountList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [accounts] = useState([
    {
      customerName: "DemoCust",
      bankName: "Demo Bank",
      accountNo: "****1234",
      ifscCode: "DEMO12345",
      accountType: "Saving",
      status: "Open",
    },
    {
      customerName: "DemoCust2",
      bankName: "Demo Bank",
      accountNo: "****5678",
      ifscCode: "DEMO12345",
      accountType: "Saving",
      status: "Open",
    },
    {
      customerName: "Sachin",
      bankName: "Demo Bank",
      accountNo: "****9101",
      ifscCode: "DEMO12345",
      accountType: "Saving",
      status: "Open",
    },
    {
      customerName: "Lokesh",
      bankName: "Demo Bank",
      accountNo: "****1121",
      ifscCode: "DEMO12345",
      accountType: "Current",
      status: "Open",
    },
    {
      customerName: "Rahul",
      bankName: "India Bank",
      accountNo: "****3141",
      ifscCode: "INDIA12345",
      accountType: "Saving",
      status: "Open",
    },
  ]);

  // Function to handle search query
  const filteredAccounts = accounts.filter((account) => {
    return (
      account.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      account.accountNo.includes(searchQuery)
    );
  });

  return (
    <div className="container">
      <header className="header">
        <h1>All Bank Accounts</h1>
      </header>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by account number or customer name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button>Search</button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Bank Name</th>
              <th>Account No.</th>
              <th>IFSC Code</th>
              <th>Account Type</th>
              <th>Complete Detail</th>
              <th>Status</th>
              <th>Statement</th>
            </tr>
          </thead>
          <tbody>
            {filteredAccounts.map((account, index) => (
              <tr key={index}>
                <td>{account.customerName}</td>
                <td>{account.bankName}</td>
                <td>{account.accountNo}</td>
                <td>{account.ifscCode}</td>
                <td>{account.accountType}</td>
                <td>
                <Link to={`/account-details/${account.accountNo}`} className="view-detail">
                 View Detail
                </Link>
                </td>
                <td>{account.status}</td>
                <td>
                  <a href="#" className="view-statement">
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BankAccountList;
