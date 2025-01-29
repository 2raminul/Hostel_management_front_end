import { FC, useState } from "react";
import { useDispatch } from "../../store/hooks";
import AppInputField from "../AppInputField";
import AppButton from "../AppButton";
import TuneIcon from "@mui/icons-material/Tune";
import { setApiConfigName } from "../../store/reducer/app-configuration";

export const ApiConfigFilter: FC = () => {
  const dispatch = useDispatch();
  const [configName, setApiConfigSearchName] = useState("");
  const applyFilter = () => {
    dispatch(setApiConfigName(configName));
  };
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-3 flex justify-start md:justify-end md:items-center">
        Filter by Config Name:
      </div>
      <div className="col-span-12 md:col-span-4">
        <AppInputField
          size="small"
          placeholder="Type in"
          onChange={(e) => setApiConfigSearchName(e.target.value)}
        />
      </div>
      <div className="col-span-12 md:col-span-5">
        <AppButton
          onClick={applyFilter}
          className="w-full md:w-24"
          startIcon={<TuneIcon />}
        >
          Filter
        </AppButton>
      </div>
    </div>
  );
};
