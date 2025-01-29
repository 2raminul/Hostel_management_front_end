"use client";

import { Autocomplete, TextField } from "@mui/material";
import { FC, useState } from "react";

import { AppFormError } from "../AppFormError";
import { AppOptionLabel } from "../AppOptionLabel";
import { AppAsyncSearchableDropdownProps } from "../types";

export const AppAsyncSearchableDropdown: FC<
  AppAsyncSearchableDropdownProps
> = ({
  labelText,
  onInputChange,
  handleKeyStrokes,
  optionList,
  freeSolo,
  error,
  placeHolder,
  previousValue,
  field,
}) => {
  return (
    <>
      <AppOptionLabel text={labelText} />
      <Autocomplete
        key={previousValue}
        {...field}
        disablePortal
        id="combo-box-demo"
        sx={{ backgroundColor: "#ffffff" }}
        options={optionList}
        freeSolo={freeSolo}
        value={previousValue}
        onChange={(_e, val) => onInputChange(val as any)}
        renderInput={(params) => (
          <TextField
            placeholder={placeHolder}
            onInput={handleKeyStrokes}
            {...params}
          />
        )}
      />
      {error && <AppFormError text={error} classes="text-error-100" />}
    </>
  );
};
