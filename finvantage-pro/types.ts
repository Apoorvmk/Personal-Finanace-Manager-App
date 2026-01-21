
export interface BalanceData {
  balance: number;
  income: number;
  expense: number;
  savings: number;
}

export interface Expense {
  id: string;
  amount: number;
  category: string;
  date: string;
  description: string;
}

export interface Income {
  id: string;
  amount: number;
  source: string;
  date: string;
}

export interface Budget {
  category: string;
  limit: number;
  spent: number;
}

export interface Loan {
  id: string;
  person: string;
  amount: number;
  dueDate: string;
  status: 'Pending' | 'Paid' | 'Overdue';
  type: 'Lent' | 'Borrowed';
}

export interface Insight {
  id: string;
  title: string;
  description: string;
  type: 'warning' | 'positive' | 'neutral';
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

export type Screen = 
  | 'LOGIN' 
  | 'DASHBOARD' 
  | 'ADD_EXPENSE' 
  | 'ADD_INCOME' 
  | 'EXPENSE_LIST' 
  | 'REPORTS'
  | 'BUDGET' 
  | 'LENDING' 
  | 'INSIGHTS' 
  | 'CHATBOT';
