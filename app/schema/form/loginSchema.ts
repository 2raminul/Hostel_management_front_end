import * as yup from "yup";
import { getRequiredMessage } from "./messages";

export const loginSchema = yup.object({
  email: yup.string().required(getRequiredMessage("Email ID")),
  password: yup.string().required(getRequiredMessage("Initial Password")),
});
