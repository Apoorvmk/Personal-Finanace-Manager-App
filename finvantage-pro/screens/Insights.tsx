
import React from 'react';
import { mockInsights } from '../services/mockData';

const InsightsScreen: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Smart Insights</h1>
        <p className="text-slate-500 text-sm">Wealth analysis engine based on your Indian financial profile.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockInsights.map((insight) => (
          <div 
            key={insight.id} 
            className={`p-8 rounded-[2rem] border transition-all hover:-translate-y-2 shadow-xl bg-slate-900 flex flex-col h-full border-slate-800 group hover:bg-slate-800/50`}
          >
            <div className="flex items-center justify-between mb-8">
              <span className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-lg transition-transform group-hover:scale-110 ${
                insight.type === 'warning' ? 'bg-rose-500/10 text-rose-400 shadow-rose-500/5' :
                insight.type === 'positive' ? 'bg-emerald-500/10 text-emerald-400 shadow-emerald-500/5' :
                'bg-blue-500/10 text-blue-400 shadow-blue-500/5'
              }`}>
                {insight.type === 'warning' ? '🔥' : insight.type === 'positive' ? '✨' : '🧠'}
              </span>
              <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${
                insight.type === 'warning' ? 'text-rose-400 border-rose-500/20 bg-rose-500/5' :
                insight.type === 'positive' ? 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5' :
                'text-blue-400 border-blue-500/20 bg-blue-500/5'
              }`}>
                {insight.type}
              </span>
            </div>
            
            <h3 className="text-lg font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{insight.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
              {insight.description}
            </p>

            <button className="text-[10px] text-slate-500 group-hover:text-white font-bold uppercase tracking-widest self-start flex items-center gap-2 transition-all">
              Details <span>→</span>
            </button>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-blue-600/10 via-indigo-600/5 to-transparent border border-blue-500/20 p-10 rounded-[3rem] relative overflow-hidden group">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-10">
          <div className="lg:flex-1">
             <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-bold rounded-full uppercase tracking-widest">Premium Score</span>
                <span className="text-slate-500 text-xs font-medium">Updated 5m ago</span>
             </div>
             <h2 className="text-5xl font-black mb-4 tracking-tight">Vault Score: <span className="text-blue-400">785</span></h2>
             <p className="text-slate-400 max-w-lg">Your financial health is Excellent. You are performing 15% better than your peer group in Bangalore.</p>
          </div>
          <div className="w-full lg:w-1/3">
             <div className="w-full h-3 bg-slate-900 rounded-full mb-4 overflow-hidden border border-slate-800">
                <div className="w-[78%] h-full bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)] group-hover:w-[80%] transition-all duration-1000"></div>
             </div>
             <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                <span className="text-slate-600">Poor</span>
                <span className="text-blue-400">Superior</span>
             </div>
          </div>
        </div>
        <div className="absolute -bottom-10 -right-10 text-9xl opacity-5 transition-transform group-hover:scale-110 duration-1000">🛡️</div>
      </div>
    </div>
  );
};

export default InsightsScreen;
