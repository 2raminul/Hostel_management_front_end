import { FC, useEffect } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import useSnackbar from "../../AppSnackbar/hooks/useSnackbar";
import { yupResolver } from "@hookform/resolvers/yup";
import { expenseAddSchema } from "@/app/schema/form/expense";
import { AppSearchableDropdown } from "../../AppSearchableDropdown";
import { useGetCategoryListQuery } from "@/app/store/reducer/category";
import { useAddExpenseMutation } from "@/app/store/reducer/expense";
import { useGetBrandsQuery } from "@/app/store/reducer/inventory";
import AppInputField from "../../AppInputField";
import { AppOptionLabel } from "../../AppOptionLabel";
import { AppDatePicker } from "../../AppDatePicker";
import AppButton from "../../AppButton";
import { AppLoader } from "../../AppLoader";
import { getErrorMessage } from "@/app/utils/helpers";

export const ExpenseAddForm: FC<{ onSubmissionSuccess: () => void }> = ({ onSubmissionSuccess }) => {
    const snackbar = useSnackbar();
    const { data: categoryList } = useGetCategoryListQuery({ page: 1, perPage: Number.MAX_SAFE_INTEGER });
    const { data: brandList } = useGetBrandsQuery();
    const [handleAddExpense, { isLoading }] = useAddExpenseMutation();
    const {
        control,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
        clearErrors,
    } = useForm({
        defaultValues: {
            expenseDate: new Date()
        },
        mode: "onChange",
        resolver: yupResolver(expenseAddSchema),
    });

    const quantityVal = useWatch({ control, name: "quantity" });
    const unitPriceVal = useWatch({ control, name: "unitPrice" });
    const expenseDateVal = useWatch({ control, name: "expenseDate" });
    const onSubmit = async (data: any) => {
        handleAddExpense(data)
            .unwrap()
            .then(() => {
                snackbar.success("Expense added successfully.");
                onSubmissionSuccess();
            })
            .catch((err) => snackbar.error(getErrorMessage(err)));
    }

    useEffect(() => {
        if (quantityVal && unitPriceVal) {
            setValue('totalPrice', quantityVal * unitPriceVal);
        }
    }, [quantityVal, unitPriceVal])

    return <div className="w-96">
        NOTE: Adding a new expense will add the bought items in inventory
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
                            error={!!errors?.remarks?.message}
                            errorText={errors?.remarks?.message}
                            {...field}
                        />
                    )}
                />
            </div>
            <div className="grid grid-cols-4 gap-4">
                <div>
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
                <div className="col-span-2">
                    <Controller
                        name="unitPrice"
                        control={control}
                        render={({ field }) => (
                            <AppInputField
                                labelText="Unit Price"
                                placeholder="Unit Price"
                                error={!!errors?.quantity?.message}
                                errorText={errors?.quantity?.message}
                                isRequired
                                type="decimal"
                                {...field}
                            />
                        )}
                    />
                </div>
                <div className="mt-16 font-bold text-lg">€</div>
            </div>
            <div>
                <AppOptionLabel text={`Total Price: ${quantityVal && unitPriceVal ? (quantityVal * unitPriceVal).toFixed(2) : ""}  €`} />
            </div>
            <div>
                <AppOptionLabel text="Purchase Date" isRequired />
                <AppDatePicker
                    onSelectDate={(value) => value && setValue("expenseDate", value)}
                    selectedDate={expenseDateVal}
                    errorText={errors?.expenseDate?.message}
                    maxWidth={200}
                    small
                    notRemovable
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
    </div>
}