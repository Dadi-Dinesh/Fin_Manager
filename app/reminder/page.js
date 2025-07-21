'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Reminders = () => {
  const router = useRouter();
  const [reminders, setReminders] = useState([]);
  const [title, setTitle] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddReminder = () => {
    if (!title.trim()) {
      alert('Please enter a reminder title');
      return;
    }

    if (!dateTime) {
      alert('Please select a date and time');
      return;
    }

    if (!amount || isNaN(amount)) {
      alert('Please enter a valid amount');
      return;
    }

    const newReminder = {
      id: Date.now(),
      title: title.trim(),
      dateTime,
      amount: parseFloat(amount).toFixed(2)
    };

    setReminders((prev) => [...prev, newReminder]);
    setTitle('');
    setDateTime('');
    setAmount('');
  };

  const handleDeleteReminder = (id) => {
    setReminders(reminders.filter((r) => r.id !== id));
  };

  return (
    <div className="reminders-page">
      <nav className="navbar">
        <h1 className="navbar-title" onClick={() => router.push('/')}>
          Finance Manager
        </h1>
        <button className="home-btn" onClick={() => router.push('/')}>
          Home
        </button>
      </nav>

      <div className="reminder-container">
        <div className="reminder-form">
          <h2>Add Reminder</h2>
          <input
            type="text"
            placeholder="Reminder Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
          />
          <input
            type="number"
            placeholder="Amount (₹)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button onClick={handleAddReminder}>Add Reminder</button>
        </div>

        <div className="reminder-list">
          <h2>Upcoming Reminders</h2>
          {reminders.length === 0 ? (
            <p>No reminders yet.</p>
          ) : (
            <ul>
              {reminders.map((reminder) => (
                <li key={reminder.id}>
                  <strong>{reminder.title}</strong><br />
                  <span>{new Date(reminder.dateTime).toLocaleString()}</span><br />
                  <span>₹ {reminder.amount}</span><br />
                  <button onClick={() => handleDeleteReminder(reminder.id)}>Delete</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reminders;

