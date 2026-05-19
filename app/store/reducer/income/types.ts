import { PaginatedQueryType } from "../types";

export type PaymentMethod = {
  id: number;
  name: string;
  description?: string;
  isActive: boolean;
};

export type IncomeEntry = {
  id: number;
  amount: number;
  incomeDate: string;
  remarks?: string;
  bedLabel: string;
  roomNumber: string;
  paymentMethod: string;
  bookingPlatform?: string;
  settlementAccount?: string | null;
  settlementAccountId?: number | null;
  settlementAccountName?: string | null;
  createdBy?: string;
};

export type IncomeFilterType = {
  roomId?: number;
  bedId?: number;
  dateFrom?: string;
  dateTo?: string;
};

export type IncomeQueryType = IncomeFilterType & PaginatedQueryType;

export type IncomeQueryResponseType = {
  data: IncomeEntry[];
  count: number;
};

export type AddIncomeEntryType = {
  bedId: number;
  paymentMethodId: number;
  amount: number;
  incomeDate: string;
  remarks?: string;
  bookingPlatformId?: number;
  settlementAccountId?: number | null;
};

export type DailyIncomeSummary = {
  id: number;
  date: string;
  totalAmount: number;
  totalEntries: number;
  roomNumber: string;
  roomId: number;
};
