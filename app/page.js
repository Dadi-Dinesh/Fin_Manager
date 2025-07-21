'use client';
import { useRouter } from 'next/navigation';
export default function ExplorePage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/login');
};

  return (
    <div className="explore">
      <div className="left">
        <h1 className="title">finManager</h1>
        <p className="desc">
          A one-stop solution to manage your finances.<br /><br />
          ➤ Calculate loans effortlessly<br />
          ➤ Track your expenses in real time<br />
          ➤ Manage and calculate your debts<br />
          ➤ Monitor your investments
        </p>
      </div>
      <div className="right">
        <h2 className="subtitle">Want to explore more?</h2>
        <button className="button" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}