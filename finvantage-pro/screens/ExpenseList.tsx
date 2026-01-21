
import React from 'react';
import { mockExpenses } from '../services/mockData';

const ExpenseList: React.FC = () => {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Food': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Rent': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Transport': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Entertainment': return 'bg-rose-500/20 text-rose-400 border-rose-500/30';
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  return (
    <div className="animate-in fade-in duration-500">
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Transactions</h1>
          <p className="text-slate-400">Detailed overview of your spending history.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 p-2 rounded-lg text-slate-400">🔍</button>
          <button className="bg-slate-800 hover:bg-slate-700 p-2 rounded-lg text-slate-400">📑</button>
        </div>
      </header>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <table className="w-full text-left">
          <thead className="bg-slate-950/50 border-b border-slate-800">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-widest">Date</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-widest">Description</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-widest">Category</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-widest text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {mockExpenses.map((expense) => (
              <tr key={expense.id} className="hover:bg-slate-800/50 transition-colors group">
                <td className="px-6 py-5 text-slate-400 text-sm">{expense.date}</td>
                <td className="px-6 py-5">
                  <div className="font-medium text-slate-200">{expense.description}</div>
                  <div className="text-xs text-slate-500 lg:hidden">{expense.category}</div>
                </td>
                <td className="px-6 py-5">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(expense.category)}`}>
                    {expense.category}
                  </span>
                </td>
                <td className="px-6 py-5 text-right font-bold text-rose-400">
                  -${expense.amount.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {mockExpenses.length === 0 && (
          <div className="py-20 text-center text-slate-500">
            No transactions found.
          </div>
        )}
      </div>

      <div className="mt-8 flex justify-center">
        <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">Load more activity</button>
      </div>
    </div>
  );
};

export default ExpenseList;
