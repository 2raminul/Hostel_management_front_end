import { TableBody, TableRow } from "@mui/material";
import { FC } from "react";

import { AppTableCell } from "./AppTableCell";
import { AppTableDataLoading } from "./AppTableDataLoading";
import { AppTableErrorDataLoading } from "./AppTableErrorDataLoading";
import { AppTableNoData } from "./AppTableNoData";
import { v4 as uuidv4 } from "uuid";
export const AppTableBody: FC<{
  isDataLoading: boolean;
  isSuccess: boolean;
  data?: any;
  isError: boolean;
  numberOfColumns: number;
}> = ({ isDataLoading, isSuccess, numberOfColumns, data, isError }) => {
  return (
    <TableBody>
      {isDataLoading ? (
        <TableRow>
          <AppTableDataLoading numberOfColumns={numberOfColumns} />
        </TableRow>
      ) : (
        isSuccess &&
        (!!data?.length ? (
          data.map((row: any) => (
            <TableRow
              key={row.id || uuidv4()}
              sx={{
                backgroundColor: !!row.deleted ? "secondary.main" : "",
                ":hover": {
                  backgroundColor: "secondary.main",
                },
              }}
            >
              {Object.keys(row).map((objKey) => (
                <>
                  {objKey !== "deleted" && (
                    <AppTableCell key={objKey}>{row[objKey]}</AppTableCell>
                  )}
                </>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <AppTableNoData numberOfColumns={numberOfColumns} />
          </TableRow>
        ))
      )}
      {isError && (
        <TableRow>
          <AppTableErrorDataLoading numberOfColumns={numberOfColumns} />
        </TableRow>
      )}
    </TableBody>
  );
};
