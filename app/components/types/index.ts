import { PaginationItemProps, PaginationProps } from "@mui/material";

import { AccessLevel } from "../../schema/enum/accessLevel";
import { AccessType } from "../../schema/enum/accessType";

export type ComponentWithChildren = {
  children: React.ReactNode;
};

export type AppRadioButtonProps = {
  onSelect: (value: string) => void;
  selectedValue: string;
  value: AccessLevel | AccessType;
  disabled?: boolean;
};

export type AppTravelDateProps = {
  selectedJourneyDate: Date | string;
  selectedReturnDate: Date | string;
  onSelectJourneyDate: (value: Date) => void;
  onSelectReturnDate: (value: Date) => void;
  isReturnRequired: boolean;
};

export type AppDatePickerProps = {
  onSelectDate: (value: Date | undefined) => void;
  selectedDate?: Date | undefined;
  isOpen?: boolean;
  maxWidth: number;
  small?: boolean;
  notRemovable?: boolean;
  errorText?: string;
};
export type NumberOfPassengers = {
  adult: number;
  children: number;
  infant: number;
};

export type AppPassengerProps = {
  adjustPassengerCount: (value: any) => void;
  numberOfPassengers: NumberOfPassengers;
};

export type AppClassSelectionProps = {
  onSelect: (value: string) => void;
  selectedValue: string;
};

export type AppAdditionalSupportProps = {
  selectedOptions: string | undefined;
  onSelectionChange: (value: string | undefined) => void;
};

export type AppSearchableDropdownProps = {
  labelText?: string;
  onInputChange: (value: string | null) => void;
  optionList: string[];
  freeSolo: boolean;
  error?: string;
  placeHolder?: string;
  previousValue?: string;
  propKey?: string;
  size?: "small" | "medium";
  field: any;
  isRequired?: boolean;
  disableInput?: boolean;
  getOptionDisabled?: (option: string) => boolean;
};

export type AppAsyncSearchableDropdownProps = {
  labelText: string;
  onInputChange: (value: string | null) => void;
  handleKeyStrokes: (event: any) => void;
  freeSolo: boolean;
  optionList: string[];
  error?: string;
  placeHolder?: string;
  previousValue?: string;
  field: any;
};

export type ProgramDataType = {
  ProgramID: number;
  HR_CoreProgramID: string;
  ProgramName: string;
};

export type AppBillingProgramProps = {
  onSelectionChange: (value: string | undefined) => void;
  setProgramName: (value: string | undefined) => void;
  ownProgramId?: string;
  maxWidth?: number;
  preselected?: string;
  propKey?: string;
};

export type ProjectDataType = {
  ProjectID: number;
  ProjectName: string;
  Status: string;
  ProgramID: number;
  ERPProjectCode: string;
  HR_CoreProgramID: string;
  NoOfStaffs: number;
};

export type AppBillingProjectProps = {
  hrCoreProgramId?: string;
  maxWidth?: number;
  ownProjectId?: number;
  onSelectionChange: (value: string | undefined) => void;
  setProjectName: (value: string | undefined) => void;
  preSelected?: string;
  propKey?: string;
};

export type AppBillingCodeProps = {
  onChange: (value: string | undefined) => void;
  preSelected?: string;
};

export type AppApproverSearchProps = {
  onSelectionChange: (value: string | undefined) => void;
  setApproverName: (value: string | undefined) => void;
  setApproverDesignation: (value: string | undefined) => void;
  preSelected?: string;
  autoCompleteFieldSize: string;
  propKey?: string;
  skipAuthorizedApprovers?: boolean;
};

export type TableHeader = {
  label: string;
  width: string;
  isChecked?: boolean;
  isSelectable?: boolean;
  onSelectionChange?: (isChecked: boolean) => void;
};

export type StyledPaginationProps = {
  onPageChange?: (page: number) => void;
  page?: number;
} & PaginationItemProps &
  PaginationProps;

export type AppSwitchProps = {
  name: string;
  label: string;
  isChecked: boolean;
  isRequired: boolean;
  handleChange: () => void;
};

export type ActionType = {
  view?: boolean;
  modify?: boolean;
  create?: boolean;
  delete?: boolean;
};
