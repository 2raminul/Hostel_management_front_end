import { useDispatch } from "@/app/store/hooks";
import { useGetCategoryListQuery } from "@/app/store/reducer/category";
import { useGetBrandsQuery } from "@/app/store/reducer/inventory";
import { setInventoryFilter } from "@/app/store/reducer/inventory/slice";
import { FC, useState } from "react";
import { AppSearchableDropdown } from "../AppSearchableDropdown";
import AppButton from "../AppButton";
import TuneIcon from "@mui/icons-material/Tune";

export const InventoryFilter: FC = () => {
    const dispatch = useDispatch();
    const [categoryId, setCategoryId] = useState<number | undefined>();
    const [brand, setBrand] = useState('');
    const { data: brandList } = useGetBrandsQuery();
    const { data: categoryList } = useGetCategoryListQuery({ page: 1, perPage: Number.MAX_SAFE_INTEGER });


    const applyFilter = () => {
        dispatch(setInventoryFilter({ categoryId, brand }));
    }
    return <>
        <div className="md:border-l-2 md:border-gray grid grid-cols-1 md:grid-cols-6 gap-2">
            <span className="md:col-span-3 md:text-end my-auto text-sm">Category Name:</span>
            <div className="md:col-span-3">
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
        <div className="mt-3 md:mt-1">
            <AppButton startIcon={<TuneIcon />} className="w-full md:w-20" onClick={applyFilter}>Filter</AppButton>
        </div>
    </>
}