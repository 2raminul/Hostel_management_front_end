import { FC, useState } from "react";

import { BooleanType } from "../../schema/enum/booleanType";
import { useDispatch } from "../../store/hooks";
import { useFetchBusinessListQuery } from "../../store/reducer/ensureAccess";
import {
  setApiKeyExpireRangeFrom,
  setApiKeysBusinessId,
  setApiKeysTopPanelFilterOptions,
  setSharedApiKey,
} from "../../store/reducer/ensureAccess/slice";
import { AppDatePicker } from "../AppDatePicker";
import { AppSearchableDropdown } from "../AppSearchableDropdown";
import AppButton from "../AppButton";
import TuneIcon from "@mui/icons-material/Tune";

export const ApiKeyFilter: FC = () => {
  const dispatch = useDispatch();
  const [businessId, setBusinessId] = useState(0);
  const [shared, setSharedApiKey] = useState<boolean | undefined>();
  const [expireRangeFrom, setExpireRangeFrom] = useState<Date | undefined>();
  const [expireRangeTo, setExpireRangeTo] = useState<Date | undefined>();
  const {
    isLoading: isBusinessesLoading,
    isFetching: isBusinessesFetching,
    data: existingBusinesses,
  } = useFetchBusinessListQuery();
  const applyFilter = () => {
    dispatch(
      setApiKeysTopPanelFilterOptions({
        businessId,
        shared,
        expireRangeFrom,
        expireRangeTo,
      })
    );
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-5">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-4">Filter by Business:</div>
        <div className="col-span-12 md:col-span-8">
          <AppSearchableDropdown
            placeHolder="Type In or Select"
            freeSolo={false}
            size="small"
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
            placeHolder="Type in or Select"
            size="small"
            freeSolo={false}
            optionList={Object.values(BooleanType)}
            onInputChange={(value) =>
              setSharedApiKey(
                value ? (BooleanType.TRUE == value ? true : false) : undefined
              )
            }
            field=""
          />
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-4">Expires After:</div>
        <div className="col-span-12 md:col-span-8">
          <AppDatePicker
            onSelectDate={(value) => setExpireRangeFrom(value)}
            maxWidth={300}
            small
          />
        </div>
      </div>
      <div className="grid grid-cols-12 my-3 md:my-0">
        <div className="col-span-12 md:col-span-4">Expires Before:</div>
        <div className="col-span-12 md:col-span-8">
          <AppDatePicker
            onSelectDate={(value) => setExpireRangeTo(value)}
            maxWidth={300}
            small
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
