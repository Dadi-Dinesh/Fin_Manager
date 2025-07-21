'use client';
import { useState } from 'react';

const FinancialForm = () => {
  const [data, setData] = useState({
    debt: {},
    investments: {},
    income: {},
    expenses: {},
  });

  const [activeTab, setActiveTab] = useState('debt');

  const handleInputChange = (category, key, value) => {
    setData((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: parseFloat(value) || 0,
      },
    }));
  };

  const getTotalByCategory = (category) =>
    Object.values(data[category] || {}).reduce((acc, val) => acc + val, 0);

  const getNetWorth = () =>
    getTotalByCategory('investments') - getTotalByCategory('debt');

  const renderInputs = (category, fields) => (
    <div className="input-grid">
      {Object.entries(fields).map(([key, label]) => (
        <div key={key}>
          <label className="input-label">{label}</label>
          <input
            type="number"
            step="0.01"
            min="0"
            value={data[category][key] || ''}
            onChange={(e) => handleInputChange(category, key, e.target.value)}
            placeholder="0.00"
            className="input-field"
          />
        </div>
      ))}
    </div>
  );

  const formatCurrency = (amount) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);

  return (
    <div className="finance-container">
      <div className="finance-wrapper">
        <div className="finance-header">
          <h1>Financial Calculator</h1>
          <p>Track your finances in one place</p>
        </div>

        <div className="summary-cards">
          <div className="card red">
            <p>Total Debt</p>
            <h2>{formatCurrency(getTotalByCategory('debt'))}</h2>
          </div>
          <div className="card green">
            <p>Total Investments</p>
            <h2>{formatCurrency(getTotalByCategory('investments'))}</h2>
          </div>
          <div className="card blue">
            <p>Monthly Income</p>
            <h2>{formatCurrency(getTotalByCategory('income'))}</h2>
          </div>
          <div className="card purple">
            <p>Monthly Expenses</p>
            <h2>{formatCurrency(getTotalByCategory('expenses'))}</h2>
          </div>
        </div>

        <div className="networth-box">
          <h3>Net Worth</h3>
          <p className={`networth-value ${getNetWorth() >= 0 ? 'positive' : 'negative'}`}>
            {formatCurrency(getNetWorth())}
          </p>
        </div>

        <div className="form-box">
          <div className="tabs">
            {['debt', 'investments', 'income', 'expenses'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {activeTab === 'debt' &&
            renderInputs('debt', {
              creditCards: 'Credit Cards',
              studentLoans: 'Student Loans',
              mortgage: 'Mortgage',
              personalLoans: 'Personal Loans',
              other: 'Other Debt',
            })}

          {activeTab === 'investments' &&
            renderInputs('investments', {
              stocks: 'Stocks',
              bonds: 'Bonds',
              retirement401k: '401(k)',
              ira: 'IRA',
              realEstate: 'Real Estate',
              crypto: 'Cryptocurrency',
              other: 'Other Investments',
            })}

          {activeTab === 'income' &&
            renderInputs('income', {
              salary: 'Salary',
              freelance: 'Freelance',
              investments: 'Investment Returns',
              rental: 'Rental Income',
              other: 'Other Income',
            })}

          {activeTab === 'expenses' &&
            renderInputs('expenses', {
              housing: 'Housing',
              transportation: 'Transportation',
              food: 'Food',
              utilities: 'Utilities',
              healthcare: 'Healthcare',
              entertainment: 'Entertainment',
              shopping: 'Shopping',
              other: 'Other Expenses',
            })}
        </div>
      </div>
    </div>
  );
};

export default FinancialForm;

