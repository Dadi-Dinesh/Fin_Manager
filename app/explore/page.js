'use client';
import Link from 'next/link';
import { FaListCheck, FaMoneyBillWave, FaBullseye, FaBell, FaCalculator, FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="home-wrapper">
      <nav className="navbar">
        <div className="navbar-title">Finance Manager</div>
        <Link href="/" className="home-btn">Home</Link>
      </nav>
      <main className="main-content">
  {/* Project Info */}
  <section className="project-info">
    <h2>Welcome to Finance Manager 💰</h2>
    <p>
      Your one-stop personal finance management tool designed to help you track spending, set goals, calculate loans, and stay financially organized.
    </p>
    <p>
      Navigate through our smart tools to improve your financial decisions and achieve long-term success.
    </p>
  </section>

  {/* Horizontal Cards */}
  <div className="card-slider">
    <div className="card">
      <FaMoneyBillWave className="card-icon" />
      <h3>Expense Tracker</h3>
      <p>Track your expenses and view summaries.</p>
      <Link href="/transactions" className="card-btn">Track</Link>
    </div>

    <div className="card">
      <FaBullseye className="card-icon" />
      <h3>Goal Setter</h3>
      <p>Set savings and budgeting goals.</p>
      <Link href="/goals" className="card-btn">Set Goals</Link>
    </div>

    <div className="card">
      <FaBell className="card-icon" />
      <h3>Reminder</h3>
      <p>Add bill reminders and alerts.</p>
      <Link href="/reminder" className="card-btn">Remind Me</Link>
    </div>

    <div className="card">
      <FaCalculator className="card-icon" />
      <h3>Calculator</h3>
      <p>Calculate loans, savings, and more.</p>
      <Link href="/calculation" className="card-btn">Calculate</Link>
    </div>

    <div className="card">
      <FaListCheck className="card-icon" />
      <h3>Checklist</h3>
      <p>Check your financial readiness and tasks.</p>
      <Link href="/checklist" className="card-btn">Check Now</Link>
    </div>
  </div>
</main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <span>Finance Manager</span>
          </div>

          <div className="footer-links">
            <Link href="/goals">Goals</Link>
            <Link href="/transactions">Transactions</Link>
            <Link href="/reminder">Reminders</Link>
            <Link href="/calculation">Calculator</Link>
            <Link href="/checklist">Checklist</Link>
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
