"use client";
import { FC, useState } from "react";
import { useAddBedMutation, useDeleteBedMutation, useGetRoomDetailQuery } from "@/app/store/reducer/rooms";
import { Bed } from "@/app/store/reducer/rooms/types";
import { AppLoader } from "../../AppLoader";
import { MODAL_FORM_ROOT_CLASS } from "@/app/components/modalLayout";
import AppButton from "../../AppButton";
import useSnackbar from "../../AppSnackbar/hooks/useSnackbar";
import { getErrorMessage } from "@/app/utils/helpers";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const BedsManagementForm: FC<{ roomId: number }> = ({ roomId }) => {
  const snackbar = useSnackbar();
  const { data: roomDetail, isLoading, isFetching } = useGetRoomDetailQuery(roomId);
  const [deleteBed, { isLoading: isDeleting }] = useDeleteBedMutation();
  const [addBed, { isLoading: isAdding }] = useAddBedMutation();
  const [bedLabel, setBedLabel] = useState("");

  const handleDelete = (bedId: number) => {
    deleteBed(bedId)
      .unwrap()
      .then(() => snackbar.success("Bed removed successfully."))
      .catch((err) => snackbar.error(getErrorMessage(err)));
  };

  const handleAdd = () => {
    if (!bedLabel.trim()) {
      snackbar.error("Bed label is required.");
      return;
    }
    addBed({ roomId, bedLabel: bedLabel.trim() })
      .unwrap()
      .then(() => {
        snackbar.success("Bed added successfully.");
        setBedLabel("");
      })
      .catch((err) => snackbar.error(getErrorMessage(err)));
  };

  if (isLoading || isFetching) {
    return <AppLoader />;
  }

  const beds: Bed[] = roomDetail?.beds || [];

  return (
    <div className={MODAL_FORM_ROOT_CLASS}>
      <table className="w-full text-sm border-collapse mb-6">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="text-left py-2 px-3 font-semibold">Bed Label</th>
            <th className="text-left py-2 px-3 font-semibold">Status</th>
            <th className="text-left py-2 px-3 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {beds.length === 0 ? (
            <tr>
              <td colSpan={3} className="py-4 px-3 text-center text-gray-500">
                No beds found for this room.
              </td>
            </tr>
          ) : (
            beds.map((bed) => (
              <tr key={bed.id} className="border-b border-gray-100">
                <td className="py-2 px-3">{bed.bedLabel}</td>
                <td className="py-2 px-3">
                  {bed.isOccupied ? (
                    <span className="font-medium" style={{ color: "#d32f2f" }}>Occupied</span>
                  ) : (
                    <span className="font-medium" style={{ color: "#2e7d32" }}>Available</span>
                  )}
                </td>
                <td className="py-2 px-3">
                  <AppButton
                    variant="outlined"
                    startIcon={<DeleteOutlineIcon />}
                    disabled={isDeleting}
                    onClick={() => handleDelete(bed.id)}
                  >
                    Remove
                  </AppButton>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="border-t border-gray-200 pt-4">
        <p className="font-semibold mb-3">Add Bed</p>
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={bedLabel}
            onChange={(e) => setBedLabel(e.target.value)}
            placeholder="Bed label e.g. A1"
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-500 flex-1"
          />
          <AppButton
            startIcon={<AddCircleOutlineIcon />}
            disabled={isAdding}
            onClick={handleAdd}
          >
            {isAdding ? <AppLoader small /> : "Add"}
          </AppButton>
        </div>
      </div>
    </div>
  );
};
