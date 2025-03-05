import * as yup from "yup";
import { getRequiredMessage } from "./messages";

export const inventoryItemAddSchema = yup.object({
  categoryId: yup.number().required(getRequiredMessage("Category")),
  brand: yup.string().required(getRequiredMessage("Brand name")),
  remarks: yup
    .string()
    .required(getRequiredMessage("Remarks"))
    .max(500, "Remarks cannot exceed 500 characters"),
  quantity: yup.number().required(getRequiredMessage("Quantity")),
});

export const useInventoryItemSchema = yup.object({
  inventoryItemId: yup.number().required(),
  usageCount: yup.number().required(getRequiredMessage("Disburse count")),
  remarks: yup
    .string()
    .required(getRequiredMessage("Remarks"))
    .max(500, "Remarks cannot exceed 500 characters"),
});

export const sellInventoryItemSchema = yup.object({
  inventoryItemId: yup.number().required(),
  sellCount: yup.number().required(getRequiredMessage("Sold count")),
  saleUnitPrice: yup.number().required(getRequiredMessage("Sale unit price")),
  remarks: yup
    .string()
    .required(getRequiredMessage("Remarks"))
    .max(500, "Remarks cannot exceed 500 characters"),
});

export const reuseInventoryItemSchema = yup.object({
  inventoryItemId: yup.number().required(),
  stateUpdateType: yup.string().required(),
  count: yup.number().required(getRequiredMessage("Count")),
  remarks: yup
    .string()
    .required(getRequiredMessage("Remarks"))
    .max(500, "Remarks cannot exceed 500 characters"),
});
