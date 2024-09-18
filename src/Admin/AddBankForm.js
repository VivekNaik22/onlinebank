import React, { useState } from 'react';

const AddBankForm = () => {
  const [formData, setFormData] = useState({
    bankName: '',
    bankCode: '',
    bankManager: '',
    website: '',
    bankAddress: '',
    bankEmail: '',
    phoneNumber: '',
    country: '',
    currency: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Bank Registered Successfully!');
    console.log(formData);
    // Perform registration action here
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Add Bank</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.row}>
          <div style={styles.column}>
            <label style={styles.label}>Bank Name</label>
            <input 
              type="text" 
              name="bankName" 
              value={formData.bankName} 
              onChange={handleChange} 
              style={styles.input} 
              required
            />
          </div>
          <div style={styles.column}>
            <label style={styles.label}>Bank Code</label>
            <input 
              type="text" 
              name="bankCode" 
              value={formData.bankCode} 
              onChange={handleChange} 
              style={styles.input} 
              required
            />
          </div>
        </div>

        <div style={styles.row}>
          <div style={styles.column}>
            <label style={styles.label}>Bank Manager</label>
            <select 
              name="bankManager" 
              value={formData.bankManager} 
              onChange={handleChange} 
              style={styles.input} 
              required
            >
              <option value="">Select Bank Manager</option>
              {/* Add options for Bank Manager */}
              <option value="manager1">Manager 1</option>
              <option value="manager2">Manager 2</option>
            </select>
          </div>
          <div style={styles.column}>
            <label style={styles.label}>Website</label>
            <input 
              type="text" 
              name="website" 
              value={formData.website} 
              onChange={handleChange} 
              style={styles.input} 
            />
          </div>
        </div>

        <div style={styles.row}>
          <div style={styles.column}>
            <label style={styles.label}>Bank Address</label>
            <textarea 
              name="bankAddress" 
              value={formData.bankAddress} 
              onChange={handleChange} 
              style={styles.textarea} 
            />
          </div>
          <div style={styles.column}>
            <label style={styles.label}>Bank Email</label>
            <input 
              type="email" 
              name="bankEmail" 
              value={formData.bankEmail} 
              onChange={handleChange} 
              style={styles.input} 
              required
            />
          </div>
        </div>

        <div style={styles.row}>
          <div style={styles.column}>
            <label style={styles.label}>Phone Number</label>
            <input 
              type="text" 
              name="phoneNumber" 
              value={formData.phoneNumber} 
              onChange={handleChange} 
              style={styles.input} 
            />
          </div>
          <div style={styles.column}>
            <label style={styles.label}>Country</label>
            <input 
              type="text" 
              name="country" 
              value={formData.country} 
              onChange={handleChange} 
              style={styles.input} 
            />
          </div>
        </div>

        <div style={styles.row}>
          <div style={styles.column}>
            <label style={styles.label}>Currency</label>
            <input 
              type="text" 
              name="currency" 
              value={formData.currency} 
              onChange={handleChange} 
              style={styles.input} 
            />
          </div>
        </div>

        <button type="submit" style={styles.button}>Register Bank</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#F8F0E3',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    border: '1px solid #9C1A1C',
  },
  header: {
    textAlign: 'center',
    color: '#9C1A1C',
    marginBottom: '20px',
    fontSize: '24px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
  },
  column: {
    flex: '0 0 48%',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#9C1A1C',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  textarea: {
    width: '100%',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '14px',
    height: '100px',
    resize: 'none',
  },
  button: {
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#9C1A1C',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '20px',
    width: '100%',
  }
};

export default AddBankForm;
