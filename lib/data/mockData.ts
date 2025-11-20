import { Budget, Category, Insight, Transaction, User } from '../../types';

export const categories: Category[] = [
  { id: '1', name: 'Food & Dining', icon: '🍔', color: '#FF6B6B' },
  { id: '2', name: 'Transportation', icon: '🚗', color: '#4ECDC4' },
  { id: '3', name: 'Shopping', icon: '🛍️', color: '#FFE66D' },
  { id: '4', name: 'Entertainment', icon: '🎬', color: '#95E1D3' },
  { id: '5', name: 'Healthcare', icon: '⚕️', color: '#F38181' },
  { id: '6', name: 'Bills & Utilities', icon: '💡', color: '#AA96DA' },
  { id: '7', name: 'Education', icon: '📚', color: '#FCBAD3' },
  { id: '8', name: 'Travel', icon: '✈️', color: '#A8D8EA' },
  { id: '9', name: 'Personal Care', icon: '💅', color: '#FDCB9E' },
  { id: '10', name: 'Other', icon: '📦', color: '#B4B4B4' },
];

export const transactions: Transaction[] = [
  {
    id: '1',
    amount: 45.50,
    category: 'Food & Dining',
    date: '2025-11-16',
    paymentMethod: 'Credit Card',
    notes: 'Lunch at Italian restaurant',
    type: 'expense'
  },
  {
    id: '2',
    amount: 120.00,
    category: 'Shopping',
    date: '2025-11-15',
    paymentMethod: 'Debit Card',
    notes: 'New shoes',
    type: 'expense'
  },
  {
    id: '3',
    amount: 25.00,
    category: 'Transportation',
    date: '2025-11-15',
    paymentMethod: 'Cash',
    notes: 'Uber ride',
    type: 'expense'
  },
  {
    id: '4',
    amount: 89.99,
    category: 'Bills & Utilities',
    date: '2025-11-14',
    paymentMethod: 'Credit Card',
    notes: 'Internet bill',
    type: 'expense'
  },
  {
    id: '5',
    amount: 15.50,
    category: 'Food & Dining',
    date: '2025-11-14',
    paymentMethod: 'Credit Card',
    notes: 'Coffee and pastry',
    type: 'expense'
  },
  {
    id: '6',
    amount: 200.00,
    category: 'Entertainment',
    date: '2025-11-13',
    paymentMethod: 'Credit Card',
    notes: 'Concert tickets',
    type: 'expense'
  },
  {
    id: '7',
    amount: 55.30,
    category: 'Food & Dining',
    date: '2025-11-12',
    paymentMethod: 'Debit Card',
    notes: 'Grocery shopping',
    type: 'expense'
  },
  {
    id: '8',
    amount: 40.00,
    category: 'Transportation',
    date: '2025-11-11',
    paymentMethod: 'Cash',
    notes: 'Gas',
    type: 'expense'
  },
  {
    id: '9',
    amount: 150.00,
    category: 'Healthcare',
    date: '2025-11-10',
    paymentMethod: 'Credit Card',
    notes: 'Doctor visit',
    type: 'expense'
  },
  {
    id: '10',
    amount: 35.00,
    category: 'Personal Care',
    date: '2025-11-09',
    paymentMethod: 'Debit Card',
    notes: 'Haircut',
    type: 'expense'
  },
  {
    id: '11',
    amount: 3500.00,
    category: 'Other',
    date: '2025-11-01',
    paymentMethod: 'Bank Transfer',
    notes: 'Monthly salary',
    type: 'income'
  },
  {
    id: '12',
    amount: 75.00,
    category: 'Food & Dining',
    date: '2025-11-08',
    paymentMethod: 'Credit Card',
    notes: 'Dinner with friends',
    type: 'expense'
  },
  {
    id: '13',
    amount: 20.00,
    category: 'Transportation',
    date: '2025-11-07',
    paymentMethod: 'Cash',
    notes: 'Parking fee',
    type: 'expense'
  },
  {
    id: '14',
    amount: 99.00,
    category: 'Shopping',
    date: '2025-11-06',
    paymentMethod: 'Credit Card',
    notes: 'Online shopping',
    type: 'expense'
  },
  {
    id: '15',
    amount: 12.50,
    category: 'Food & Dining',
    date: '2025-11-05',
    paymentMethod: 'Debit Card',
    notes: 'Breakfast',
    type: 'expense'
  },
  {
    id: '16',
    amount: 180.00,
    category: 'Bills & Utilities',
    date: '2025-11-01',
    paymentMethod: 'Credit Card',
    notes: 'Electricity bill',
    type: 'expense'
  },
  {
    id: '17',
    amount: 45.00,
    category: 'Entertainment',
    date: '2025-11-04',
    paymentMethod: 'Credit Card',
    notes: 'Movie tickets',
    type: 'expense'
  },
  {
    id: '18',
    amount: 30.00,
    category: 'Food & Dining',
    date: '2025-11-03',
    paymentMethod: 'Cash',
    notes: 'Pizza delivery',
    type: 'expense'
  },
];

export const budgets: Budget[] = [
  { id: '1', category: 'Food & Dining', limit: 500, spent: 288.80, period: 'monthly' },
  { id: '2', category: 'Transportation', limit: 200, spent: 85.00, period: 'monthly' },
  { id: '3', category: 'Shopping', limit: 300, spent: 219.00, period: 'monthly' },
  { id: '4', category: 'Entertainment', limit: 250, spent: 245.00, period: 'monthly' },
  { id: '5', category: 'Bills & Utilities', limit: 400, spent: 269.99, period: 'monthly' },
  { id: '6', category: 'Healthcare', limit: 200, spent: 150.00, period: 'monthly' },
];

export const insights: Insight[] = [
  {
    id: '1',
    type: 'warning',
    title: 'High Entertainment Spending',
    description: 'You\'ve spent 98% of your entertainment budget this month. Consider reducing non-essential entertainment expenses.',
    icon: '⚠️'
  },
  {
    id: '2',
    type: 'tip',
    title: 'Save on Food',
    description: 'You spend 30% more on dining out compared to last month. Cooking at home could save you $150/month.',
    icon: '💡'
  },
  {
    id: '3',
    type: 'achievement',
    title: 'Great Job!',
    description: 'You\'re under budget in Transportation this month. Keep up the good work!',
    icon: '🎉'
  },
  {
    id: '4',
    type: 'tip',
    title: 'Bill Payment Reminder',
    description: 'Your electricity bill is usually due around the 20th. Don\'t forget to pay on time to avoid late fees.',
    icon: '📅'
  },
];

export const user: User = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
  currency: 'USD'
};

export const paymentMethods = [
  'Credit Card',
  'Debit Card',
  'Cash',
  'Bank Transfer',
  'Digital Wallet'
];
