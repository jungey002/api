import React, { useState } from 'react';

function ETransfer({ onETransfer, hasDeposit }) {
  const [fromAccount, setFromAccount] = useState('');
  const [toAccount, setToAccount] = useState('');
  const [amount, setAmount] = useState('');

  const handleETransferClick = () => {
    if (!fromAccount || !toAccount || !amount) {
      alert('Please fill out all fields!');
      return;
    }

    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      alert('Please enter a valid amount!');
      return;
    }

    // Perform the e-transfer
    onETransfer(fromAccount, toAccount, parsedAmount);
    
    // Reset the form fields
    setFromAccount('');
    setToAccount('');
    setAmount('');
  };

  return (
    <div className="e-transfer-form">
      <h5>E-Transfer</h5>
      <div className="form-group">
        <label htmlFor="fromAccount">From Account</label>
        <input
          type="text"
          className="form-control"
          id="fromAccount"
          value={fromAccount}
          onChange={(e) => setFromAccount(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="toAccount">To Account</label>
        <input
          type="text"
          className="form-control"
          id="toAccount"
          value={toAccount}
          onChange={(e) => setToAccount(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          className="form-control"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button
        className="btn btn-primary" // Use a standard Bootstrap class
        onClick={handleETransferClick}
        disabled={!hasDeposit} // Button is disabled if no deposit has been made
      >
        E-Transfer
      </button>
    </div>
  );
}

export default ETransfer;
