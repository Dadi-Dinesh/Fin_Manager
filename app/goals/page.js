'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function GoalsPage() {
  const [goalName, setGoalName] = useState('');
  const [goalAmount, setGoalAmount] = useState('');
  const [goals, setGoals] = useState([]);

  const handleAddGoal = (e) => {
    e.preventDefault();
    if (!goalName || !goalAmount) return;

    const newGoal = {
      id: Date.now(),
      name: goalName,
      amount: parseFloat(goalAmount),
    };

    setGoals([newGoal, ...goals]);
    setGoalName('');
    setGoalAmount('');
  };

  return (
    <div className="goals-page">
      <header className="goals-header">
        <h1 className="logo">FinManager</h1>
        <Link href="/home" className="home-link">Home</Link>
      </header>
      <form onSubmit={handleAddGoal} className="goal-form">
        <input
          type="text"
          placeholder="Goal name"
          value={goalName}
          onChange={(e) => setGoalName(e.target.value)}
          className="goal-input"
        />
        <input
          type="number"
          placeholder="Amount needed"
          value={goalAmount}
          onChange={(e) => setGoalAmount(e.target.value)}
          className="goal-input"
        />
        <button type="submit" className="goal-button">Add Goal</button>
      </form>
      <div className="goals-list">
        {goals.length === 0 ? (
          <p className="empty-message">No goals added yet.</p>
        ) : (
          goals.map(goal => (
            <div key={goal.id} className="goal-item">
              <div className="goal-name">{goal.name}</div>
              <div className="goal-amount">₹{goal.amount}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}