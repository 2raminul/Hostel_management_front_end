"use client";

import { Autocomplete, TextField } from "@mui/material";
import { FC } from "react";

import { AppFormError } from "../AppFormError";
import { AppOptionLabel } from "../AppOptionLabel";
import { AppSearchableDropdownProps } from "../types";

export const AppSearchableDropdown: FC<AppSearchableDropdownProps> = ({
  labelText,
  onInputChange,
  optionList,
  freeSolo,
  error,
  placeHolder,
  previousValue,
  field,
  size,
  disableInput,
  propKey,
  isRequired,
  getOptionDisabled,
}) => {
  return (
    <>
      {!!labelText && (
        <AppOptionLabel text={labelText} isRequired={isRequired} />
      )}
      <Autocomplete
        key={propKey}
        {...field}
        disablePortal
        id="combo-box-demo"
        sx={{ backgroundColor: "#ffffff", width: "100%;" }}
        options={optionList}
        freeSolo={freeSolo}
        size={size || "medium"}
        value={previousValue}
        getOptionDisabled={getOptionDisabled}
        onInputChange={(_e, val) => onInputChange(val as any)}
        renderInput={(params) => (
          <TextField
            placeholder={placeHolder}
            {...params}
            disabled={disableInput}
          />
        )}
      />
      {error && <AppFormError text={error} classes="text-error-100" />}
    </>
  );
};
