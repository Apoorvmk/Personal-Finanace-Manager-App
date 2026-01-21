
import React, { useState, useEffect } from 'react';
import { Screen } from './types';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import ExpenseForm from './screens/ExpenseForm';
import IncomeForm from './screens/IncomeForm';
import ExpenseList from './screens/ExpenseList';
import ReportsScreen from './screens/Reports';
import BudgetScreen from './screens/Budget';
import LendingScreen from './screens/Lending';
import InsightsScreen from './screens/Insights';
import ChatbotScreen from './screens/Chatbot';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('LOGIN');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showSessionWarning, setShowSessionWarning] = useState(false);

  const navigate = (screen: Screen) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (currentScreen !== 'LOGIN') {
       // Mock session warning after 10 seconds for demo
       const timer = setTimeout(() => setShowSessionWarning(true), 15000);
       return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'LOGIN':
        return <Login onLogin={() => navigate('DASHBOARD')} />;
      case 'DASHBOARD':
        return <Dashboard navigate={navigate} />;
      case 'ADD_EXPENSE':
        return <ExpenseForm onBack={() => navigate('DASHBOARD')} />;
      case 'ADD_INCOME':
        return <IncomeForm onBack={() => navigate('DASHBOARD')} />;
      case 'EXPENSE_LIST':
        return <ExpenseList />;
      case 'REPORTS':
        return <ReportsScreen />;
      case 'BUDGET':
        return <BudgetScreen />;
      case 'LENDING':
        return <LendingScreen />;
      case 'INSIGHTS':
        return <InsightsScreen />;
      case 'CHATBOT':
        return <ChatbotScreen />;
      default:
        return <Dashboard navigate={navigate} />;
    }
  };

  if (currentScreen === 'LOGIN') {
    return <Login onLogin={() => navigate('DASHBOARD')} />;
  }

  return (
    <div className="flex min-h-screen bg-slate-950 font-['Inter'] selection:bg-blue-500/30">
      <Sidebar 
        currentScreen={currentScreen} 
        navigate={navigate} 
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      
      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'} p-8 max-w-full overflow-x-hidden relative`}>
        {/* Session Warning Banner */}
        {showSessionWarning && (
          <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] bg-rose-600 text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-4 animate-in slide-in-from-top-4 duration-300">
             <span className="text-xl">⚠️</span>
             <div className="text-xs font-bold uppercase tracking-widest">Session expiring in 2:00. <button onClick={() => setShowSessionWarning(false)} className="underline ml-2">Keep Alive</button></div>
          </div>
        )}

        <div className="max-w-7xl mx-auto">
          {renderScreen()}
        </div>

        {/* Floating Quick Action Button */}
        {currentScreen !== 'ADD_EXPENSE' && (
          <button 
            onClick={() => navigate('ADD_EXPENSE')}
            className="fixed bottom-10 right-10 w-16 h-16 bg-blue-600 hover:bg-blue-500 text-white rounded-[1.5rem] shadow-2xl shadow-blue-600/30 flex items-center justify-center text-3xl transition-all hover:scale-110 active:scale-90 z-40 group"
          >
            <span className="transition-transform group-hover:rotate-90">➕</span>
            <span className="absolute right-20 bg-slate-900 border border-slate-800 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-widest">Quick Expense</span>
          </button>
        )}
      </main>
    </div>
  );
};

export default App;
