import { categoryAddSchema } from "@/app/schema/form/category";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import AppInputField from "../../AppInputField";
import { AppSearchableDropdown } from "../../AppSearchableDropdown";
import { BooleanType } from "@/app/schema/enum/booleanType";
import AppButton from "../../AppButton";
import { useAddCategoryMutation, useGetUnitsQuery } from "@/app/store/reducer/category";
import { AppLoader } from "../../AppLoader";
import useSnackbar from "../../AppSnackbar/hooks/useSnackbar";
import { getErrorMessage } from "@/app/utils/helpers";
import { MODAL_FORM_ROOT_CLASS } from "@/app/components/modalLayout";

export const CategoryAddForm: FC<{ onSubmissionSuccess: () => void }> = ({ onSubmissionSuccess }) => {
    const { data: unitList } = useGetUnitsQuery();
    const [handleCategoryAdd, { isLoading }] = useAddCategoryMutation();
    const snackbar = useSnackbar();
    const {
        control,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
        clearErrors,
    } = useForm({
        defaultValues: {},
        mode: "onChange",
        resolver: yupResolver(categoryAddSchema),
    });

    const nameValue = useWatch({ control, name: "name" });

    const onSubmit = async (data: any) => {
        handleCategoryAdd(data)
            .unwrap()
            .then(() => {
                snackbar.success("New category has been added.");
                onSubmissionSuccess();
            })
            .catch((err) => snackbar.error(getErrorMessage(err)));
    }

    return <div className={MODAL_FORM_ROOT_CLASS}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                        <AppInputField
                            labelText="Category Name"
                            placeholder="Category Name"
                            error={
                                !!errors?.name?.message ||
                                !![]?.find((b: any) => b.name === nameValue)
                            }
                            errorText={
                                errors?.name?.message ||
                                (!![]?.find((b: any) => b.name === nameValue)
                                    ? "Category name already exists"
                                    : "")
                            }
                            isRequired
                            {...field}
                        />
                    )}
                />
            </div>
            <div>
                <AppSearchableDropdown
                    labelText="Reusability"
                    placeHolder="Reusable or not"
                    isRequired
                    freeSolo={false}
                    optionList={
                        Object.values(BooleanType)
                    }
                    onInputChange={(value) =>
                        setValue(
                            "reusable",
                            BooleanType.TRUE === value
                        )
                    }
                    field=""
                    error={errors?.reusable?.message}
                />
            </div>
            <div>
                <AppSearchableDropdown
                    labelText="Inventory Item"
                    placeHolder="Is item to be delivered to clients?"
                    isRequired
                    freeSolo={false}
                    optionList={
                        Object.values(BooleanType)
                    }
                    onInputChange={(value) =>
                        setValue(
                            "isInventoryItem",
                            BooleanType.TRUE === value
                        )
                    }
                    field=""
                    error={errors?.isInventoryItem?.message}
                />
            </div>
            <div>
                <AppSearchableDropdown
                    labelText="Sale Item"
                    placeHolder="Can item be sold?"
                    isRequired
                    freeSolo={false}
                    optionList={
                        Object.values(BooleanType)
                    }
                    onInputChange={(value) =>
                        setValue(
                            "isSaleItem",
                            BooleanType.TRUE === value
                        )
                    }
                    field=""
                    error={errors?.isSaleItem?.message}
                />
            </div>
            <div>
                <AppSearchableDropdown
                    labelText="Unit"
                    placeHolder="kg/Pcs/Dozen"
                    isRequired
                    freeSolo={true}
                    optionList={unitList || []}
                    onInputChange={(value) =>
                        setValue(
                            "unit", value || ""
                        )
                    }
                    field=""
                    error={errors?.unit?.message}
                />
            </div>
            <div className="mt-5 float-right">
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