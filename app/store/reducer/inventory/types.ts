import { PaginatedQueryType } from "../types";

export type InventoryFilterType = {
  page: number;
  perPage: number;
  categoryId?: number;
  brand?: string;
};

export type InventoryQueryType = InventoryFilterType & PaginatedQueryType;

export type InventoryItemData = {
  id: number;
  categoryId: number;
  categoryName: string;
  brand: string;
  inStockCount: number;
  isSaleItem: boolean;
  reusableCount: number;
  isReusableItem?: boolean;
  unit: string;
};

export type InventoryQueryResponseType = {
  data: InventoryItemData[];
  count: number;
};
