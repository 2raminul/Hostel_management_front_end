import * as yup from "yup";
import { getRequiredMessage } from "./messages";

export const categoryAddSchema = yup.object({
  name: yup.string().required(getRequiredMessage("Category Name")),
  reusable: yup
    .boolean()
    .required(getRequiredMessage("Reusability declaration")),
  unit: yup.string().required(getRequiredMessage("Unit")),
  isInventoryItem: yup.boolean().required("Inventory item selection"),
});
