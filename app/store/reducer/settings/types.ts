export type BookingPlatform = {
  id: number;
  name: string;
  status: boolean;
};

export type BankInfo = {
  id: number;
  accountNumber: string;
  status: boolean;
};

export type OnlineCard = {
  id: number;
  name: string;
  cardNumber?: string;
  status: boolean;
  bankAccountNumber?: string;
};

export type SettlementAccount = {
  id: number;
  name: string;
  accountKind: string;
  bankInfoId: number | null;
  sortOrder: number;
  isActive: boolean;
};
