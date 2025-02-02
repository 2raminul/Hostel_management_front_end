import { PaginatedQueryType } from "../types";

export type AddExpensePropsType = {
  categoryId: number;
  brand: string;
  remarks?: string | undefined;
  quantity: number;
  unitPrice: number;
  expenseDate: Date;
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
};

export type ExpenseQueryResponseType = {
  data: Expense[];
  count: number;
};
