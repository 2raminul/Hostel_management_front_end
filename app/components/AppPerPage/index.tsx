import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tooltip,
} from "@mui/material";
import { FC } from "react";

const perPageSelections = [10, 20, 50, 100];

export const AppPerPage: FC<{
  defaultValue: number;
  handleChange: (event: SelectChangeEvent<number>) => void;
}> = ({ defaultValue, handleChange }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="mb-3">Records per page</div>
      <Tooltip title="Records per page">
        <FormControl sx={{ mb: 2, ml: 2, width: 75 }}>
          <Select
            defaultValue={defaultValue}
            onChange={handleChange}
            label=""
            size="small"
          >
            {perPageSelections.map((v) => (
              <MenuItem value={v} key={v}>
                {v}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Tooltip>
    </div>
  );
};
