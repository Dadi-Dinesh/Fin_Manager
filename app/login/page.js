'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '@/lib/firebase';

export default function SigninPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleEmailSignin = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/explore');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignin = async () => {
    setError('');
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push('/explore');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth">
      <div className="auth-bg"></div>
      <div className="auth-box">
        <div className="logo">FinManager</div>
        <div className="auth-title">Create Account</div>
        <div className="auth-sub">Fill in the details to create your account</div>

        {error && <div className="error">{error}</div>}

        <form className="form" onSubmit={handleEmailSignin}>
          <div className="group">
            <label className="label">Full Name</label>
            <input
              type="text"
              className="input"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
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
              required
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
              required
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
              required
            />
          </div>

          <button type="submit" className="button">Sign Up</button>
        </form>

        <button onClick={handleGoogleSignin} className="button google-button">
          Sign in with Google
        </button>

        <div className="footer">
            Dont have an account
          <Link href="/login" className="link">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
