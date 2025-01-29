import { TableCell } from "@mui/material";
import { FC } from "react";

import { AppLoader } from "../AppLoader";

export const AppTableDataLoading: FC<{ numberOfColumns: number }> = ({
  numberOfColumns,
}) => {
  return (
    <TableCell colSpan={numberOfColumns}>
      <div className="w-100 flex justify-center">
        <AppLoader />
      </div>
    </TableCell>
  );
};
