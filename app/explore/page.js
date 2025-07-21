
'use client';
import Link from 'next/link';
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="home-wrapper">
      <nav className="navbar">
        <div className="navbar-title">Finance Manager</div>
        <Link href="/" className="home-btn">Home</Link>
      </nav>
      <main className="main-content">
        <div className="card-grid">
          <div className="card">
            <h3>Expense Tracker</h3>
            <p>Track your expenses and view summaries.</p>
            <Link href="/transactions" className="card-btn">Track</Link>
          </div>

          <div className="card">
            <h3>Goal Setter</h3>
            <p>Set savings and budgeting goals.</p>
            <Link href="/goals" className="card-btn">Set Goals</Link>
          </div>

          <div className="card">
            <h3>Reminder</h3>
            <p>Add bill reminders and alerts.</p>
            <Link href="/reminder" className="card-btn">Remind Me</Link>
          </div>

          <div className="card">
            <h3>Calculator</h3>
            <p>Calculate loans, savings, and more.</p>
            <Link href="/calculation" className="card-btn">Calculate</Link>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <Image src="/logo.png" alt="Logo" width={24} height={24} />
            <span>Finance Manager</span>
          </div>

          <div className="footer-links">
            <Link href="/goals">Goals</Link>
            <Link href="/transactions">Transactions</Link>
            <Link href="/reminder">Reminders</Link>
            <Link href="/calculation">Calculator</Link>
          </div>

          <div className="footer-icons">
            <a href="mailto:example@mail.com"><FaEnvelope /></a>
            <a href="https://instagram.com"><FaInstagram /></a>
            <a href="https://github.com"><FaGithub /></a>
            <a href="https://linkedin.com"><FaLinkedin /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
