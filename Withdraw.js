import React, { useState } from 'react';


function Withdraw({ onWithdraw }) {
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleWithdraw = () => {
    if (accountNumber && amount) {
      const parsedAmount = parseFloat(amount);
      if (parsedAmount > 0) {
        onWithdraw(accountNumber, parsedAmount);
        setAccountNumber('');
        setAmount('');
        setShowForm(false); // Hide form after withdrawal
      } else {
        alert('Amount must be greater than zero!');
      }
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
    <div className="withdraw-container">
      {!showForm ? (
        <button
          className="btn btn-withdraw"
          onClick={() => setShowForm(true)}
        >
          Withdraw
        </button>
      ) : (
        <div className="card withdraw-form">
          <h3>Withdraw Form</h3>
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
          <button className="btn btn-primary me-2" onClick={handleWithdraw}>
            Withdraw
          </button>
          <button className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default Withdraw;
