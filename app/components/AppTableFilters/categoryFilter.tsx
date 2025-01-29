import { FC, useState } from "react";
import { AppSearchableDropdown } from "../AppSearchableDropdown";
import AppButton from "../AppButton";
import TuneIcon from "@mui/icons-material/Tune";
import { useDispatch } from "@/app/store/hooks";
import { BooleanType } from "@/app/schema/enum/booleanType";
import { useGetUnitsQuery } from "@/app/store/reducer/category";
import { setCategoryFilter } from "@/app/store/reducer/category/slice";

export const CategoryFilter: FC = () => {
    const dispatch = useDispatch();
    const { data: unitList } = useGetUnitsQuery();
    const [name, setName] = useState('');
    const [unit, setUnit] = useState('');
    const [reusable, setReusable] = useState('');
    const [isInventoryItem, setIsInventoryItem] = useState('');
    const applyFilter = () => {
        dispatch(setCategoryFilter({ name, unit, reusable, isInventoryItem }));
    };
    return <>
        <div className="md:border-l-2 md:border-gray grid grid-cols-1 md:grid-cols-2 gap-1">
            <div className="md:text-end my-auto">Name:</div>
            <div>
                <AppSearchableDropdown
                    labelText=""
                    size="small"
                    placeHolder="Name"
                    freeSolo={false}
                    optionList={[]}
                    onInputChange={(value) => setName(value || "")}
                    field=""
                />
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <div className="md:text-end my-auto">Reusable:</div>
            <div>
                <AppSearchableDropdown
                    labelText=""
                    size="small"
                    placeHolder="Reusable"
                    freeSolo={false}
                    optionList={Object.values(BooleanType)}
                    onInputChange={(value) => setReusable(value === BooleanType.TRUE ? 'true' : 'false')}
                    field=""
                />
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <div className="md:text-end my-auto">Inventory Item:</div>
            <div>
                <AppSearchableDropdown
                    labelText=""
                    size="small"
                    placeHolder="Inventory Item"
                    freeSolo={false}
                    optionList={Object.values(BooleanType)}
                    onInputChange={(value) => setIsInventoryItem(value === BooleanType.TRUE ? 'true' : 'false')}
                    field=""
                />
            </div>
        </div><div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <div className="md:text-end my-auto">Unit:</div>
            <div>
                <AppSearchableDropdown
                    labelText=""
                    size="small"
                    placeHolder="Kg/Pcs/Dozen"
                    freeSolo={false}
                    optionList={unitList || []}
                    onInputChange={(value) => setUnit(value || "")}
                    field=""
                />
            </div>
        </div>
        <div>
            <AppButton
                className="md:w-24 w-full"
                startIcon={<TuneIcon />}
                onClick={applyFilter}
            >
                <div className="flex px-1 items-center">Filter</div>
            </AppButton>
        </div>
    </>
}