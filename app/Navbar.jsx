'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="nav-logo">FinManager</div>
      <div className="nav-links">
        <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
        <Link href="/goals" className={`nav-link ${pathname === '/goals' ? 'active' : ''}`}>Goals</Link>
        <Link href="/calculations" className={`nav-link ${pathname === '/calculations' ? 'active' : ''}`}>Calculations</Link>
        <Link href="/login" className={`nav-link ${pathname === '/login' ? 'active' : ''}`}>Login</Link>
        <Link href="/signup" className={`nav-link ${pathname === '/signup' ? 'active' : ''}`}>Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
