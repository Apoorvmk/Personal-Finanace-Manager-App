
import React from 'react';
import { Screen } from '../../types';

interface SidebarProps {
  currentScreen: Screen;
  navigate: (screen: Screen) => void;
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentScreen, navigate, isOpen, toggleSidebar }) => {
  const navItems = [
    { id: 'DASHBOARD', label: 'Dashboard', icon: '📊' },
    { id: 'EXPENSE_LIST', label: 'Expenses', icon: '💸' },
    { id: 'REPORTS', label: 'Reports', icon: '📈' },
    { id: 'BUDGET', label: 'Budgets', icon: '🛡️' },
    { id: 'LENDING', label: 'Loans', icon: '🤝' },
    { id: 'INSIGHTS', label: 'Insights', icon: '💡' },
    { id: 'CHATBOT', label: 'Assistant', icon: '🤖' },
  ];

  return (
    <aside 
      className={`fixed top-0 left-0 h-full bg-slate-950/80 backdrop-blur-xl border-r border-slate-800/50 transition-all duration-300 z-50 ${isOpen ? 'w-64' : 'w-20'}`}
    >
      <div className="flex flex-col h-full">
        <div className="p-6 flex items-center justify-between">
          <div className={`flex items-center gap-3 overflow-hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20">V</div>
            <span className="font-bold text-lg tracking-tight whitespace-nowrap">FinVantage</span>
          </div>
          <button 
            onClick={toggleSidebar}
            className="text-slate-600 hover:text-white transition-colors p-2"
          >
            {isOpen ? '◀' : '▶'}
          </button>
        </div>

        <nav className="flex-1 px-4 py-8">
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => navigate(item.id as Screen)}
                  className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 group ${
                    currentScreen === item.id 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20 font-semibold' 
                      : 'text-slate-500 hover:bg-slate-900 hover:text-slate-200'
                  }`}
                >
                  <span className={`text-xl transition-transform duration-300 ${currentScreen === item.id ? 'scale-110' : 'group-hover:scale-110'}`}>
                    {item.icon}
                  </span>
                  <span className={`transition-all duration-300 whitespace-nowrap text-sm ${isOpen ? 'opacity-100' : 'opacity-0 invisible'}`}>
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-slate-900">
          <button 
            onClick={() => navigate('LOGIN')}
            className="w-full flex items-center gap-4 px-4 py-4 text-slate-500 hover:text-rose-400 hover:bg-rose-400/5 rounded-2xl transition-all"
          >
            <span className="text-xl">🚪</span>
            <span className={`transition-opacity duration-300 text-sm ${isOpen ? 'opacity-100' : 'opacity-0 invisible'}`}>
              Sign Out
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
