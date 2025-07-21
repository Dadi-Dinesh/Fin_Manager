'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // ✅ Import router

export default function LoginPage() {
  const router = useRouter(); // ✅ Initialize router
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add authentication logic here
    if (email && password) {
      router.push('/'); // ✅ Redirect to Home page
    }
  };

  return (
    <div className="auth">
      <div className="auth-bg"></div>
      <div className="auth-box">
        <div className="logo">FinManager</div>
        <div className="auth-title">Welcome back..</div>
        <div className="auth-sub">Enter your credentials to access your account</div>

        <form className="form" onSubmit={handleSubmit}> {/* ✅ Added onSubmit */}
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
            <div className="pass-header">
              <label className="label">Password</label>
              <Link href="#" className="link-small">Forgot Password?</Link>
            </div>
            <input
              type="password"
              className="input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="remember">
            <input type="checkbox" className="checkbox" />
            <label>Remember me</label>
          </div>

          <button type="submit" className="button">Sign In</button>
        </form>

        <div className="footer">
          Don’t have an account?
          <Link href="/signup" className="link">Create Account</Link>
        </div>
      </div>
    </div>
  );
}
