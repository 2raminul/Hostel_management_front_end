import { Paper, Table, TableContainer } from "@mui/material";
import { FC } from "react";

import { TableHeader } from "../types";

import { AppTableBody } from "./AppTableBody";
import { AppTableHeader } from "./AppTableHeader";

export const AppTable: FC<{
  headers: TableHeader[];
  isDataLoading: boolean;
  isSuccess: boolean;
  data?: any;
  isError: boolean;
  total?: number;
  page?: number;
}> = ({ headers, isDataLoading, isSuccess, data, isError, total, page }) => {
  return (
    // Replace with AppDataCount
    <div className="grid grid-cols-1">
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer
          sx={{
            maxHeight: "70vh",
            overflowX: "auto", // Enables horizontal scrolling
            width: "100%", // Ensures table takes full width
            "&::-webkit-scrollbar": {
              width: "6px", // Set scrollbar width (make it slim)
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "rgba(0, 0, 0, 0.2)", // Set the thumb (handle) color
              borderRadius: "10px", // Rounded edges for the scrollbar thumb
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "transparent", // Background of the scrollbar track
            },
            scrollbarWidth: "thin", // Firefox: make scrollbar thin
            msOverflowStyle: "auto", // IE / legacy Edge (-ms-overflow-style)
          }}
        >
          <Table
            sx={{
              minWidth: "800px", // Sets minimum width for the table
            }}
            stickyHeader
          >
            <AppTableHeader headers={headers} />
            <AppTableBody
              isDataLoading={isDataLoading}
              isSuccess={isSuccess}
              isError={isError}
              data={data}
              numberOfColumns={headers.length}
            />
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};
