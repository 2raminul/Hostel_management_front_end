import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import AppButton from "../../AppButton";
import AppInputField from "../../AppInputField";
import { AppLoader } from "../../AppLoader";
import useSnackbar from "../../AppSnackbar/hooks/useSnackbar";
import { useCreateUserMutation } from "@/app/store/reducer/users";
import { getErrorMessage } from "@/app/utils/helpers";
import { MODAL_FORM_ROOT_CLASS } from "@/app/components/modalLayout";

const userAddSchema = yup.object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup.string().required("Phone is required"),
    password: yup.string().optional(),
});

export const UserAddForm: FC<{ onSubmissionSuccess: () => void }> = ({ onSubmissionSuccess }) => {
    const [createUser, { isLoading }] = useCreateUserMutation();
    const snackbar = useSnackbar();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            password: "",
        },
        mode: "onChange",
        resolver: yupResolver(userAddSchema),
    });

    const onSubmit = async (data: any) => {
        createUser(data)
            .unwrap()
            .then(() => {
                snackbar.success("New user has been created.");
                onSubmissionSuccess();
            })
            .catch((err) => snackbar.error(getErrorMessage(err)));
    };

    return (
        <div className={MODAL_FORM_ROOT_CLASS}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Controller
                        name="firstName"
                        control={control}
                        render={({ field }) => (
                            <AppInputField
                                labelText="First Name"
                                placeholder="First Name"
                                error={!!errors?.firstName?.message}
                                errorText={errors?.firstName?.message}
                                isRequired
                                {...field}
                            />
                        )}
                    />
                </div>
                <div>
                    <Controller
                        name="lastName"
                        control={control}
                        render={({ field }) => (
                            <AppInputField
                                labelText="Last Name"
                                placeholder="Last Name"
                                error={!!errors?.lastName?.message}
                                errorText={errors?.lastName?.message}
                                isRequired
                                {...field}
                            />
                        )}
                    />
                </div>
                <div>
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                            <AppInputField
                                labelText="Email"
                                placeholder="Email"
                                type="email"
                                error={!!errors?.email?.message}
                                errorText={errors?.email?.message}
                                isRequired
                                {...field}
                            />
                        )}
                    />
                </div>
                <div>
                    <Controller
                        name="phone"
                        control={control}
                        render={({ field }) => (
                            <AppInputField
                                labelText="Phone"
                                placeholder="+19786600659"
                                error={!!errors?.phone?.message}
                                errorText={errors?.phone?.message}
                                isRequired
                                {...field}
                            />
                        )}
                    />
                </div>
                <div>
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                            <AppInputField
                                labelText="Password"
                                placeholder="Password"
                                type="password"
                                error={!!errors?.password?.message}
                                errorText={errors?.password?.message}
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
