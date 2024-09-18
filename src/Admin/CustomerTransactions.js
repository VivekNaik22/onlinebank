import React, { useState } from "react";
import "./ustomerTransactions.css";

function CustomerTransactions() {
  const [searchQuery, setSearchQuery] = useState("");
  const [transactions] = useState([
    {
      transactionId: "12d284bb4fc4446ac",
      sourceBank: "India Bank",
      customerName: "rahul",
      sourceAccount: "****9780",
      transactionType: "Deposit",
      amount: 499,
      recipientBank: "--",
      recipientAccount: "--",
      narration: "Bank Cash Deposit",
      transactionTime: "8/26/2023, 7:24:53 PM",
    },
    {
      transactionId: "7f08732e4d94402e",
      sourceBank: "Demo Bank",
      customerName: "DemoCust",
      sourceAccount: "****1012",
      transactionType: "Account Transfer",
      amount: 501,
      recipientBank: "India Bank",
      recipientAccount: "****9580",
      narration: "gift for my friend",
      transactionTime: "8/25/2023, 2:06:05 AM",
    },
    {
      transactionId: "06e15ff989dc4161",
      sourceBank: "Demo Bank",
      customerName: "DemoCust",
      sourceAccount: "****1012",
      transactionType: "Account Transfer",
      amount: 3000,
      recipientBank: "Demo Bank",
      recipientAccount: "****78123",
      narration: "Family Support",
      transactionTime: "8/25/2023, 1:51:29 AM",
    },
    // Add more transactions as needed
  ]);

  const filteredTransactions = transactions.filter((transaction) => {
    return (
      transaction.transactionId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.sourceAccount.includes(searchQuery)
    );
  });

  return (
    <div className="container">
      <header className="header">
        <h1>All Customer Transactions</h1>
      </header>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by transaction ID, customer name, or source account..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button>Search</button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Transaction Id</th>
              <th>Source Bank</th>
              <th>Customer Name</th>
              <th>Source Account</th>
              <th>Transaction Type</th>
              <th>Amount</th>
              <th>Recipient Bank</th>
              <th>Recipient Account</th>
              <th>Narration</th>
              <th>Transaction Time</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.transactionId}</td>
                <td>{transaction.sourceBank}</td>
                <td>{transaction.customerName}</td>
                <td>{transaction.sourceAccount}</td>
                <td>{transaction.transactionType}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.recipientBank}</td>
                <td>{transaction.recipientAccount}</td>
                <td>{transaction.narration}</td>
                <td>{transaction.transactionTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerTransactions;
