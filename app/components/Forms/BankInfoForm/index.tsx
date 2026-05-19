import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import AppButton from "../../AppButton";
import AppInputField from "../../AppInputField";
import { AppLoader } from "../../AppLoader";
import useSnackbar from "../../AppSnackbar/hooks/useSnackbar";
import { getErrorMessage } from "@/app/utils/helpers";
import {
    useAddBankInfoMutation,
    useUpdateBankInfoMutation,
} from "@/app/store/reducer/settings";
import { BankInfo } from "@/app/store/reducer/settings/types";
import { MODAL_FORM_ROOT_CLASS } from "@/app/components/modalLayout";

const bankInfoSchema = yup.object({
    accountNumber: yup.string().optional(),
});

export const BankInfoAddForm: FC<{ onSubmissionSuccess: () => void }> = ({
    onSubmissionSuccess,
}) => {
    const [addBankInfo, { isLoading }] = useAddBankInfoMutation();
    const snackbar = useSnackbar();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: { accountNumber: "" },
        mode: "onChange",
        resolver: yupResolver(bankInfoSchema),
    });

    const onSubmit = async (data: { accountNumber?: string }) => {
        addBankInfo({ accountNumber: data.accountNumber })
            .unwrap()
            .then(() => {
                snackbar.success("Bank info has been added.");
                onSubmissionSuccess();
            })
            .catch((err) => snackbar.error(getErrorMessage(err)));
    };

    return (
        <div className={MODAL_FORM_ROOT_CLASS}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Controller
                        name="accountNumber"
                        control={control}
                        render={({ field }) => (
                            <AppInputField
                                labelText="Account Number"
                                placeholder="Account Number"
                                error={!!errors?.accountNumber?.message}
                                errorText={errors?.accountNumber?.message}
                                {...field}
                            />
                        )}
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
    );
};

export const BankInfoEditForm: FC<{
    item: BankInfo;
    onSubmissionSuccess: () => void;
}> = ({ item, onSubmissionSuccess }) => {
    const [updateBankInfo, { isLoading }] = useUpdateBankInfoMutation();
    const snackbar = useSnackbar();

    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: { accountNumber: "" },
        mode: "onChange",
        resolver: yupResolver(bankInfoSchema),
    });

    useEffect(() => {
        setValue("accountNumber", item.accountNumber);
    }, [item, setValue]);

    const onSubmit = async (data: { accountNumber?: string }) => {
        updateBankInfo({ id: item.id, accountNumber: data.accountNumber })
            .unwrap()
            .then(() => {
                snackbar.success("Bank info has been updated.");
                onSubmissionSuccess();
            })
            .catch((err) => snackbar.error(getErrorMessage(err)));
    };

    return (
        <div className={MODAL_FORM_ROOT_CLASS}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Controller
                        name="accountNumber"
                        control={control}
                        render={({ field }) => (
                            <AppInputField
                                labelText="Account Number"
                                placeholder="Account Number"
                                error={!!errors?.accountNumber?.message}
                                errorText={errors?.accountNumber?.message}
                                {...field}
                            />
                        )}
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
    );
};
