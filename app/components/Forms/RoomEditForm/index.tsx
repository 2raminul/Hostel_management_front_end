"use client";
import { FC, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useGetRoomDetailQuery, useUpdateRoomMutation } from "@/app/store/reducer/rooms";
import AppInputField from "../../AppInputField";
import AppButton from "../../AppButton";
import { AppLoader } from "../../AppLoader";
import { getErrorMessage } from "@/app/utils/helpers";
import { MODAL_FORM_ROOT_CLASS } from "@/app/components/modalLayout";
import useSnackbar from "../../AppSnackbar/hooks/useSnackbar";

const roomEditSchema = yup.object({
  roomNumber: yup.string().required("Room number is required"),
  description: yup.string().nullable().optional(),
});

export const RoomEditForm: FC<{ roomId: number; onSubmissionSuccess: () => void }> = ({ roomId, onSubmissionSuccess }) => {
  const snackbar = useSnackbar();
  const {
    data: roomDetail,
    isLoading: isDetailLoading,
    isFetching: isDetailFetching,
    isSuccess: isDetailSuccess,
  } = useGetRoomDetailQuery(roomId, { refetchOnMountOrArgChange: true });
  const [updateRoom, { isLoading }] = useUpdateRoomMutation();
  const [formPopulated, setFormPopulated] = useState(false);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(roomEditSchema),
  });

  useEffect(() => {
    if (!(isDetailLoading || isDetailFetching) && isDetailSuccess && roomDetail) {
      setValue("roomNumber", roomDetail.roomNumber);
      setValue("description", roomDetail.description || "");
      setFormPopulated(true);
    }
  }, [isDetailLoading, isDetailFetching, isDetailSuccess]);

  const onSubmit = async (data: any) => {
    updateRoom({ id: roomId, ...data })
      .unwrap()
      .then(() => {
        snackbar.success("Room updated successfully.");
        onSubmissionSuccess();
      })
      .catch((err) => snackbar.error(getErrorMessage(err)));
  };

  return (
    <div className={MODAL_FORM_ROOT_CLASS}>
      {formPopulated ? (
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
          <div className="pt-5 md:float-right">
            <AppButton
              className="w-full md:w-32"
              disabled={isLoading}
              variant="outlined"
              type="submit"
            >
              {isLoading ? <AppLoader small /> : "Update Room"}
            </AppButton>
          </div>
        </form>
      ) : (
        <AppLoader />
      )}
    </div>
  );
};
