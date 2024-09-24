import React, { useState } from 'react';


function Deposit({ onDeposit }) {
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleDeposit = () => {
    if (accountNumber && amount) {
      onDeposit(accountNumber, amount);
      setAccountNumber('');
      setAmount('');
      setShowForm(false); // Hide form after deposit
    } else {
      alert('Please enter account number and amount!');
    }
  };

  const handleCancel = () => {
    setAccountNumber('');
    setAmount('');
    setShowForm(false); // Hide form when canceled
  };

  return (
    <div className="deposit-container">
      {!showForm ? (
        <button
          className="btn btn-deposit"
          onClick={() => setShowForm(true)}
        >
          Deposit
        </button>
      ) : (
        <div className="card deposit-form">
          <h3>Deposit Form</h3>
          <div className="mb-3">
            <label>Account Number</label>
            <input
              type="text"
              className="form-control"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              placeholder="Enter Account Number"
            />
          </div>
          <div className="mb-3">
            <label>Amount</label>
            <input
              type="number"
              className="form-control"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter Amount"
            />
          </div>
          <button className="btn btn-primary me-2" onClick={handleDeposit}>
            Deposit
          </button>
          <button className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default Deposit;
