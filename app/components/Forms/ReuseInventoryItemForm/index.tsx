import { FC } from "react";
import useSnackbar from "../../AppSnackbar/hooks/useSnackbar";
import { useGetInventoryDetailQuery, useUpdateReusableCountMutation } from "@/app/store/reducer/inventory";
import { ReuseInventoryItemProps } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm, useWatch } from "react-hook-form";
import { reuseInventoryItemSchema } from "@/app/schema/form/inventory";
import { Divider, RadioGroup } from "@mui/material";
import { AppLoader } from "../../AppLoader";
import AppInputField from "../../AppInputField";
import AppButton from "../../AppButton";
import { getErrorMessage } from "@/app/utils/helpers";
import { AppRadioButton } from "../../AppRadioButton";
import { AppOptionLabel } from "../../AppOptionLabel";
import { ReusableItemStateEnum } from "@/app/schema/enum/reusableItemStateType";

export const ReuseInventoryItemForm: FC<ReuseInventoryItemProps> = ({ inventoryItemId, onSubmissionSuccess }) => {
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
        resolver: yupResolver(reuseInventoryItemSchema),
        defaultValues: { inventoryItemId, stateUpdateType: ReusableItemStateEnum.PUT_TO_USE }
    });
    const countValue = useWatch({ control, name: "count" });
    const stateUpdateTypeValue = useWatch({ control, name: "stateUpdateType" });
    const [handleReuseCount, { isLoading }] = useUpdateReusableCountMutation();
    const onSubmit = async (data: any) => {
        handleReuseCount(data)
            .unwrap()
            .then(() => {
                snackbar.success("Inventory updated");
                onSubmissionSuccess();
            })
            .catch((err) => snackbar.error(getErrorMessage(err)));
    }
    return <div>
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
            <div>
                <span className="font-bold mr-2">Currently Reusable available:</span>
                <span>{inventoryItemData?.reusableCount} {inventoryItemData?.unit}</span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div>
                        <AppOptionLabel text="Update Type" isRequired />
                        <div className="">
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="stateUpdateType"
                            >
                                {Object.values(ReusableItemStateEnum).map((value) => (
                                    <AppRadioButton
                                        value={value}
                                        key={value}
                                        onSelect={() => setValue("stateUpdateType", value)}
                                        selectedValue={stateUpdateTypeValue}
                                    />
                                ))}
                            </RadioGroup>
                        </div>
                    </div>
                </div>
                <div className="w-24">
                    <Controller
                        name="count"
                        control={control}
                        render={({ field }) => (
                            <AppInputField
                                labelText="Count"
                                placeholder="Count"
                                error={!!errors?.count?.message}
                                errorText={errors?.count?.message}
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
                        disabled={isLoading}
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