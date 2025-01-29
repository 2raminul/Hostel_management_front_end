import { FC, ReactNode } from "react";

import { AppPageHeader } from "../AppPageHeader";
import { Divider } from "@mui/material";
import { AppDataCount } from "../AppDataCount";

export const AppContainer: FC<{
  children: ReactNode;
  topPanel: ReactNode;
  pageHeader: string;
}> = ({ pageHeader, children, topPanel }) => {
  return (
    <div className="bg-white rounded-md shadow-2xl m-5">
      <div className="p-2 lg:px-10">
        <AppPageHeader text={pageHeader} />
      </div>
      <Divider />
      <div className="px-2 lg:px-10">
        {topPanel}
        {children}
      </div>
    </div>
  );
};
