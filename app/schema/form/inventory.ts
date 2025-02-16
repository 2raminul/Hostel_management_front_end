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
