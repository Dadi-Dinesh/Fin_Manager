'use client';
import { useState } from 'react';

const checklistItems = [
  'Emergency Fund (3-6 months)',
  'Term Life Insurance',
  'Health Insurance',
  'Vehicle Insurance',
  'Home/Rental Insurance',
  'Credit Score Check',
  'Retirement Plan (PPF/NPS/EPF)',
  'FIRE Amount Calculation',
  'Debt Repayment Strategy',
  'Investment in Mutual Funds',
  'Stock Market Portfolio Review',
  'Real Estate Planning',
  'Monthly Budget Review',
  'Tax Saving Investments (80C)',
  'Will / Estate Planning',
  'Contingency Plan (Job Loss)',
  'Monthly Expense Tracker',
  'Passive Income Sources',
  'Financial Goals for Year',
  'Recurring Deposits/SIP Setup',
];

const FinancialChecklist = () => {
  const [checked, setChecked] = useState({});

  const toggleCheck = (item) => {
    setChecked((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  return (
    <div className="checklist-page">
      <nav className="checklist-navbar">
        <div className="navbar-title">Finance Manager</div>
        <a href="/" className="home-btn">Home</a>
      </nav>

      <div className="checklist-container">
        <h1 className="checklist-title">Financial Checklist</h1>
        <p className="checklist-subtitle">Stay on top of your financial health with this 2025 checklist</p>

        <div className="checklist-items">
          {checklistItems.map((item, idx) => (
            <label key={idx} className={`checklist-item ${checked[item] ? 'checked' : ''}`}>
              <input
                type="checkbox"
                checked={checked[item] || false}
                onChange={() => toggleCheck(item)}
              />
              {item}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinancialChecklist;
