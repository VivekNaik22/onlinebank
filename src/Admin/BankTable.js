import React from 'react';
import './BankTable.css'; // Include the CSS file for styling

const BankTable = () => {
    // Hardcoded data for testing purposes
    const banks = [
       
        {
            bankName: "India Bank",
            bankCode: "INDB",
            address: "Mumbai Delhi",
            phoneNumber: "1234567890",
            email: "indiabank@gmail.com",
            website: "https://indiabank.com",
            country: "India",
            currency: "INR"
        }
        
    ];

    return (
        <div className="bank-table-container">
            <h1>view Bank</h1>
            <table className="bank-table">
                <thead>
                    <tr>
                        <th>Bank</th>
                        <th>Bank Code</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Country</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody>
                    {banks.map((bank, index) => (
                        <tr key={index}>
                            <td>{bank.bankName}</td>
                            <td>{bank.bankCode}</td>
                            <td>{bank.address}</td>
                            <td>{bank.phoneNumber}</td>
                            <td>{bank.email}</td>
                            <td><a href={bank.website} target="_blank" rel="noopener noreferrer">{bank.website}</a></td>
                            <td>{bank.country}</td>
                            <td>{bank.currency}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BankTable;
