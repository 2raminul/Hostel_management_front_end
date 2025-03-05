import { FC } from "react";
import useSnackbar from "../../AppSnackbar/hooks/useSnackbar";
import { useGetCategoryListQuery } from "@/app/store/reducer/category";
import { useGetBrandsQuery } from "@/app/store/reducer/inventory";
import { Controller, useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { inventoryItemAddSchema } from "@/app/schema/form/inventory";
import { AppSearchableDropdown } from "../../AppSearchableDropdown";
import AppInputField from "../../AppInputField";
import AppButton from "../../AppButton";
import { AppLoader } from "../../AppLoader";
import { useAddToIventoryMutation } from "@/app/store/reducer/inventory";
import { getErrorMessage } from "@/app/utils/helpers";

export const InventoryItemAddForm: FC<{ onSubmissionSuccess: () => void }> = ({ onSubmissionSuccess }) => {
    const snackbar = useSnackbar();
    const { data: categoryList } = useGetCategoryListQuery({ page: 1, perPage: Number.MAX_SAFE_INTEGER, isInventoryItem: 'true' });
    const { data: brandList } = useGetBrandsQuery();
    const [handleAddToInventory, { isLoading }] = useAddToIventoryMutation();
    const {
        control,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
        clearErrors,
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(inventoryItemAddSchema),
    });
    const categoryValue = useWatch({ control, name: "categoryId" });
    const onSubmit = async (data: any) => {
        handleAddToInventory(data)
            .unwrap()
            .then(() => {
                snackbar.success("Items added to inventory successfully.");
                onSubmissionSuccess();
            })
            .catch((err) => snackbar.error(getErrorMessage(err)));
    }

    return <div className="w-96">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <AppSearchableDropdown
                    labelText="Category"
                    placeHolder="Select from dropdown"
                    isRequired
                    freeSolo={false}
                    size="small"
                    optionList={categoryList?.data?.map((c) => c.name) || []}
                    onInputChange={(value) =>
                        setValue(
                            "categoryId",
                            categoryList?.data?.find((c) => c.name === value)?.id || 0
                        )
                    }
                    field=""
                    error={errors?.categoryId?.message}
                />
            </div>
            <div>
                <AppSearchableDropdown
                    labelText="Brand"
                    placeHolder="Type in or select"
                    isRequired
                    freeSolo={true}
                    size="small"
                    optionList={brandList || []}
                    onInputChange={(value) => setValue("brand", value || "")}
                    field=""
                    error={errors?.brand?.message}
                />
            </div>
            <div>
                <Controller
                    name="remarks"
                    control={control}
                    render={({ field }) => (
                        <AppInputField
                            labelText="Remarks"
                            placeholder=""
                            isRequired
                            error={!!errors?.remarks?.message}
                            errorText={errors?.remarks?.message}
                            {...field}
                        />
                    )}
                />
            </div>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-10">
                    <Controller
                        name="quantity"
                        control={control}
                        render={({ field }) => (
                            <AppInputField
                                labelText="Quantity"
                                placeholder="Quantity"
                                error={!!errors?.quantity?.message}
                                errorText={errors?.quantity?.message}
                                isRequired
                                type="number"
                                {...field}
                            />
                        )}
                    />
                </div>
                {categoryValue > 0 && <div className="col-span-2 mt-16">{categoryList?.data?.find((c) => c.id == categoryValue)?.unit || ""}</div>}
            </div>
            <div className="pt-5 md:float-right">
                <AppButton
                    className="w-full md:w-32"
                    disabled={isLoading}
                    variant="outlined"
                    type="submit"
                >
                    {isLoading ? <AppLoader small /> : "Submit"}
                </AppButton>
            </div>
        </form>
    </div>
}