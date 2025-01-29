import { Tooltip } from "@mui/material";
import { FC, ReactNode } from "react";

export const AppTooltip: FC<{
  title: string;
  hasPermission: boolean;
  children: ReactNode;
}> = ({ title, hasPermission, children }) => {
  return (
    <Tooltip
      title={`${title}${hasPermission ? "" : " - Action not permitted"}`}
    >
      <span>{children}</span>
    </Tooltip>
  );
};
