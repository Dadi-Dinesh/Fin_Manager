'use client';
import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { useRouter } from 'next/navigation';

const Transactions = () => {
  const router = useRouter();
  const [income, setIncome] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [expenses, setExpenses] = useState([]);

  const COLORS = [
    '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#9C27B0',
    '#E91E63', '#4CAF50', '#FF5722', '#03A9F4', '#795548'
  ];

  const handleAddExpense = () => {
    if (name && amount && category) {
      const newExpense = {
        name,
        amount: parseFloat(amount),
        category
      };
      setExpenses([...expenses, newExpense]);
      setName('');
      setAmount('');
      setCategory('');
    }
  };

  const totalExpenses = expenses.reduce((acc, item) => acc + item.amount, 0);

  const colorMap = {};
  let colorIndex = 0;
  expenses.forEach((item) => {
    const key = item.name + item.category;
    if (!colorMap[key]) {
      colorMap[key] = COLORS[colorIndex % COLORS.length];
      colorIndex++;
    }
  });

  return (
    <div className="transactions-page">
      <nav className="transactions-navbar">
        <h1 className="navbar-title">Finance Manager</h1>
        <button className="home-btn" onClick={() => router.push('/')}>
          Home
        </button>
      </nav>

      <div className="transactions-container">
        <div className="transactions-inputs">
          <div className="income-input">
            <h2>Enter Total Income</h2>
            <input
              type="number"
              placeholder="Enter income"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
            />
          </div>

          <div className="expense-form">
            <h2>Add Expense</h2>
            <input
              type="text"
              placeholder="Name (e.g. movie, milk)"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="Food">Food</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Fees">Fees</option>
              <option value="Rent">Rent</option>
              <option value="Transport">Transport</option>
              <option value="Others">Others</option>
            </select>
            <button onClick={handleAddExpense}>Add Expense</button>
          </div>
        </div>

        <div className="transactions-summary">
          <h2>Summary</h2>
          <p>Total Income: ₹{income || 0}</p>
          <p>Total Expenses: ₹{totalExpenses}</p>
          <p>Balance: ₹{income - totalExpenses}</p>
        </div>

        <div className="transactions-chart">
          <h2>Expenses Breakdown</h2>
          {expenses.length > 0 ? (
            <PieChart width={350} height={350}>
              <Pie
                data={expenses}
                dataKey="amount"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                label
              >
                {expenses.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colorMap[entry.name + entry.category]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          ) : (
            <p>No expenses added yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
