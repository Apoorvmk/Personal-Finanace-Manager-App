
import React, { useState } from 'react';
import StatCard from '../components/StatCard';
import { mockBalance } from '../services/mockData';
import { Screen } from '../types';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DashboardProps {
  navigate: (screen: Screen) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ navigate }) => {
  const [isMasked, setIsMasked] = useState(false);
  
  const chartData = [
    { name: 'Mon', amount: 4500 },
    { name: 'Tue', amount: 3200 },
    { name: 'Wed', amount: 6800 },
    { name: 'Thu', amount: 8100 },
    { name: 'Fri', amount: 5500 },
    { name: 'Sat', amount: 12000 },
    { name: 'Sun', amount: 9500 },
  ];

  return (
    <div className="animate-in fade-in duration-500 pb-20">
      <header className="mb-10 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold mb-2">My Overview</h1>
          <p className="text-slate-500 text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            System Secured • Last synced 2 mins ago
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsMasked(!isMasked)}
            className="text-xs bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-slate-400 hover:text-white transition-all flex items-center gap-2"
          >
            {isMasked ? '👁️ Show Data' : '🔒 Hide Data'}
          </button>
          <div className="flex items-center gap-2 bg-blue-600/10 text-blue-400 px-4 py-2 rounded-xl text-xs font-bold border border-blue-600/20">
            <span>🛡️</span> BIOMETRIC ACTIVE
          </div>
        </div>
      </header>

      {/* Primary Financial Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <StatCard 
          title="Total Net Worth" 
          value={mockBalance.balance} 
          icon="🏦"
          isMain={true}
          isMasked={isMasked}
          subtext="Combined across 4 accounts"
        />
        <StatCard 
          title="This Month's Spending" 
          value={mockBalance.expense} 
          type="expense" 
          icon="💸"
          isMasked={isMasked}
          subtext="₹ 4,500 more than last month"
        />
        <StatCard 
          title="This Month's Savings" 
          value={mockBalance.savings} 
          type="savings" 
          icon="🛡️"
          isMasked={isMasked}
          subtext="On track for goal 'House Fund'"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Quick Stats Banner */}
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-[2rem] relative overflow-hidden">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
              <span className="p-2 bg-blue-600/10 text-blue-400 rounded-lg">📅</span>
              Weekly Spending Flow
            </h3>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="name" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                  <YAxis stroke="#475569" fontSize={10} axisLine={false} tickLine={false} tickFormatter={(val) => `₹${val/1000}k`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '12px', fontSize: '12px' }}
                    itemStyle={{ color: '#fff' }}
                    formatter={(value: any) => [`₹ ${value.toLocaleString()}`, 'Spent']}
                  />
                  <Area type="monotone" dataKey="amount" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorAmt)" dot={{ r: 4, fill: '#3b82f6' }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <button 
                onClick={() => navigate('REPORTS')}
                className="bg-slate-900 hover:bg-slate-800 border border-slate-800 p-6 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">📊</span>
                <span className="text-sm font-semibold">Detailed Reports</span>
              </button>
              <button 
                onClick={() => navigate('INSIGHTS')}
                className="bg-slate-900 hover:bg-slate-800 border border-slate-800 p-6 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">💡</span>
                <span className="text-sm font-semibold">Wealth Insights</span>
              </button>
          </div>
        </div>

        {/* Security & Quick Info */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/5 border border-blue-500/20 p-6 rounded-[2rem]">
            <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">Account Security</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">App Auto-Lock</span>
                <div className="w-8 h-4 bg-blue-600 rounded-full flex items-center justify-end px-1 cursor-pointer">
                   <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">Transaction Shield</span>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-md font-bold uppercase">Enabled</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-blue-500/10">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-lg">🔒</div>
                  <div>
                    <div className="text-xs font-bold">2-Factor Auth</div>
                    <div className="text-[10px] text-slate-500">Last verification 3 days ago</div>
                  </div>
               </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-[2rem]">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Upcoming Payments</h4>
            <div className="space-y-4">
              {[
                { label: 'HDFC Home Loan EMI', date: '05 Feb', amount: 45000 },
                { label: 'Cloud Storage', date: '08 Feb', amount: 199 }
              ].map(item => (
                <div key={item.label} className="flex justify-between items-center group">
                  <div>
                    <div className="text-sm font-semibold text-slate-200">{item.label}</div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">{item.date}</div>
                  </div>
                  <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">₹ {item.amount.toLocaleString()}</div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold text-slate-400 transition-all">
              View All Bills
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
