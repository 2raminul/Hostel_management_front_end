import * as yup from "yup";
import { getRequiredMessage } from "./messages";

export const expenseAddSchema = yup.object({
  categoryId: yup.number().required(getRequiredMessage("Category")),
  brand: yup.string().required(getRequiredMessage("Brand name")),
  remarks: yup
    .string()
    .nullable()
    .max(500, "Remarks cannot exceed 500 characters")
    .optional(),
  quantity: yup.number().required(getRequiredMessage("Quantity")),
  unitPrice: yup.number().required(getRequiredMessage("Unit price")),
  totalPrice: yup.number().required(),
  expenseDate: yup.date().required("Expense Date"),
});
