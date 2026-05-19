import { useDispatch } from "@/app/store/hooks";
import { setExpenseFilter } from "@/app/store/reducer/expense";
import { FC, useState } from "react";
import { AppSearchableDropdown } from "../AppSearchableDropdown";
import { useGetCategoryListQuery } from "@/app/store/reducer/category";
import TuneIcon from "@mui/icons-material/Tune";
import { AppDatePicker } from "../AppDatePicker";
import AppButton from "../AppButton";
import { useGetBrandsQuery } from "@/app/store/reducer/inventory";

export const ExpenseFilter: FC = () => {
    const dispatch = useDispatch();
    const [categoryId, setCategoryId] = useState<number | undefined>();
    const [brand, setBrand] = useState('');
    const [purchaseDateBefore, setPurchaseDateBefore] = useState<Date | undefined>();
    const [purchaseDateAfter, setPurchaseDateAfter] = useState<Date | undefined>();
    const { data: brandList } = useGetBrandsQuery();
    const { data: categoryList } = useGetCategoryListQuery({ page: 1, perPage: Number.MAX_SAFE_INTEGER });

    const applyFilter = () => {
        dispatch(setExpenseFilter({ categoryId, brand, purchaseDateAfter, purchaseDateBefore }));
    }

    return (
        <div className="w-full min-w-0 md:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                <div className="min-w-0 flex flex-col gap-1">
                    <span className="text-sm text-gray-700 shrink-0">Category name</span>
                    <AppSearchableDropdown
                        labelText=""
                        size="small"
                        placeHolder="Select category name"
                        freeSolo={false}
                        optionList={categoryList?.data?.map((cat) => cat.name) || []}
                        onInputChange={(value) => setCategoryId((value && categoryList?.data?.find((c) => c.name == value)?.id) || undefined)}
                        field=""
                    />
                </div>
                <div className="min-w-0 flex flex-col gap-1">
                    <span className="text-sm text-gray-700 shrink-0">Brand</span>
                    <AppSearchableDropdown
                        labelText=""
                        size="small"
                        placeHolder="Select brand"
                        freeSolo={false}
                        optionList={brandList || []}
                        onInputChange={(value) => setBrand(value || "")}
                        field=""
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mt-3">
                <div className="min-w-0 flex flex-col gap-1 w-full">
                    <span className="text-sm text-gray-700">Purchased after</span>
                    <div className="w-full max-w-full">
                        <AppDatePicker
                            onSelectDate={(value) => value && setPurchaseDateAfter(value)}
                            maxWidth={560}
                            small
                            notRemovable
                        />
                    </div>
                </div>
                <div className="min-w-0 flex flex-col gap-1 w-full">
                    <span className="text-sm text-gray-700">Purchased before</span>
                    <div className="w-full max-w-full">
                        <AppDatePicker
                            onSelectDate={(value) => value && setPurchaseDateBefore(value)}
                            maxWidth={560}
                            small
                            notRemovable
                        />
                    </div>
                </div>
            </div>
            <div className="mt-3 md:mt-1">
                <AppButton startIcon={<TuneIcon />} className="w-full md:w-20" onClick={applyFilter}>Filter</AppButton>
            </div>
        </div>
    );
}
