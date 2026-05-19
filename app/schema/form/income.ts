import * as yup from "yup";
import { getRequiredMessage } from "./messages";

export const incomeEntryAddSchema = yup.object({
  bedId: yup.number().required(getRequiredMessage("Bed")),
  paymentMethodId: yup.number().required(getRequiredMessage("Payment method")),
  amount: yup.number().min(0.01, "Amount must be greater than 0").required(getRequiredMessage("Amount")),
  incomeDate: yup.string().required(getRequiredMessage("Income date")),
  remarks: yup.string().nullable().max(500, "Remarks cannot exceed 500 characters").optional(),
  bookingPlatformId: yup.number().nullable().optional(),
  settlementAccountId: yup.number().nullable().optional(),
});
