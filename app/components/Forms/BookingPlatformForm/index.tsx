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
    useAddBookingPlatformMutation,
    useUpdateBookingPlatformMutation,
} from "@/app/store/reducer/settings";
import { BookingPlatform } from "@/app/store/reducer/settings/types";
import { MODAL_FORM_ROOT_CLASS } from "@/app/components/modalLayout";

const bookingPlatformSchema = yup.object({
    name: yup.string().required("Name is required"),
});

export const BookingPlatformAddForm: FC<{ onSubmissionSuccess: () => void }> = ({
    onSubmissionSuccess,
}) => {
    const [addBookingPlatform, { isLoading }] = useAddBookingPlatformMutation();
    const snackbar = useSnackbar();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: { name: "" },
        mode: "onChange",
        resolver: yupResolver(bookingPlatformSchema),
    });

    const onSubmit = async (data: { name: string }) => {
        addBookingPlatform({ name: data.name })
            .unwrap()
            .then(() => {
                snackbar.success("Booking platform has been added.");
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

export const BookingPlatformEditForm: FC<{
    item: BookingPlatform;
    onSubmissionSuccess: () => void;
}> = ({ item, onSubmissionSuccess }) => {
    const [updateBookingPlatform, { isLoading }] = useUpdateBookingPlatformMutation();
    const snackbar = useSnackbar();

    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: { name: "" },
        mode: "onChange",
        resolver: yupResolver(bookingPlatformSchema),
    });

    useEffect(() => {
        setValue("name", item.name);
    }, [item, setValue]);

    const onSubmit = async (data: { name: string }) => {
        updateBookingPlatform({ id: item.id, name: data.name })
            .unwrap()
            .then(() => {
                snackbar.success("Booking platform has been updated.");
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
