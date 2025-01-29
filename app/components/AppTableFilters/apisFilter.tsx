import { FC, useState } from "react";

import { APIMethodTypes } from "../../schema/enum/apiMethods";
import { useDispatch } from "../../store/hooks";
import { setApisTopPanelFilterOptions } from "../../store/reducer/ensureAccess/slice";
import AppInputField from "../AppInputField";
import { AppSearchableDropdown } from "../AppSearchableDropdown";
import AppButton from "../AppButton";
import TuneIcon from "@mui/icons-material/Tune";

export const ApisFilter: FC = () => {
  const dispatch = useDispatch();
  const [method, setMethod] = useState<APIMethodTypes | undefined>();
  const [endpoint, setEndpoint] = useState("");
  const applyFilter = () => {
    if (method && endpoint) {
      dispatch(
        setApisTopPanelFilterOptions({ method, endPointPattern: endpoint })
      );
    }
  };
  return (
    <>
      <div className="grid grid-cols-12 gap-1 px-2">
        <div className="col-span-12 md:col-span-2 flex justify-start md:justify-end md:items-center">
          Method:
        </div>
        <div className="col-span-12 md:col-span-3 flex justify-center items-center">
          <AppSearchableDropdown
            placeHolder="Type in & select"
            freeSolo={false}
            optionList={Object.values(APIMethodTypes)}
            onInputChange={(value) => setMethod(value as APIMethodTypes)}
            field=""
            size="small"
          />
        </div>
        <div className="md:pl-2 col-span-12 md:col-span-2 flex justify-start md:justify-end md:items-center">
          Endpoint:
        </div>
        <div className="col-span-12 md:col-span-3 flex justify-center items-center">
          <AppInputField
            size="small"
            placeholder="Type in"
            onChange={(e) => setEndpoint(e.target.value)}
          />
        </div>
        <div className="col-span-12 md:col-span-2 flex items-center">
          <AppButton
            onClick={applyFilter}
            startIcon={<TuneIcon />}
            className="w-full md:w-24"
          >
            <div className="flex px-1 items-center">Filter</div>
          </AppButton>
        </div>
      </div>
    </>
  );
};
