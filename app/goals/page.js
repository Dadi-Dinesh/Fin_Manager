'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function GoalsPage() {
  const [goals, setGoals] = useState([]);
  const [goalName, setGoalName] = useState('');
  const [goalAmount, setGoalAmount] = useState('');

  const addGoal = () => {
    if (!goalName || !goalAmount) return;
    const newGoal = {
      name: goalName,
      amount: parseFloat(goalAmount),
    };
    setGoals([...goals, newGoal]);
    setGoalName('');
    setGoalAmount('');
  };

  const totalAmount = goals.reduce((acc, goal) => acc + goal.amount, 0);

  return (
    <div className="goals-container">
      <header className="navbar">
        <div className="nav-left">FinManager</div>
        <Link href="explore" className="nav-right">Home</Link>
      </header>

      <main className="goals-main">
        <div className="goals-form">
          <input
            type="text"
            placeholder="Goal Name"
            value={goalName}
            onChange={(e) => setGoalName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Amount (₹)"
            value={goalAmount}
            onChange={(e) => setGoalAmount(e.target.value)}
          />
          <button onClick={addGoal}>Add Goal</button>
        </div>

        <div className="goals-list">
          {goals.length === 0 ? (
            <p className="empty">No goals added yet.</p>
          ) : (
            goals.map((goal, index) => (
              <div key={index} className="goal-item">
                <span>{goal.name}</span>
                <span>₹{goal.amount}</span>
              </div>
            ))
          )}
        </div>

        <footer className="goals-summary">
          <p>Total Goals: {goals.length}</p>
          <p>Total Amount: ₹{totalAmount}</p>
        </footer>
      </main>
    </div>
  );
}

