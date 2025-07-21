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

  const getTotalByCategory = (category) => {
    return Object.values(data[category] || {}).reduce((acc, val) => acc + val, 0);
  };

  const getNetWorth = () => {
    return getTotalByCategory('investments') - getTotalByCategory('debt');
  };

  const renderInputs = (category, fields) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      {Object.entries(fields).map(([key, label]) => (
        <div key={key}>
          <label className="block text-sm font-medium mb-1">{label}</label>
          <input
            type="number"
            step="0.01"
            min="0"
            value={data[category][key] || ''}
            onChange={(e) => handleInputChange(category, key, e.target.value)}
            placeholder="0.00"
            className="w-full border rounded px-3 py-2 text-right"
          />
        </div>
      ))}
    </div>
  );

  const formatCurrency = (amount) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-700 mb-2">Financial Calculator</h1>
          <p className="text-gray-600">Track your finances in one place</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-red-100 p-4 rounded shadow text-red-700">
            <p>Total Debt</p>
            <h2 className="text-2xl font-bold">{formatCurrency(getTotalByCategory('debt'))}</h2>
          </div>
          <div className="bg-green-100 p-4 rounded shadow text-green-700">
            <p>Total Investments</p>
            <h2 className="text-2xl font-bold">{formatCurrency(getTotalByCategory('investments'))}</h2>
          </div>
          <div className="bg-blue-100 p-4 rounded shadow text-blue-700">
            <p>Monthly Income</p>
            <h2 className="text-2xl font-bold">{formatCurrency(getTotalByCategory('income'))}</h2>
          </div>
          <div className="bg-purple-100 p-4 rounded shadow text-purple-700">
            <p>Monthly Expenses</p>
            <h2 className="text-2xl font-bold">{formatCurrency(getTotalByCategory('expenses'))}</h2>
          </div>
        </div>
        <div className="bg-white border p-6 rounded shadow text-center mb-6">
          <h3 className="text-xl font-semibold">Net Worth</h3>
          <p className={`text-3xl font-bold ${getNetWorth() >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {formatCurrency(getNetWorth())}
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <div className="flex justify-between gap-2 mb-6">
            {['debt', 'investments', 'income', 'expenses'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded ${
                  activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-200'
                }`}
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
