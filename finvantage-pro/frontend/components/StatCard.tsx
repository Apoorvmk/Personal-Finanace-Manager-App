
import React from 'react';
import { formatCurrencyValue } from '../utils/format';

interface StatCardProps {
  title: string;
  value: number;
  type?: 'income' | 'expense' | 'savings' | 'neutral';
  icon?: string;
  subtext?: string;
  isMain?: boolean;
  isMasked?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, type = 'neutral', icon, subtext, isMain = false, isMasked = false }) => {
  const textColors = {
    income: 'text-emerald-400',
    expense: 'text-rose-400',
    savings: 'text-blue-400',
    neutral: 'text-white'
  };

  const bgColors = {
    income: 'bg-emerald-500/5 border-emerald-500/10',
    expense: 'bg-rose-500/5 border-rose-500/10',
    savings: 'bg-blue-500/5 border-blue-500/10',
    neutral: 'bg-slate-900 border-slate-800'
  };

  const displayValue = isMasked ? '****' : formatCurrencyValue(value);

  return (
    <div className={`p-6 rounded-3xl border ${bgColors[type]} transition-all duration-300 hover:scale-[1.01] hover:bg-slate-900 shadow-xl group ${isMain ? 'ring-1 ring-blue-500/20 shadow-blue-500/5' : ''}`}>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">{title}</h3>
        {icon && <span className="text-xl opacity-40 group-hover:opacity-100 transition-opacity">{icon}</span>}
      </div>
      <div className={`flex items-baseline gap-2 ${isMain ? 'text-4xl' : 'text-2xl'} font-bold ${textColors[type]}`}>
        <span className="text-sm font-medium opacity-50">₹</span>
        <span>{displayValue}</span>
        <span className="text-[10px] font-bold opacity-30 ml-2">INR</span>
      </div>
      {subtext && <p className="mt-4 text-slate-500 text-[11px] font-medium flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
        {subtext}
      </p>}
    </div>
  );
};

export default StatCard;
