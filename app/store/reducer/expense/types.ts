import { PaginatedQueryType } from "../types";

export type AddExpensePropsType = {
  categoryId: number;
  brand: string;
  remarks?: string | undefined;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  expenseDate: Date;
  settlementAccountId?: number | null;
};

export type EditExpensePropsType = {
  id: number;
  brand: string;
  remarks: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  expenseDate: Date;
  settlementAccountId?: number | null;
};

export type ExpenseFilterType = {
  categoryId?: number;
  brand?: string;
  purchaseDateAfter?: Date;
  purchaseDateBefore?: Date;
};

export type ExpenseQueryType = ExpenseFilterType & PaginatedQueryType;

export type Expense = {
  id: number;
  categoryName: string;
  brand: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  expenseDate: Date;
  remarks?: string;
  settlementAccount?: string | null;
  settlementAccountId?: number | null;
  settlementAccountName?: string | null;
};
export type ExpenseHistoryType = {
  id: number;
  categoryName: string;
  brand: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  expenseDate: Date;
  remarks?: string;
  updatedBy: string;
  version: Date;
};

export type ExpenseQueryResponseType = {
  data: Expense[];
  count: number;
};

export type ExpenseHistoryQueryResponseType = {
  data: ExpenseHistoryType[];
  count: number;
};
