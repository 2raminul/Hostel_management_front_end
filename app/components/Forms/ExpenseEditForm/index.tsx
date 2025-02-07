import { FC, useEffect, useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import useSnackbar from "../../AppSnackbar/hooks/useSnackbar";
import { yupResolver } from "@hookform/resolvers/yup";
import { expenseEditSchema } from "@/app/schema/form/expense";
import { AppSearchableDropdown } from "../../AppSearchableDropdown";
import { useGetCategoryListQuery } from "@/app/store/reducer/category";
import { useEditExpenseMutation, useGetBrandsQuery, useGetExpenseDetailQuery } from "@/app/store/reducer/expense";
import AppInputField from "../../AppInputField";
import { AppOptionLabel } from "../../AppOptionLabel";
import { AppDatePicker } from "../../AppDatePicker";
import AppButton from "../../AppButton";
import { AppLoader } from "../../AppLoader";
import { getErrorMessage } from "@/app/utils/helpers";

export const ExpenseEditForm: FC<{ expenseId: number; onSubmissionSuccess: () => void }> = ({ expenseId, onSubmissionSuccess }) => {
    const snackbar = useSnackbar();
    const { data: categoryList } = useGetCategoryListQuery({ page: 1, perPage: Number.MAX_SAFE_INTEGER });
    const { data: brandList } = useGetBrandsQuery();
    const { data: expenseDetail, isLoading: isDetailLoading, isFetching: isDetailFetching, isError: isDetailError, isSuccess: isDetailSuccess } = useGetExpenseDetailQuery(expenseId, { refetchOnMountOrArgChange: true });
    const [handleEditExpense, { isLoading }] = useEditExpenseMutation();
    const [formPopulated, setFormPopulated] = useState(false);
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
        resolver: yupResolver(expenseEditSchema),
    });
    const brandVal = useWatch({ control, name: "brand" })
    const quantityVal = useWatch({ control, name: "quantity" });
    const unitPriceVal = useWatch({ control, name: "unitPrice" });
    const expenseDateVal = useWatch({ control, name: "expenseDate" });
    const onSubmit = async (data: any) => {
        data.id = expenseId;
        handleEditExpense(data)
            .unwrap()
            .then(() => {
                snackbar.success("Expense updated successfully.");
                onSubmissionSuccess();
            })
            .catch((err) => snackbar.error(getErrorMessage(err)));
    }

    useEffect(() => {
        if (quantityVal && unitPriceVal) {
            setValue('totalPrice', quantityVal * unitPriceVal);
        }
    }, [quantityVal, unitPriceVal]);

    useEffect(() => {
        if (!(isDetailLoading || isDetailFetching) && isDetailSuccess) {
            setValue('brand', expenseDetail.brand);
            setValue('remarks', expenseDetail.remarks || "");
            setValue('quantity', expenseDetail.quantity);
            setValue('unitPrice', expenseDetail.unitPrice);
            setValue('totalPrice', expenseDetail.totalPrice);
            setValue('expenseDate', new Date(expenseDetail.expenseDate));
            setFormPopulated(true);
        }
    }, [isDetailLoading, isDetailFetching, isDetailSuccess])

    return <div className="w-96">
        {formPopulated ? <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <AppOptionLabel text="Category" />
                {expenseDetail?.categoryName}
            </div>
            <div>
                <AppSearchableDropdown
                    labelText="Brand"
                    placeHolder="Type in or select"
                    size="small"
                    isRequired
                    freeSolo={true}
                    optionList={brandList || []}
                    onInputChange={(value) => setValue("brand", value || "")}
                    previousValue={brandVal}
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
        </form> : <AppLoader />}
    </div>
}