"use client";
import { FormControlLabel, Radio } from "@mui/material";
import { FC } from "react";

import { AppRadioButtonProps } from "../types";

export const AppRadioButton: FC<AppRadioButtonProps> = ({
  onSelect,
  selectedValue,
  value,
  disabled,
}) => {
  return (
    <div
      className={`rounded-lg px-4 my-2 mr-[30px] cursor-pointer ${
        selectedValue == value ? "bg-primary-100" : "bg-gray-300"
      }`}
      onClick={() => (disabled ? undefined : onSelect(value))}
    >
      <FormControlLabel
        value={value}
        control={<Radio />}
        label={value}
        onChange={() => onSelect(value)}
        checked={value == selectedValue}
        disabled={disabled}
        sx={{
          ".MuiRadio-colorPrimary.Mui-checked path": {
            fill: "white",
          },
          ".MuiFormControlLabel-label": {
            color: `${selectedValue == value ? "white" : "#4D4F53"}`,
          },
          ".MuiFormControlLabel-label.Mui-disabled": {
            color: `${selectedValue == value ? "white" : "#4D4F53"}`,
          },
        }}
      />
    </div>
  );
};
