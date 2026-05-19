import { useDispatch } from "@/app/store/hooks";
import { setIncomeFilter } from "@/app/store/reducer/income";
import { FC, useState } from "react";
import { AppSearchableDropdown } from "../AppSearchableDropdown";
import { useGetRoomsQuery } from "@/app/store/reducer/rooms";
import TuneIcon from "@mui/icons-material/Tune";
import AppButton from "../AppButton";

export const IncomeFilter: FC = () => {
    const dispatch = useDispatch();
    const [roomId, setRoomId] = useState<number | undefined>();
    const [dateFrom, setDateFrom] = useState<string | undefined>();
    const [dateTo, setDateTo] = useState<string | undefined>();
    const { data: rooms } = useGetRoomsQuery();

    const applyFilter = () => {
        dispatch(setIncomeFilter({ roomId, dateFrom, dateTo }));
    };

    return (
        <div className="w-full min-w-0 md:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-3 items-end">
                <div className="min-w-0 flex flex-col gap-1 sm:col-span-2 lg:col-span-1">
                    <span className="text-sm text-gray-700 shrink-0">Room</span>
                    <AppSearchableDropdown
                        labelText=""
                        size="small"
                        placeHolder="Select room"
                        freeSolo={false}
                        optionList={rooms?.map((r) => r.roomNumber) || []}
                        onInputChange={(value) =>
                            setRoomId((value && rooms?.find((r) => r.roomNumber === value)?.id) || undefined)
                        }
                        field=""
                    />
                </div>
                <div className="min-w-0 flex flex-col gap-1">
                    <span className="text-sm text-gray-700 shrink-0">From</span>
                    <input
                        type="date"
                        className="border rounded px-2 py-2 text-sm w-full min-h-[40px] bg-white"
                        onChange={(e) => setDateFrom(e.target.value || undefined)}
                    />
                </div>
                <div className="min-w-0 flex flex-col gap-1">
                    <span className="text-sm text-gray-700 shrink-0">To</span>
                    <input
                        type="date"
                        className="border rounded px-2 py-2 text-sm w-full min-h-[40px] bg-white"
                        onChange={(e) => setDateTo(e.target.value || undefined)}
                    />
                </div>
                <div className="flex items-end pb-0.5">
                    <AppButton startIcon={<TuneIcon />} className="w-full md:w-20" onClick={applyFilter}>
                        Filter
                    </AppButton>
                </div>
            </div>
        </div>
    );
};
