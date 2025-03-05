import { FC } from "react";
import useSnackbar from "../../AppSnackbar/hooks/useSnackbar";
import { UseInventoryItemPropsType } from "./types";
import { Controller, useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useInventoryItemSchema } from "@/app/schema/form/inventory";
import { useDecreaseFromInventoryDueToUsageMutation, useGetInventoryDetailQuery } from "@/app/store/reducer/inventory";
import { AppLoader } from "../../AppLoader";
import { Divider } from "@mui/material";
import AppInputField from "../../AppInputField";
import AppButton from "../../AppButton";
import { getErrorMessage } from "@/app/utils/helpers";

export const DisburseInventoryItemForm: FC<UseInventoryItemPropsType> = ({ inventoryItemId, onSubmissionSuccess }) => {
    const snackbar = useSnackbar();
    const { data: inventoryItemData, isLoading: isDetailLoading, isFetching: isDetailFetching } = useGetInventoryDetailQuery(inventoryItemId);
    const {
        control,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
        clearErrors,
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(useInventoryItemSchema),
        defaultValues: { inventoryItemId }
    });
    const usageCountValue = useWatch({ control, name: "usageCount" });
    const [handleItemUsage, { isLoading }] = useDecreaseFromInventoryDueToUsageMutation();
    const onSubmit = async (data: any) => {
        handleItemUsage(data)
            .unwrap()
            .then(() => {
                snackbar.success("Inventory updated");
                onSubmissionSuccess();
            })
            .catch((err) => snackbar.error(getErrorMessage(err)));
    };
    return <div className="w-96">
        {(isDetailFetching || isDetailLoading) ? <AppLoader /> : <>
            <div>
                Item Detail
            </div>
            <Divider />
            <div>
                <span className="font-bold mr-2">Type:</span>
                <span>{inventoryItemData?.categoryName}</span>
            </div>
            <div>
                <span className="font-bold mr-2">Brand:</span>
                <span>{inventoryItemData?.brand}</span>
            </div>
            <div>
                <span className="font-bold mr-2">Currently available:</span>
                <span>{inventoryItemData?.inStockCount} {inventoryItemData?.unit}</span>
            </div>
            {!!inventoryItemData?.isReusableItem && <div>
                <span className="font-bold mr-2">Available for use:</span>
                <span>{inventoryItemData?.reusableCount}</span>
            </div>}

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-24">
                    <Controller
                        name="usageCount"
                        control={control}
                        render={({ field }) => (
                            <AppInputField
                                labelText="Usage Count"
                                placeholder="Usage Count"
                                error={!!errors?.usageCount?.message}
                                errorText={errors?.usageCount?.message}
                                isRequired
                                type="number"
                                {...field}
                            />
                        )}
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
                <div className="pt-5 md:float-right">
                    <AppButton
                        className="w-full md:w-32"
                        disabled={isLoading || (usageCountValue > (inventoryItemData?.inStockCount || 0))}
                        variant="outlined"
                        type="submit"
                    >
                        {isLoading ? <AppLoader small /> : "Submit"}
                    </AppButton>

                </div>
            </form>
        </>}
    </div>
}