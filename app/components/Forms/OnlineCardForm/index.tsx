import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import AppButton from "../../AppButton";
import AppInputField from "../../AppInputField";
import { AppLoader } from "../../AppLoader";
import { AppSearchableDropdown } from "../../AppSearchableDropdown";
import useSnackbar from "../../AppSnackbar/hooks/useSnackbar";
import { getErrorMessage } from "@/app/utils/helpers";
import {
    useAddOnlineCardMutation,
    useUpdateOnlineCardMutation,
    useGetBankInfoListQuery,
} from "@/app/store/reducer/settings";
import { OnlineCard } from "@/app/store/reducer/settings/types";
import { MODAL_FORM_ROOT_CLASS } from "@/app/components/modalLayout";

const onlineCardSchema = yup.object({
    name: yup.string().required("Name is required"),
    cardNumber: yup.string().nullable().optional(),
});

export const OnlineCardAddForm: FC<{ onSubmissionSuccess: () => void }> = ({
    onSubmissionSuccess,
}) => {
    const [addOnlineCard, { isLoading }] = useAddOnlineCardMutation();
    const { data: bankList = [] } = useGetBankInfoListQuery();
    const snackbar = useSnackbar();
    const [bankId, setBankId] = useState<number | undefined>();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: { name: "", cardNumber: "" },
        mode: "onChange",
        resolver: yupResolver(onlineCardSchema),
    });

    const onSubmit = async (data: { name: string; cardNumber?: string | null }) => {
        addOnlineCard({
            name: data.name,
            cardNumber: data.cardNumber ? (data.cardNumber as unknown as number) : undefined,
            bankId,
        })
            .unwrap()
            .then(() => {
                snackbar.success("Online card has been added.");
                onSubmissionSuccess();
            })
            .catch((err) => snackbar.error(getErrorMessage(err)));
    };

    return (
        <div className={MODAL_FORM_ROOT_CLASS}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Controller
                        name="name"
                        control={control}
                        render={({ field }) => (
                            <AppInputField
                                labelText="Name"
                                placeholder="Name"
                                error={!!errors?.name?.message}
                                errorText={errors?.name?.message}
                                isRequired
                                {...field}
                            />
                        )}
                    />
                </div>
                <div>
                    <Controller
                        name="cardNumber"
                        control={control}
                        render={({ field }) => (
                            <AppInputField
                                labelText="Card Number"
                                placeholder="Card Number"
                                error={!!errors?.cardNumber?.message}
                                errorText={errors?.cardNumber?.message}
                                {...field}
                                value={field.value ?? ""}
                            />
                        )}
                    />
                </div>
                <div>
                    <AppSearchableDropdown
                        labelText="Bank Account"
                        placeHolder="Select bank account"
                        freeSolo={false}
                        optionList={bankList.map((b) => b.accountNumber)}
                        onInputChange={(value) => {
                            const matched = bankList.find((b) => b.accountNumber === value);
                            setBankId(matched?.id);
                        }}
                        field=""
                        error={undefined}
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

export const OnlineCardEditForm: FC<{
    item: OnlineCard;
    onSubmissionSuccess: () => void;
}> = ({ item, onSubmissionSuccess }) => {
    const [updateOnlineCard, { isLoading }] = useUpdateOnlineCardMutation();
    const snackbar = useSnackbar();

    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: { name: "", cardNumber: "" },
        mode: "onChange",
        resolver: yupResolver(onlineCardSchema),
    });

    useEffect(() => {
        setValue("name", item.name);
        setValue("cardNumber", item.cardNumber ?? "");
    }, [item, setValue]);

    const onSubmit = async (data: { name: string; cardNumber?: string | null }) => {
        updateOnlineCard({
            id: item.id,
            name: data.name,
            cardNumber: data.cardNumber ? (data.cardNumber as unknown as number) : undefined,
        })
            .unwrap()
            .then(() => {
                snackbar.success("Online card has been updated.");
                onSubmissionSuccess();
            })
            .catch((err) => snackbar.error(getErrorMessage(err)));
    };

    return (
        <div className={MODAL_FORM_ROOT_CLASS}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Controller
                        name="name"
                        control={control}
                        render={({ field }) => (
                            <AppInputField
                                labelText="Name"
                                placeholder="Name"
                                error={!!errors?.name?.message}
                                errorText={errors?.name?.message}
                                isRequired
                                {...field}
                            />
                        )}
                    />
                </div>
                <div>
                    <Controller
                        name="cardNumber"
                        control={control}
                        render={({ field }) => (
                            <AppInputField
                                labelText="Card Number"
                                placeholder="Card Number"
                                error={!!errors?.cardNumber?.message}
                                errorText={errors?.cardNumber?.message}
                                {...field}
                                value={field.value ?? ""}
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
