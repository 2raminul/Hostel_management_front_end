"use client";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { roomAddSchema } from "@/app/schema/form/room";
import { useAddRoomMutation } from "@/app/store/reducer/rooms";
import AppInputField from "../../AppInputField";
import AppButton from "../../AppButton";
import { AppLoader } from "../../AppLoader";
import { getErrorMessage } from "@/app/utils/helpers";
import { MODAL_FORM_ROOT_CLASS } from "@/app/components/modalLayout";
import useSnackbar from "../../AppSnackbar/hooks/useSnackbar";

export const RoomAddForm: FC<{ onSubmissionSuccess: () => void }> = ({ onSubmissionSuccess }) => {
  const snackbar = useSnackbar();
  const [addRoom, { isLoading }] = useAddRoomMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(roomAddSchema),
  });

  const onSubmit = async (data: any) => {
    addRoom(data)
      .unwrap()
      .then(() => {
        snackbar.success("Room added successfully.");
        onSubmissionSuccess();
      })
      .catch((err) => snackbar.error(getErrorMessage(err)));
  };

  return (
    <div className={MODAL_FORM_ROOT_CLASS}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            name="roomNumber"
            control={control}
            render={({ field }) => (
              <AppInputField
                labelText="Room Number"
                placeholder="e.g. 101"
                error={!!errors?.roomNumber?.message}
                errorText={errors?.roomNumber?.message}
                isRequired
                {...field}
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <AppInputField
                labelText="Description"
                placeholder="Optional description"
                error={!!errors?.description?.message}
                errorText={errors?.description?.message}
                {...field}
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="totalBeds"
            control={control}
            render={({ field }) => (
              <AppInputField
                labelText="Total Beds"
                placeholder="e.g. 6"
                error={!!errors?.totalBeds?.message}
                errorText={errors?.totalBeds?.message}
                isRequired
                type="number"
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
            {isLoading ? <AppLoader small /> : "Add Room"}
          </AppButton>
        </div>
      </form>
    </div>
  );
};
