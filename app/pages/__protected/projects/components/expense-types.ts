export type Expense = {
  id: string;
  date: string; // YYYY-MM-DD
  payee: string;
  category: string;
  amount: number;
  notes?: string;
  receiptUrl?: string;
};
