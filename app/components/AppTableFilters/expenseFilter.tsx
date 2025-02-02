import { useDispatch } from "@/app/store/hooks";
import { setExpenseFilter, useGetBrandsQuery } from "@/app/store/reducer/expense";
import { FC, useState } from "react";
import { AppSearchableDropdown } from "../AppSearchableDropdown";
import { useGetCategoryListQuery } from "@/app/store/reducer/category";
import TuneIcon from "@mui/icons-material/Tune";
import { AppDatePicker } from "../AppDatePicker";
import AppButton from "../AppButton";

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

    return <>
        <div className="md:border-l-2 md:border-gray grid grid-cols-1 md:grid-cols-3 gap-2">
            <span className="md:text-end my-auto text-sm">Category Name:</span>
            <div className="md:col-span-2">
                <AppSearchableDropdown
                    labelText=""
                    size="small"
                    placeHolder="Category Name"
                    freeSolo={false}
                    optionList={categoryList?.data?.map((cat) => cat.name) || []}
                    onInputChange={(value) => setCategoryId((value && categoryList?.data?.find((c) => c.name == value)?.id) || undefined)}
                    field=""
                />
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <span className="md:text-end my-auto text-sm">Brand:</span>
            <div className="md:col-span-2">
                <AppSearchableDropdown
                    labelText=""
                    size="small"
                    placeHolder="Brand"
                    freeSolo={false}
                    optionList={brandList || []}
                    onInputChange={(value) => setBrand(value || "")}
                    field=""
                />
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>Purchased After:</div>
            <div className="md:col-span-2">
                <AppDatePicker
                    onSelectDate={(value) => value && setPurchaseDateAfter(value)}
                    maxWidth={300}
                    small
                    notRemovable
                />
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>Purchased Before:</div>
            <div className="md:col-span-2">
                <AppDatePicker
                    onSelectDate={(value) => value && setPurchaseDateBefore(value)}
                    maxWidth={300}
                    small
                    notRemovable
                />
            </div>
        </div>
        <div className="mt-3 md:mt-1">
            <AppButton startIcon={<TuneIcon />} className="w-full md:w-20" onClick={applyFilter}>Filter</AppButton>
        </div>
    </>
}