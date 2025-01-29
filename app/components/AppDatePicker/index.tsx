import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { FC } from "react";

import { AppFormError } from "../AppFormError";
import { AppDatePickerProps } from "../types";

export const AppDatePicker: FC<AppDatePickerProps> = ({
  selectedDate,
  onSelectDate,
  isOpen,
  maxWidth,
  notRemovable,
  small,
  errorText,
}) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          open={isOpen}
          defaultValue={selectedDate}
          onChange={(value) => onSelectDate(value || undefined)}
          sx={{
            maxWidth: `${maxWidth}px`,
            backgroundColor: "#ffffff",
            maxHeight: "10px",
          }}
          slotProps={{
            textField: { size: small ? "small" : "medium" },
            actionBar: {
              actions: notRemovable ? [] : ["clear"],
            },
          }}
        />
      </LocalizationProvider>
      {errorText && <AppFormError text={errorText} classes="text-error-100" />}
    </>
  );
};
