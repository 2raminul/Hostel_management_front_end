import { PaginatedQueryType } from "../types";

export type CategoryFilterType = {
  name?: string;
  reusable?: string;
  isInventoryItem?: string;
  isSaleItem?: string;
  unit?: string;
};

export type CategoryQueryType = CategoryFilterType & PaginatedQueryType;

export type Category = {
  id: number;
  name: string;
  reusable: boolean;
  isInventoryItem: boolean;
  isSaleItem: boolean;
  unit: string;
};

export type CategoryQueryResponseType = {
  data: Category[];
  count: number;
};
