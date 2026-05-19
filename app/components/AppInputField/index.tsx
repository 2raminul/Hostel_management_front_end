"use client";
import { TextField, TextFieldProps } from "@mui/material";
import { forwardRef, useId } from "react";

import { AppFormError } from "../AppFormError";
import { AppLoader } from "../AppLoader";
import { AppOptionLabel } from "../AppOptionLabel";

type InputFieldProps = Omit<TextFieldProps, "size" | "variant"> & {
  loading?: boolean;
  labelText?: string;
  required?: boolean;
  errorText?: string;
  pattern?: string;
  isRequired?: boolean;
  size?: "small" | "medium";
};

// eslint-disable-next-line react/display-name
const AppInputField = forwardRef(
  (
    {
      select,
      loading,
      className,
      labelText,
      required,
      errorText,
      isRequired,
      size,
      ...rest
    }: InputFieldProps,
    ref
  ) => {
    const id = useId();
    const restRecord = rest as Record<string, unknown>;
    const textFieldProps = { ...rest };
    if (Object.prototype.hasOwnProperty.call(restRecord, "value")) {
      const v = restRecord.value;
      (textFieldProps as { value?: unknown }).value =
        v === undefined || v === null ? "" : v;
    }
    return (
      <>
        {labelText && (
          <AppOptionLabel text={labelText} isRequired={isRequired} />
        )}
        <div className="w-full md:w-auto">
          <TextField
            id={id}
            inputRef={ref}
            size={size || "small"}
            variant="outlined"
            disabled={loading}
            fullWidth
            sx={{ background: "#ffffff" }}
            InputProps={{
              ...(select &&
                loading && {
                  endAdornment: <AppLoader />,
                }),
              classes: {
                root: "rounded overflow-hidden",
                input: "text-base",
              },
            }}
            InputLabelProps={{
              classes: {
                filled: "top-0.5 text-primary-200",
                focused: "top-0.5 text-primary-200",
                outlined: "top-[5px] text-primary-200",
                error: "!text-status-error",
              },
            }}
            SelectProps={{
              MenuProps: {
                PaperProps: {
                  className: "max-h-64",
                },
                disablePortal: true,
              },
            }}
            FormHelperTextProps={{
              classes: {
                error: "text-status-error",
              },
            }}
            {...(className && { className: className })}
            {...(select && { select: true })}
            {...textFieldProps}
          />
        </div>
        {errorText && (
          <AppFormError text={errorText} classes="text-error-100" />
        )}
      </>
    );
  }
);

export default AppInputField;
