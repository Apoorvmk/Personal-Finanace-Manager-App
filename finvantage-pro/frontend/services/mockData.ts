
import { BalanceData, Expense, Income, Budget, Loan, Insight, ChatMessage } from '../types';

export const mockBalance: BalanceData = {
  balance: 125000.50,
  income: 185000.00,
  expense: 60000.50,
  savings: 45000.00
};

export const mockExpenses: Expense[] = [
  { id: '1', amount: 350.00, category: 'Food', date: '2026-01-10', description: 'Swiggy Order' },
  { id: '2', amount: 15000.00, category: 'Rent', date: '2026-01-01', description: 'Monthly Apartment Rent' },
  { id: '3', amount: 2450.00, category: 'Transport', date: '2026-01-12', description: 'Petrol Refill' },
  { id: '4', amount: 899.00, category: 'Entertainment', date: '2026-01-15', description: 'Netflix & Disney+ Hotstar' },
  { id: '5', amount: 5000.00, category: 'Shopping', date: '2026-01-18', description: 'Amazon Electronics' },
];

export const mockIncomes: Income[] = [
  { id: '1', amount: 150000.00, source: 'Tech Corp Salary', date: '2026-01-01' },
  { id: '2', amount: 35000.00, source: 'Dividends', date: '2026-01-15' },
];

export const mockBudgets: Budget[] = [
  { category: 'Food', limit: 10000, spent: 8500 },
  { category: 'Entertainment', limit: 5000, spent: 6200 },
  { category: 'Transport', limit: 4000, spent: 2450 },
  { category: 'Shopping', limit: 15000, spent: 5000 },
];

export const mockLoans: Loan[] = [
  { id: '1', person: 'Rahul Sharma', amount: 2500, dueDate: '2026-02-15', status: 'Pending', type: 'Lent' },
  { id: '2', person: 'HDFC Bank Home Loan', amount: 4500000, dueDate: '2026-03-01', status: 'Pending', type: 'Borrowed' },
  { id: '3', person: 'Amit Verma', amount: 1500, dueDate: '2026-01-05', status: 'Overdue', type: 'Borrowed' },
];

export const mockInsights: Insight[] = [
  { id: '1', title: 'Food Spending High', description: 'You spent 22% more on food this month compared to your previous 3-month average. Consider home cooking.', type: 'warning' },
  { id: '2', title: 'Savings Efficiency', description: 'Your savings rate is at 24%. Increasing this by 5% could help you reach your retirement goal 2 years earlier.', type: 'positive' },
  { id: '3', title: 'Subscription Intelligence', description: 'You have 4 active digital subscriptions. You haven\'t used Disney+ in 3 weeks.', type: 'neutral' },
  { id: '4', title: 'Savings Warning', description: 'Your savings decreased for 2 consecutive months. Review your "Entertainment" category spending.', type: 'warning' },
];

export const mockChatHistory: ChatMessage[] = [
  { id: '1', text: 'Namaste! I am your FinVantage Assistant. How can I help you with your wealth today?', sender: 'bot', timestamp: '10:00 AM' },
  { id: '2', text: 'What is my current total balance?', sender: 'user', timestamp: '10:01 AM' },
  { id: '3', text: 'Your total balance across all accounts is ₹ 1,25,000.50.', sender: 'bot', timestamp: '10:01 AM' },
];

export const reportData = {
  monthly: {
    categories: [
      { name: 'Rent', value: 15000 },
      { name: 'Food', value: 8500 },
      { name: 'Transport', value: 2450 },
      { name: 'Entertainment', value: 6200 },
      { name: 'Other', value: 27850 }
    ],
    daily: [
      { day: '01', amount: 15000 },
      { day: '05', amount: 2000 },
      { day: '10', amount: 350 },
      { day: '12', amount: 2450 },
      { day: '15', amount: 899 },
      { day: '18', amount: 5000 },
      { day: '25', amount: 1200 },
      { day: '30', amount: 3000 }
    ]
  },
  yearly: {
    trend: [
      { month: 'Jan', income: 185000, expense: 60000 },
      { month: 'Feb', income: 185000, expense: 55000 },
      { month: 'Mar', income: 190000, expense: 70000 },
      { month: 'Apr', income: 185000, expense: 58000 },
      { month: 'May', income: 185000, expense: 62000 },
      { month: 'Jun', income: 210000, expense: 65000 }
    ],
    savings: [
      { month: 'Jan', value: 45000 },
      { month: 'Feb', value: 48000 },
      { month: 'Mar', value: 42000 },
      { month: 'Apr', value: 50000 },
      { month: 'May', value: 47000 },
      { month: 'Jun', value: 55000 }
    ]
  }
};
