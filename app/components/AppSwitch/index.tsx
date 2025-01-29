import { Switch } from "@mui/material";
import { FC } from "react";

import { AppOptionLabel } from "../AppOptionLabel";
import { AppSwitchProps } from "../types";

const AppSwitch: FC<AppSwitchProps> = ({
  handleChange,
  isChecked,
  name,
  label,
  isRequired,
}) => {
  return (
    <div>
      <AppOptionLabel text={label} isRequired={isRequired} />
      <Switch checked={isChecked} onChange={handleChange} />
    </div>
  );
};

export default AppSwitch;
