import React from 'react';

function Transactions({ accounts }) {
  return (
    <div className="mt-5">
      <h3>Transactions History</h3>
      {Object.keys(accounts).length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Account Number</th>
              <th>Amount</th>
              <th>Transaction Type</th>
              <th>Balance After Transaction</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(accounts).map((accountNumber) =>
              accounts[accountNumber].transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.accountNumber}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.type}</td>
                  <td>{transaction.balance}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      ) : (
        <p>No transactions found.</p>
      )}
    </div>
  );
}

export default Transactions;
