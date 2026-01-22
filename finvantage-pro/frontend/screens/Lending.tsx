
import React from 'react';
import { mockLoans } from '../services/mockData';

const LendingScreen: React.FC = () => {
  const lentMoney = mockLoans.filter(l => l.type === 'Lent');
  const borrowedMoney = mockLoans.filter(l => l.type === 'Borrowed');

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Pending': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'Paid': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'Overdue': return 'bg-rose-500/20 text-rose-400 border-rose-500/30';
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  return (
    <div className="animate-in fade-in duration-500">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Lending & Borrowing</h1>
        <p className="text-slate-400">Manage your outstanding loans and debts with others.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Lent Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">📤</span>
            <h2 className="text-xl font-bold">Money Lent</h2>
            <span className="ml-auto bg-slate-800 px-2 py-0.5 rounded text-xs text-slate-400">{lentMoney.length} Items</span>
          </div>
          
          <div className="space-y-4">
            {lentMoney.map(loan => (
              <div key={loan.id} className="bg-slate-900 border border-slate-800 p-5 rounded-2xl hover:border-blue-500/30 transition-all">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-bold text-slate-100">{loan.person}</span>
                  <span className="text-emerald-400 font-bold">+${loan.amount}</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-xs text-slate-500">
                    <span className="block uppercase tracking-widest opacity-50 font-semibold mb-1">Due Date</span>
                    {loan.dueDate}
                  </div>
                  <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest border ${getStatusBadge(loan.status)}`}>
                    {loan.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Borrowed Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">📥</span>
            <h2 className="text-xl font-bold">Money Borrowed</h2>
            <span className="ml-auto bg-slate-800 px-2 py-0.5 rounded text-xs text-slate-400">{borrowedMoney.length} Items</span>
          </div>

          <div className="space-y-4">
            {borrowedMoney.map(loan => (
              <div key={loan.id} className="bg-slate-900 border border-slate-800 p-5 rounded-2xl hover:border-rose-500/30 transition-all">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-bold text-slate-100">{loan.person}</span>
                  <span className="text-rose-400 font-bold">-${loan.amount}</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-xs text-slate-500">
                    <span className="block uppercase tracking-widest opacity-50 font-semibold mb-1">Due Date</span>
                    {loan.dueDate}
                  </div>
                  <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest border ${getStatusBadge(loan.status)}`}>
                    {loan.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default LendingScreen;
