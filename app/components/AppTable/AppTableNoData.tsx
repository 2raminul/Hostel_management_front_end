import { TableCell } from "@mui/material";
import { FC } from "react";

export const AppTableNoData: FC<{ numberOfColumns: number }> = ({
  numberOfColumns,
}) => {
  return (
    <TableCell colSpan={numberOfColumns}>
      <div className="w-100 flex justify-center">
        <span className="font-bold text-gray-500">No data to display</span>
      </div>
    </TableCell>
  );
};
