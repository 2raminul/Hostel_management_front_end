import { FC, useState } from "react";

import { BooleanType } from "../../schema/enum/booleanType";
import { useDispatch } from "../../store/hooks";
import { useFetchBusinessListQuery } from "../../store/reducer/ensureAccess";
import { setJwtFilter } from "../../store/reducer/ensureAccess/slice";
import { AppSearchableDropdown } from "../AppSearchableDropdown";
import AppButton from "../AppButton";
import TuneIcon from "@mui/icons-material/Tune";

export const ApiJwtUserFilter: FC = () => {
  const dispatch = useDispatch();
  const [businessId, setBusinessId] = useState(0);
  const [shared, setsharedStatus] = useState<boolean | undefined>();

  const {
    isLoading: isBusinessesLoading,
    isFetching: isBusinessesFetching,
    data: existingBusinesses,
  } = useFetchBusinessListQuery();

  const applyFilter = () => {
    dispatch(
      setJwtFilter({
        businessId,
        shared,
      })
    );
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-5">
      <div className="md:col-span-2" />
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-4">Filter by Business:</div>
        <div className="col-span-12 md:col-span-8">
          <AppSearchableDropdown
            placeHolder="Type in or Select"
            size="small"
            freeSolo={false}
            optionList={
              !(isBusinessesLoading || isBusinessesFetching)
                ? existingBusinesses?.map((eb) => eb.name) || []
                : []
            }
            onInputChange={(value) =>
              setBusinessId(
                existingBusinesses?.find((eb) => eb.name == value)?.id || 0
              )
            }
            field=""
          />
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6">
          Filter by Shared Status:
        </div>
        <div className="col-span-12 md:col-span-6">
          <AppSearchableDropdown
            placeHolder="Shared or not"
            size="small"
            freeSolo={false}
            optionList={Object.values(BooleanType)}
            onInputChange={(value) =>
              setsharedStatus(
                value ? (BooleanType.TRUE == value ? true : false) : undefined
              )
            }
            field=""
          />
        </div>
      </div>
      <div>
        <AppButton
          className="w-full"
          startIcon={<TuneIcon />}
          onClick={applyFilter}
        >
          <div className="flex px-1 items-center">Filter</div>
        </AppButton>
      </div>
    </div>
  );
};
