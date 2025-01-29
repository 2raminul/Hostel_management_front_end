import { Divider } from "@mui/material";
import { FC } from "react";

export const AppPageHeader: FC<{ text: string }> = ({ text }) => {
  return <div className="text-2xl font-bold my-3 text-gray-350">{text}</div>;
};
