
import React from 'react';
import { mockBudgets } from '../services/mockData';

const BudgetScreen: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Budgets</h1>
        <p className="text-slate-400">Track and control your monthly limits per category.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockBudgets.map((budget) => {
          const percentage = Math.min((budget.spent / budget.limit) * 100, 100);
          const isOver = budget.spent > budget.limit;

          return (
            <div 
              key={budget.category} 
              className={`p-6 rounded-2xl border transition-all hover:scale-[1.01] bg-slate-900 shadow-lg ${
                isOver ? 'border-rose-500/50 ring-1 ring-rose-500/20' : 'border-slate-800'
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{isOver ? '⚠️' : '🛡️'}</span>
                  <h3 className="font-bold text-lg">{budget.category}</h3>
                </div>
                {isOver && <span className="text-rose-500 text-xs font-bold uppercase tracking-widest">Over Limit</span>}
              </div>

              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-400">Spent: <span className="text-white font-medium">${budget.spent}</span></span>
                <span className="text-slate-400">Limit: <span className="text-white font-medium">${budget.limit}</span></span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ${isOver ? 'bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]' : 'bg-blue-500'}`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <span className="text-xs text-slate-500">{Math.round(percentage)}% of budget utilized</span>
                <button className="text-xs text-blue-400 hover:underline">Adjust Limit</button>
              </div>
            </div>
          );
        })}

        {/* Create New Budget Card */}
        <button className="p-6 rounded-2xl border border-dashed border-slate-700 bg-slate-900/30 text-slate-500 hover:text-slate-300 hover:border-slate-500 hover:bg-slate-800/50 transition-all flex flex-col items-center justify-center gap-2">
          <span className="text-3xl">➕</span>
          <span className="font-medium">Create New Budget</span>
        </button>
      </div>
    </div>
  );
};

export default BudgetScreen;
