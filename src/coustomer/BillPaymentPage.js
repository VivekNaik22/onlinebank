import React, { useState } from 'react';

function BillPaymentPage() {
  const [selectedBill, setSelectedBill] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountId, setAccountId] = useState('');
  const [amount, setAmount] = useState('');
  const [electricityProvider, setElectricityProvider] = useState('');
  const [simProvider, setSimProvider] = useState('');
  const [tvProvider, setTvProvider] = useState('');
  const [processing, setProcessing] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');

  const [errors, setErrors] = useState({});

  const electricityProviders = {
    Karnataka: ['BESCOM', 'HESCOM', 'MESCOM'],
    Maharashtra: ['MSEB', 'BEST', 'Tata Power'],
    Gujarat: ['PGVCL', 'UGVCL', 'MGVCL'],
  };

  const simPlans = {
    Airtel: [100, 200, 300],
    Jio: [150, 250, 350],
    Vodafone: [120, 220, 320],
    BSNL: [130, 230, 330],
  };

  const tvPlans = {
    Videocon: [200, 400, 600],
    'Airtel Xstream': [250, 500, 750],
    'Tata Play': [300, 600, 900],
  };

  const validateForm = () => {
    let formErrors = {};
    if (selectedBill === 'Electricity') {
      if (!electricityProvider) {
        formErrors.electricityProvider = 'Please select an electricity provider.';
      }
      if (!accountNumber) {
        formErrors.accountNumber = 'Account number is required.';
      }
      if (!accountId) {
        formErrors.accountId = 'Account ID is required.';
      }
      if (!amount || amount <= 0) {
        formErrors.amount = 'Please enter a valid amount.';
      }
    }

    if (selectedBill === 'MobileRecharge') {
      if (!simProvider) {
        formErrors.simProvider = 'Please select a SIM provider.';
      }
      if (!selectedPlan) {
        formErrors.selectedPlan = 'Please select a recharge plan.';
      }
      if (!amount || amount <= 0) {
        formErrors.amount = 'Please enter a valid amount.';
      }
    }

    if (selectedBill === 'TVRecharge') {
      if (!tvProvider) {
        formErrors.tvProvider = 'Please select a TV provider.';
      }
      if (!selectedPlan) {
        formErrors.selectedPlan = 'Please select a recharge plan.';
      }
      if (!amount || amount <= 0) {
        formErrors.amount = 'Please enter a valid amount.';
      }
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    setProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      setMessage(`Payment of ₹${amount} for ${selectedBill} was successful.`);
      // Reset form fields
      setAccountNumber('');
      setAccountId('');
      setAmount('');
      setElectricityProvider('');
      setSimProvider('');
      setTvProvider('');
      setSelectedPlan('');
    }, 2000); // Simulate a delay
  };

  return (
    <div style={styles.container}>
      <h2>Bill Payment</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Select Bill Type:</label>
          <select
            value={selectedBill}
            onChange={(e) => {
              setSelectedBill(e.target.value);
              setSimProvider('');
              setTvProvider('');
              setAmount('');
              setSelectedPlan('');
              setErrors({});
            }}
            style={styles.input}
            required
          >
            <option value="">Select Bill Type</option>
            <option value="Electricity">Electricity Bill</option>
            <option value="MobileRecharge">Mobile Recharge</option>
            <option value="TVRecharge">TV Recharge</option>
          </select>
        </div>

        {/* Electricity Bill */}
        {selectedBill === 'Electricity' && (
          <>
            <div style={styles.inputGroup}>
              <label>Select State Provider:</label>
              <select
                value={electricityProvider}
                onChange={(e) => setElectricityProvider(e.target.value)}
                style={styles.input}
                required
              >
                <option value="">Select State Provider</option>
                <option value="BESCOM">BESCOM (Bangalore Electricity)</option>
                <option value="HESCOM">HESCOM (Hubli Electricity)</option>
                <option value="MESCOM">MESCOM (Mangalore Electricity)</option>
              </select>
              {errors.electricityProvider && <p style={styles.error}>{errors.electricityProvider}</p>}
            </div>

            <div style={styles.inputGroup}>
              <label>Account Number:</label>
              <input
                type="text"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                style={styles.input}
                placeholder="Enter account number"
                required
              />
              {errors.accountNumber && <p style={styles.error}>{errors.accountNumber}</p>}
            </div>

            <div style={styles.inputGroup}>
              <label>Account ID:</label>
              <input
                type="text"
                value={accountId}
                onChange={(e) => setAccountId(e.target.value)}
                style={styles.input}
                placeholder="Enter account ID"
                required
              />
              {errors.accountId && <p style={styles.error}>{errors.accountId}</p>}
            </div>

            <div style={styles.inputGroup}>
              <label>Amount:</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                style={styles.input}
                placeholder="Enter amount"
                min="1"
                required
              />
              {errors.amount && <p style={styles.error}>{errors.amount}</p>}
            </div>
          </>
        )}

        {/* Mobile Recharge */}
        {selectedBill === 'MobileRecharge' && (
          <>
            <div style={styles.inputGroup}>
              <label>SIM Provider:</label>
              <select
                value={simProvider}
                onChange={(e) => {
                  setSimProvider(e.target.value);
                  setSelectedPlan(''); // Reset plan selection when provider changes
                  setErrors({});
                }}
                style={styles.input}
                required
              >
                <option value="">Select SIM Provider</option>
                <option value="Airtel">Airtel</option>
                <option value="Jio">Jio</option>
                <option value="Vodafone">Vodafone</option>
                <option value="BSNL">BSNL</option>
              </select>
              {errors.simProvider && <p style={styles.error}>{errors.simProvider}</p>}
            </div>

            {simProvider && (
              <div style={styles.inputGroup}>
                <label>Select Recharge Plan:</label>
                <select
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  style={styles.input}
                  required
                >
                  <option value="">Select Plan</option>
                  {simPlans[simProvider]?.map((plan, index) => (
                    <option key={index} value={plan}>
                      ₹{plan}
                    </option>
                  ))}
                </select>
                {errors.selectedPlan && <p style={styles.error}>{errors.selectedPlan}</p>}
              </div>
            )}
          </>
        )}

        {/* TV Recharge */}
        {selectedBill === 'TVRecharge' && (
          <>
            <div style={styles.inputGroup}>
              <label>TV Provider:</label>
              <select
                value={tvProvider}
                onChange={(e) => {
                  setTvProvider(e.target.value);
                  setSelectedPlan(''); // Reset plan selection when provider changes
                  setErrors({});
                }}
                style={styles.input}
                required
              >
                <option value="">Select TV Provider</option>
                <option value="Videocon">Videocon</option>
                <option value="Airtel Xstream">Airtel Xstream</option>
                <option value="Tata Play">Tata Play</option>
              </select>
              {errors.tvProvider && <p style={styles.error}>{errors.tvProvider}</p>}
            </div>

            {tvProvider && (
              <div style={styles.inputGroup}>
                <label>Select Recharge Plan:</label>
                <select
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  style={styles.input}
                  required
                >
                  <option value="">Select Plan</option>
                  {tvPlans[tvProvider]?.map((plan, index) => (
                    <option key={index} value={plan}>
                      ₹{plan}
                    </option>
                  ))}
                </select>
                {errors.selectedPlan && <p style={styles.error}>{errors.selectedPlan}</p>}
              </div>
            )}
          </>
        )}

        {/* Only show amount field if bill type is selected */}
        {(selectedBill === 'MobileRecharge' || selectedBill === 'TVRecharge') && (
          <div style={styles.inputGroup}>
            <label>Amount:</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={styles.input}
              placeholder="Enter amount"
              min="1"
              required
            />
            {errors.amount && <p style={styles.error}>{errors.amount}</p>}
          </div>
        )}

        <button type="submit" style={styles.button} disabled={processing}>
          {processing ? 'Processing...' : 'Pay Now'}
        </button>

        {message && <p style={styles.message}>{message}</p>}
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#F8F0E3',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '12px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  button: {
    padding: '12px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#9C1A1C',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
  },
  message: {
    color: 'green',
    marginTop: '10px',
  },
  error: {
    color: 'red',
    fontSize: '12px',
  },
};

export default BillPaymentPage;
