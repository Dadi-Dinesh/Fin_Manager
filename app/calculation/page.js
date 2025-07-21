'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function CalculationPage() {
  const [activeTab, setActiveTab] = useState('loan');
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanYears, setLoanYears] = useState('');
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [investmentRate, setInvestmentRate] = useState('');
  const [investmentYears, setInvestmentYears] = useState('');
  const [result, setResult] = useState('');

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(loanYears) * 12;

    const emi = (principal * rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1);
    setResult(`Monthly EMI: ₹${emi.toFixed(2)}`);
  };

  const calculateInvestment = () => {
    const P = parseFloat(investmentAmount);
    const r = parseFloat(investmentRate) / 100;
    const t = parseFloat(investmentYears);

    const A = P * Math.pow(1 + r, t);
    setResult(`Future Value: ₹${A.toFixed(2)}`);
  };

  return (
    <div className="calc-container">
      <div className="navbar">
        <div className="nav-title">FinManager</div>
        <Link href="/" className="nav-home">Home</Link>
      </div>

      <div className="tabs">
        <button onClick={() => setActiveTab('loan')} className={activeTab === 'loan' ? 'active' : ''}>
          Loan Calculator
        </button>
        <button onClick={() => setActiveTab('investment')} className={activeTab === 'investment' ? 'active' : ''}>
          Investment Calculator
        </button>
      </div>

      <div className="form-area">
        {activeTab === 'loan' && (
          <div className="form">
            <input type="number" placeholder="Loan Amount" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />
            <input type="number" placeholder="Annual Interest Rate (%)" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
            <input type="number" placeholder="Loan Term (Years)" value={loanYears} onChange={(e) => setLoanYears(e.target.value)} />
            <button onClick={calculateLoan}>Calculate EMI</button>
          </div>
        )}

        {activeTab === 'investment' && (
          <div className="form">
            <input type="number" placeholder="Investment Amount" value={investmentAmount} onChange={(e) => setInvestmentAmount(e.target.value)} />
            <input type="number" placeholder="Annual Return Rate (%)" value={investmentRate} onChange={(e) => setInvestmentRate(e.target.value)} />
            <input type="number" placeholder="Investment Duration (Years)" value={investmentYears} onChange={(e) => setInvestmentYears(e.target.value)} />
            <button onClick={calculateInvestment}>Calculate Returns</button>
          </div>
        )}

        {result && <div className="result">{result}</div>}
      </div>
    </div>
  );
}
