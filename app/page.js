
'use client';

import { useState } from 'react';

export default function Dashboard() {
  const [showEditModal, setShowEditModal] = useState(false);
  const userData = {
    debts: [{ amount: "5000" }],
    investments: [{ amount: "15000" }],
    incomes: [{ amount: "4000" }],
    expenses: [{ amount: "3000" }]
  };
  const totalDebts = userData.debts.reduce((sum, debt) => sum + (parseFloat(debt.amount) || 0), 0);
  const totalInvestments = userData.investments.reduce((sum, inv) => sum + (parseFloat(inv.amount) || 0), 0);
  const totalIncome = userData.incomes.reduce((sum, inc) => sum + (parseFloat(inc.amount) || 0), 0);
  const totalExpenses = userData.expenses.reduce((sum, exp) => sum + (parseFloat(exp.amount) || 0), 0);
  const netWorth = totalInvestments - totalDebts;
  const monthlyCashFlow = totalIncome - totalExpenses;

  return (
    <div className="container">
      <header className="header">
        <div className="headerContent">
          <div className="brand">
            <h1>FinanceFlow</h1>
          </div>
          <div className="headerButtons">
            <button
              onClick={() => setShowEditModal(true)}
              className="editButton"
            >
              Edit Data
            </button>
            <button
              onClick={() => console.log('Logout')}
              className="logoutButton"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="quickStats">
          <div className="statCard netWorthCard">
            <div>
              <p className="statLabel">Net Worth</p>
              <p className="statValue">${netWorth.toLocaleString()}</p>
            </div>
          </div>

          <div className="statCard monthlyIncomeCard">
            <div>
              <p className="statLabel">Monthly Income</p>
              <p className="statValue">${totalIncome.toLocaleString()}</p>
            </div>
          </div>

          <div className="statCard totalDebtsCard">
            <div>
              <p className="statLabel">Total Debts</p>
              <p className="statValue">${totalDebts.toLocaleString()}</p>
            </div>
          </div>

          <div className="statCard cashFlowCard">
            <div>
              <p className="statLabel">Cash Flow</p>
              <p className="statValue">${monthlyCashFlow.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Financial Summary */}
        <div className="summaryCards">
          <div className="card">
            <h2>Recent Transactions</h2>
            <div className="transactions">
              <div className="transactionItem">
                <div>
                  <p className="transactionTitle">Grocery Store</p>
                  <p className="transactionCategory">Food & Dining</p>
                </div>
                <span className="transactionAmountNegative">-$85.50</span>
              </div>
              <div className="transactionItem">
                <div>
                  <p className="transactionTitle">Salary Deposit</p>
                  <p className="transactionCategory">Income</p>
                </div>
                <span className="transactionAmountPositive">+$3,500.00</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      {showEditModal && (
        <div className="modal">
          <div className="modalContent">
            <h2>Edit Data</h2>
            <p>Modal content would go here</p>
            <button onClick={() => setShowEditModal(false)}>Close</button>
          </div>
        </div>
      )}
      <div className="fab">
        <button
          className="fabButton"
          onClick={() => setShowEditModal(true)}
        >
          +
        </button>
      </div>

    </div>
  );
}