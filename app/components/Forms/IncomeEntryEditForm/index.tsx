import { FC, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useSnackbar from "../../AppSnackbar/hooks/useSnackbar";
import { useGetIncomeDetailQuery, useUpdateIncomeEntryMutation } from "@/app/store/reducer/income";
import { useGetSettlementAccountsQuery } from "@/app/store/reducer/settings";
import { AppSearchableDropdown } from "../../AppSearchableDropdown";
import AppInputField from "../../AppInputField";
import { AppOptionLabel } from "../../AppOptionLabel";
import AppButton from "../../AppButton";
import { AppLoader } from "../../AppLoader";
import { getErrorMessage } from "@/app/utils/helpers";
import { MODAL_FORM_ROOT_CLASS } from "@/app/components/modalLayout";

const incomeEntryEditSchema = yup.object({
    amount: yup.number().min(0.01).required(),
    incomeDate: yup.string().required(),
    remarks: yup.string().nullable().optional(),
    settlementAccountId: yup.number().nullable().optional(),
});

export const IncomeEntryEditForm: FC<{ entryId: number; onSubmissionSuccess: () => void }> = ({ entryId, onSubmissionSuccess }) => {
    const snackbar = useSnackbar();
    const {
        data: incomeDetail,
        isLoading: isDetailLoading,
        isFetching: isDetailFetching,
        isSuccess: isDetailSuccess,
    } = useGetIncomeDetailQuery(entryId, { refetchOnMountOrArgChange: true });
    const [updateIncomeEntry, { isLoading }] = useUpdateIncomeEntryMutation();
    const { data: settlementAccounts } = useGetSettlementAccountsQuery();
    const settlementNone = "— None —";

    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            amount: 0,
            incomeDate: "",
            remarks: "",
            settlementAccountId: undefined as number | null | undefined,
        },
        mode: "onChange",
        resolver: yupResolver(incomeEntryEditSchema),
    });

    useEffect(() => {
        if (!(isDetailLoading || isDetailFetching) && isDetailSuccess && incomeDetail) {
            setValue("amount", incomeDetail.amount);
            setValue("incomeDate", incomeDetail.incomeDate);
            setValue("remarks", incomeDetail.remarks || "");
            setValue("settlementAccountId", incomeDetail.settlementAccountId ?? null);
        }
    }, [isDetailLoading, isDetailFetching, isDetailSuccess, incomeDetail, setValue]);

    const onSubmit = async (data: any) => {
        const payload = { id: entryId, ...data };
        if (
            payload.settlementAccountId == null ||
            (payload as { settlementAccountId?: number }).settlementAccountId === 0
        ) {
            (payload as { settlementAccountId: number | null }).settlementAccountId = null;
        }
        updateIncomeEntry(payload)
            .unwrap()
            .then(() => {
                snackbar.success("Income entry updated successfully.");
                onSubmissionSuccess();
            })
            .catch((err) => snackbar.error(getErrorMessage(err)));
    };

    if (isDetailLoading || isDetailFetching) {
        return <AppLoader />;
    }

    return (
        <div className={MODAL_FORM_ROOT_CLASS}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <AppOptionLabel text="Room" />
                    {incomeDetail?.roomNumber} — {incomeDetail?.bedLabel}
                </div>
                <div>
                    <AppSearchableDropdown
                        labelText="Settlement account"
                        placeHolder="Optional"
                        freeSolo={false}
                        size="small"
                        optionList={
                            settlementAccounts?.length
                                ? [settlementNone, ...settlementAccounts.map((s) => s.name)]
                                : [settlementNone]
                        }
                        previousValue={
                            incomeDetail?.settlementAccountName || settlementNone
                        }
                        onInputChange={(value) => {
                            if (!value || value === settlementNone) {
                                setValue("settlementAccountId", null);
                                return;
                            }
                            const acc = settlementAccounts?.find((s) => s.name === value);
                            setValue("settlementAccountId", acc?.id ?? null);
                        }}
                        field=""
                    />
                </div>
                <div>
                    <Controller
                        name="amount"
                        control={control}
                        render={({ field }) => (
                            <AppInputField
                                labelText="Amount (€)"
                                placeholder="0.00"
                                error={!!errors?.amount?.message}
                                errorText={errors?.amount?.message}
                                isRequired
                                type="number"
                                {...field}
                            />
                        )}
                    />
                </div>
                <div>
                    <AppOptionLabel text="Income Date" isRequired />
                    <Controller
                        name="incomeDate"
                        control={control}
                        render={({ field }) => (
                            <AppInputField
                                labelText=""
                                placeholder=""
                                error={!!errors?.incomeDate?.message}
                                errorText={errors?.incomeDate?.message}
                                isRequired
                                type="date"
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
        </div>
    );
};
