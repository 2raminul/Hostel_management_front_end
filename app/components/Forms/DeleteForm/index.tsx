import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";

import AppButton from "../../AppButton";
import AppInputField from "../../AppInputField";
import { deleteSchema } from "@/app/schema/delete-with-reason";

export const DeleteForm: FC<{
  onFormSubmit: (deletedReason: string) => void;
  disabledSubmitButton: boolean;
  customErrorMessage?: string;
}> = ({ onFormSubmit, disabledSubmitButton, customErrorMessage }) => {
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
    clearErrors,
  } = useForm({
    mode: "onChange",
    defaultValues: {},
    resolver: yupResolver(deleteSchema),
  });
  const onSubmit = (data: { deletedReason: string }) => {
    onFormSubmit(data.deletedReason);
  };
  return (
    <div className="w-96">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            name="deletedReason"
            control={control}
            render={({ field }) => (
              <AppInputField
                labelText="Reason"
                type="text"
                multiline
                rows={3}
                error={!!errors?.deletedReason?.message}
                errorText={
                  !!errors?.deletedReason?.message
                    ? customErrorMessage || errors?.deletedReason?.message
                    : ""
                }
                {...field}
                isRequired
              />
            )}
          />
        </div>
        <div className="mt-5">
          <AppButton
            variant="outlined"
            type="submit"
            className="float-right"
            disabled={disabledSubmitButton}
          >
            Submit
          </AppButton>
        </div>
      </form>
    </div>
  );
};
