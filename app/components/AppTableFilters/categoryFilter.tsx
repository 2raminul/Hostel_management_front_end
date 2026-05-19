import { FC, useState } from "react";
import { AppSearchableDropdown } from "../AppSearchableDropdown";
import AppButton from "../AppButton";
import TuneIcon from "@mui/icons-material/Tune";
import { useDispatch } from "@/app/store/hooks";
import { BooleanType } from "@/app/schema/enum/booleanType";
import { useGetCategoryListQuery, useGetUnitsQuery } from "@/app/store/reducer/category";
import { setCategoryFilter } from "@/app/store/reducer/category/slice";

export const CategoryFilter: FC = () => {
    const dispatch = useDispatch();
    const { data: unitList } = useGetUnitsQuery();
    const [name, setName] = useState('');
    const [unit, setUnit] = useState('');
    const [reusable, setReusable] = useState('');
    const [isInventoryItem, setIsInventoryItem] = useState('');
    const [isSaleItem, setIsSaleItem] = useState('');
    const { data: categoryList } = useGetCategoryListQuery({ page: 1, perPage: Number.MAX_SAFE_INTEGER });
    const applyFilter = () => {
        dispatch(setCategoryFilter({ name, unit, reusable, isInventoryItem, isSaleItem }));
    };
    return (
        <div className="w-full min-w-0 md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-3">
                <div className="min-w-0 flex flex-col gap-1">
                    <span className="text-sm text-gray-700 shrink-0">Name</span>
                    <AppSearchableDropdown
                        labelText=""
                        size="small"
                        placeHolder="Filter by category name"
                        freeSolo={false}
                        optionList={categoryList?.data?.map((cat) => cat.name) || []}
                        onInputChange={(value) => setName(value || "")}
                        field=""
                    />
                </div>
                <div className="min-w-0 flex flex-col gap-1">
                    <span className="text-sm text-gray-700 shrink-0">Reusable</span>
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
                <div className="min-w-0 flex flex-col gap-1">
                    <span className="text-sm text-gray-700 shrink-0">Inventory item</span>
                    <AppSearchableDropdown
                        labelText=""
                        size="small"
                        placeHolder="Inventory item"
                        freeSolo={false}
                        optionList={Object.values(BooleanType)}
                        onInputChange={(value) => setIsInventoryItem(value === BooleanType.TRUE ? 'true' : 'false')}
                        field=""
                    />
                </div>
                <div className="min-w-0 flex flex-col gap-1">
                    <span className="text-sm text-gray-700 shrink-0">Sale item</span>
                    <AppSearchableDropdown
                        labelText=""
                        size="small"
                        placeHolder="Sale item"
                        freeSolo={false}
                        optionList={Object.values(BooleanType)}
                        onInputChange={(value) => setIsSaleItem(value === BooleanType.TRUE ? 'true' : 'false')}
                        field=""
                    />
                </div>
                <div className="min-w-0 flex flex-col gap-1">
                    <span className="text-sm text-gray-700 shrink-0">Unit</span>
                    <AppSearchableDropdown
                        labelText=""
                        size="small"
                        placeHolder="Kg / Pcs / Dozen"
                        freeSolo={false}
                        optionList={unitList || []}
                        onInputChange={(value) => setUnit(value || "")}
                        field=""
                    />
                </div>
            </div>
            <div className="mt-4">
                <AppButton
                    className="md:w-24 w-full"
                    startIcon={<TuneIcon />}
                    onClick={applyFilter}
                >
                    <div className="flex px-1 items-center text-sm">Filter</div>
                </AppButton>
            </div>
        </div>
    );
};
