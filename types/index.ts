export interface Transaction {
  id: string;
  amount: number;
  category: string;
  date: string;
  paymentMethod: string;
  notes: string;
  type: 'expense' | 'income';
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface Budget {
  id: string;
  category: string;
  limit: number;
  spent: number;
  period: 'monthly' | 'weekly';
}

export interface Insight {
  id: string;
  type: 'warning' | 'tip' | 'achievement';
  title: string;
  description: string;
  icon: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  currency: string;
}

export interface FilterOptions {
  categories: string[];
  minAmount?: number;
  maxAmount?: number;
  startDate?: string;
  endDate?: string;
  paymentMethods: string[];
}
