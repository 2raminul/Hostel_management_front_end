import { FC } from "react";
import useSnackbar from "../../AppSnackbar/hooks/useSnackbar";
import { useDecreaseFromInventoryDueToSaleMutation, useGetInventoryDetailQuery } from "@/app/store/reducer/inventory";
import { SellInventoryItemProps } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm, useWatch } from "react-hook-form";
import { sellInventoryItemSchema } from "@/app/schema/form/inventory";
import { Divider } from "@mui/material";
import { AppLoader } from "../../AppLoader";
import AppInputField from "../../AppInputField";
import AppButton from "../../AppButton";
import { getErrorMessage } from "@/app/utils/helpers";

export const SellInventoryItemForm: FC<SellInventoryItemProps> = ({ inventoryItemId, onSubmissionSuccess }) => {
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
        resolver: yupResolver(sellInventoryItemSchema),
        defaultValues: { inventoryItemId }
    });
    const sellCountValue = useWatch({ control, name: "sellCount" });
    const saleUnitPriceValue = useWatch({ control, name: "saleUnitPrice" });
    const [handleItemSale, { isLoading }] = useDecreaseFromInventoryDueToSaleMutation();
    const onSubmit = async (data: any) => {
        handleItemSale(data)
            .unwrap()
            .then(() => {
                snackbar.success("Inventory updated");
                onSubmissionSuccess();
            })
            .catch((err) => snackbar.error(getErrorMessage(err)));
    }
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

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2">
                    <div className="w-24">
                        <Controller
                            name="sellCount"
                            control={control}
                            render={({ field }) => (
                                <AppInputField
                                    labelText="Sales Count"
                                    placeholder="Sales Count"
                                    error={!!errors?.sellCount?.message}
                                    errorText={errors?.sellCount?.message}
                                    isRequired
                                    type="number"
                                    {...field}
                                />
                            )}
                        />
                    </div>
                    <div className="w-24">
                        <Controller
                            name="saleUnitPrice"
                            control={control}
                            render={({ field }) => (
                                <AppInputField
                                    labelText="Sale Unit Price"
                                    placeholder="Sale Unit Price"
                                    error={!!errors?.saleUnitPrice?.message}
                                    errorText={errors?.saleUnitPrice?.message}
                                    isRequired
                                    type="number"
                                    {...field}
                                />
                            )}
                        />
                    </div>
                </div>
                <div className="mt-2">Total Sale Price: {saleUnitPriceValue && sellCountValue && <span>{saleUnitPriceValue * sellCountValue} €</span>}</div>
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
                        disabled={isLoading || (sellCountValue > (inventoryItemData?.inStockCount || 0))}
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