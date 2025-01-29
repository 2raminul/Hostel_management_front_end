import { TableCell } from "@mui/material";
import { FC } from "react";

export const AppTableErrorDataLoading: FC<{ numberOfColumns: number }> = ({
  numberOfColumns,
}) => {
  return (
    <TableCell colSpan={numberOfColumns}>
      <div className="w-100 flex justify-center">
        <span className="font-bold text-error-100">
          Error occurred while loading data
        </span>
      </div>
    </TableCell>
  );
};
