"use client";
import { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { incomeEntryAddSchema } from "@/app/schema/form/income";
import { AppSearchableDropdown } from "../../AppSearchableDropdown";
import { useAddIncomeEntryMutation, useGetPaymentMethodsQuery } from "@/app/store/reducer/income";
import { useGetSettlementAccountsQuery } from "@/app/store/reducer/settings";
import { useGetRoomsQuery, useGetRoomDetailQuery } from "@/app/store/reducer/rooms";
import AppInputField from "../../AppInputField";
import { AppOptionLabel } from "../../AppOptionLabel";
import AppButton from "../../AppButton";
import { AppLoader } from "../../AppLoader";
import { getErrorMessage } from "@/app/utils/helpers";
import useSnackbar from "../../AppSnackbar/hooks/useSnackbar";
import { MODAL_FORM_ROOT_CLASS } from "@/app/components/modalLayout";

export const IncomeEntryAddForm: FC<{ onSubmissionSuccess: () => void }> = ({ onSubmissionSuccess }) => {
  const snackbar = useSnackbar();
  const [selectedRoomId, setSelectedRoomId] = useState<number | null>(null);
  const { data: rooms } = useGetRoomsQuery();
  const { data: roomDetail } = useGetRoomDetailQuery(selectedRoomId as number, {
    skip: !selectedRoomId,
  });
  const { data: paymentMethods } = useGetPaymentMethodsQuery();
  const { data: settlementAccounts } = useGetSettlementAccountsQuery();
  const [addIncomeEntry, { isLoading }] = useAddIncomeEntryMutation();

  const settlementNone = "— None —";

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      incomeDate: new Date().toISOString().split("T")[0],
    } as any,
    mode: "onChange",
    resolver: yupResolver(incomeEntryAddSchema),
  });

  const onSubmit = async (data: any) => {
    const payload = { ...data };
    if (
      payload.settlementAccountId == null ||
      payload.settlementAccountId === 0
    ) {
      delete payload.settlementAccountId;
    }
    addIncomeEntry(payload)
      .unwrap()
      .then(() => {
        snackbar.success("Income entry added successfully.");
        onSubmissionSuccess();
      })
      .catch((err) => snackbar.error(getErrorMessage(err)));
  };

  return (
    <div className={MODAL_FORM_ROOT_CLASS}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <AppSearchableDropdown
            labelText="Room"
            placeHolder="Select a room"
            isRequired
            freeSolo={false}
            size="small"
            optionList={rooms?.map((r) => r.roomNumber) || []}
            onInputChange={(value) => {
              const room = rooms?.find((r) => r.roomNumber === value);
              setSelectedRoomId(room?.id ?? null);
              setValue("bedId", 0);
            }}
            field=""
          />
        </div>
        <div>
          <AppSearchableDropdown
            labelText="Bed"
            placeHolder="Select a bed"
            isRequired
            freeSolo={false}
            size="small"
            optionList={roomDetail?.beds?.map((b) => b.bedLabel) || []}
            onInputChange={(value) => {
              const bed = roomDetail?.beds?.find((b) => b.bedLabel === value);
              setValue("bedId", bed?.id || 0);
            }}
            field=""
            error={errors?.bedId?.message}
          />
        </div>
        <div>
          <AppSearchableDropdown
            labelText="Settlement account"
            placeHolder="Optional — where funds land"
            freeSolo={false}
            size="small"
            optionList={
              settlementAccounts?.length
                ? [settlementNone, ...settlementAccounts.map((s) => s.name)]
                : [settlementNone]
            }
            onInputChange={(value) => {
              if (!value || value === settlementNone) {
                setValue("settlementAccountId", undefined);
                return;
              }
              const acc = settlementAccounts?.find((s) => s.name === value);
              setValue("settlementAccountId", acc?.id ?? undefined);
            }}
            field=""
          />
        </div>
        <div>
          <AppSearchableDropdown
            labelText="Payment Method"
            placeHolder="Select payment method"
            isRequired
            freeSolo={false}
            size="small"
            optionList={paymentMethods?.map((p) => p.name) || []}
            onInputChange={(value) => {
              const pm = paymentMethods?.find((p) => p.name === value);
              setValue("paymentMethodId", pm?.id || 0);
            }}
            field=""
            error={errors?.paymentMethodId?.message}
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
                placeholder="YYYY-MM-DD"
                error={!!errors?.incomeDate?.message}
                errorText={errors?.incomeDate?.message}
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
                placeholder="Optional remarks"
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
