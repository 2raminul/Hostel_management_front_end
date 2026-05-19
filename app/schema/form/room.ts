import * as yup from "yup";
import { getRequiredMessage } from "./messages";

export const roomAddSchema = yup.object({
  roomNumber: yup.string().required(getRequiredMessage("Room number")),
  description: yup.string().nullable().optional(),
  totalBeds: yup.number().min(1, "Must have at least 1 bed").required(getRequiredMessage("Total beds")),
});
