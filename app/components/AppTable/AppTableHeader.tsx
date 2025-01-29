import { Checkbox, TableCell, TableHead, TableRow } from "@mui/material";
import { FC, useState } from "react";

import { TableHeader } from "../types";

export const AppTableHeader: FC<{ headers: TableHeader[] }> = ({ headers }) => {
  return (
    <TableHead>
      <TableRow sx={{ backgroundColor: "secondary.light" }}>
        {headers.map((header) => (
          <TableCell
            key={header.label}
            style={{
              width: header.width,
              fontWeight: 700,
            }}
            sx={{
              backgroundColor: "inherit",
              color: "white",
            }}
          >
            {header.label}
            {header.isSelectable && header.onSelectionChange && (
              <Checkbox
                onChange={(e) => {
                  if (header.onSelectionChange) {
                    header.onSelectionChange(!!e.target.checked);
                  }
                }}
                checked={header.isChecked}
              />
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
