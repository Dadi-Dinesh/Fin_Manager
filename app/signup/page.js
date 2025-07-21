'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  return (
    <div className="auth">
      <div className="auth-bg"></div>
      <div className="auth-box">
        <div className="logo">FinManager</div>
        <div className="auth-title">Create Account</div>
        <div className="auth-sub">Fill in the details to create your account</div>

        <form className="form">
          <div className="group">
            <label className="label">Full Name</label>
            <input
              type="text"
              className="input"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="group">
            <label className="label">Email Address</label>
            <input
              type="email"
              className="input"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="group">
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="group">
            <label className="label">Confirm Password</label>
            <input
              type="password"
              className="input"
              placeholder="Re-enter password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>

          <button type="submit" className="button">Sign Up</button>
        </form>

        <div className="footer">
          Already have an account?
          <Link href="/login" className="link">Sign In</Link>
        </div>
      </div>
    </div>
  );
}
