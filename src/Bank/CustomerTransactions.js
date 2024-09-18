import React from 'react';
import './CustomerTransactions.css'; // Create the CSS file for styling

const CustomerTransactions = () => {
  // Static data to simulate the transactions
  const transactions = [
    {
      transactionId: '7c84767a6fed483d',
      sourceBank: 'Demo Bank10',
      customerName: 'Demo Customer10',
      sourceAccount: 'XXXXXXX1',
      transactionType: 'Deposit',
      amount: '1000',
      recipientBank: '',
      recipientAccount: '---',
      narration: 'Bank Cash Deposit',
      transactionTime: '8/30/2023, 7:35:14 PM',
    },
    // Add more transactions here if needed
  ];

  return (
    <div className="customer-transactions">
      <header>
        <h1>Customer Transactions</h1>
      </header>
      <table className="transactions-table">
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
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.transactionId}</td>
              <td>{transaction.sourceBank}</td>
              <td>{transaction.customerName}</td>
              <td>{transaction.sourceAccount}</td>
              <td>{transaction.transactionType}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.recipientBank || '---'}</td>
              <td>{transaction.recipientAccount}</td>
              <td>{transaction.narration}</td>
              <td>{transaction.transactionTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTransactions;
