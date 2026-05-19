"use client";

import { Autocomplete, Box, TextField } from "@mui/material";
import { FC, useMemo } from "react";

import { AppFormError } from "../AppFormError";
import { AppOptionLabel } from "../AppOptionLabel";
import { AppSearchableDropdownProps } from "../types";

/** MUI Autocomplete treats non-string options as `{ label }` objects; `null` in the array causes `.label` on null. */
function sanitizeStringOptions(list: string[]): string[] {
  return list.filter((o): o is string => typeof o === "string");
}

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
  const options = useMemo(
    () => sanitizeStringOptions(optionList ?? []),
    [optionList]
  );

  const fieldProps =
    field != null && typeof field === "object" && !Array.isArray(field)
      ? field
      : {};

  return (
    <Box
      sx={{
        width: "100%",
        minWidth: 0,
        maxWidth: "100%",
      }}
      className="app-searchable-dropdown"
    >
      {!!labelText && (
        <AppOptionLabel text={labelText} isRequired={isRequired} />
      )}
      <Autocomplete
        key={propKey}
        {...fieldProps}
        fullWidth
        disablePortal
        id="combo-box-demo"
        sx={{
          width: "100%",
          backgroundColor: "#ffffff",
          "& .MuiOutlinedInput-root": {
            minWidth: "min(100%, 18rem)",
          },
        }}
        options={options}
        freeSolo={freeSolo}
        size={size || "medium"}
        value={previousValue ?? null}
        getOptionDisabled={getOptionDisabled}
        onInputChange={(_e, val) => onInputChange(val as any)}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={placeHolder}
            fullWidth
            disabled={disableInput}
          />
        )}
      />
      {error && <AppFormError text={error} classes="text-error-100" />}
    </Box>
  );
};
