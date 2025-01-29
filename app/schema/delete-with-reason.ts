import * as yup from "yup";
import { getRequiredMessage } from "./form/messages";

export const deleteSchema = yup.object({
  deletedReason: yup.string().required(getRequiredMessage("Deletion reason")),
});
