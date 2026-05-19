"use client";

import { AppConfirmation } from "@/app/components/AppConfirmation";
import AppButton from "@/app/components/AppButton";
import { AppContainer } from "@/app/components/AppContainer";
import { AppTable } from "@/app/components/AppTable";
import { TableHeader } from "@/app/components/types";
import { useDeleteRoomMutation, useGetRoomsQuery } from "@/app/store/reducer/rooms";
import { Room } from "@/app/store/reducer/rooms/types";
import { getErrorMessage } from "@/app/utils/helpers";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditNoteIcon from "@mui/icons-material/EditNote";
import HotelIcon from "@mui/icons-material/Hotel";
import dynamic from "next/dynamic";
import { useState } from "react";
import useSnackbar from "@/app/components/AppSnackbar/hooks/useSnackbar";
import { ModalFormLoadingFallback } from "@/app/components/ModalFormLoadingFallback";
import { MODAL_FORM_ROOT_CLASS } from "@/app/components/modalLayout";

const headers: TableHeader[] = [
  { label: "ID", width: "8%" },
  { label: "Room No.", width: "15%" },
  { label: "Total Beds", width: "12%" },
  { label: "Occupied", width: "12%" },
  { label: "Available", width: "12%" },
  { label: "Description", width: "18%" },
  { label: "Actions", width: "23%" },
];

export default function RoomsPage() {
  const snackbar = useSnackbar();
  const [idInAction, setIdInAction] = useState<number | undefined>();
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [bedsOpen, setBedsOpen] = useState(false);

  const { data: rooms, isLoading, isFetching, isError, isSuccess } = useGetRoomsQuery();
  const [deleteRoom, { isLoading: isDeleting }] = useDeleteRoomMutation();

  const handleDeleteConfirm = () => {
    if (!idInAction) return;
    deleteRoom(idInAction)
      .unwrap()
      .then(() => {
        snackbar.success("Room deleted successfully.");
        setDeleteOpen(false);
        setIdInAction(undefined);
      })
      .catch((err) => snackbar.error(getErrorMessage(err)));
  };

  const getTableData = (rows: Room[]) =>
    rows.map((r) => ({
      id: r.id,
      roomNumber: r.roomNumber,
      totalBeds: r.totalBeds,
      occupied: r.occupiedBeds ?? "—",
      available: r.availableBeds ?? "—",
      description: r.description || "—",
      actions: (
        <div className="flex gap-2">
          <AppButton
            startIcon={<EditNoteIcon />}
            variant="outlined"
            onClick={() => {
              setIdInAction(r.id);
              setEditOpen(true);
            }}
          >
            Edit
          </AppButton>
          <AppButton
            startIcon={<HotelIcon />}
            variant="outlined"
            onClick={() => {
              setIdInAction(r.id);
              setBedsOpen(true);
            }}
          >
            Beds
          </AppButton>
          <AppButton
            startIcon={<DeleteOutlineIcon />}
            variant="outlined"
            onClick={() => {
              setIdInAction(r.id);
              setDeleteOpen(true);
            }}
          >
            Delete
          </AppButton>
        </div>
      ),
    }));

  return (
    <>
      <AppContainer
        pageHeader="Room Management"
        topPanel={
          <div className="border-x-2 px-5 border-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 py-5">
              <div>
                <AppButton
                  className="w-full"
                  startIcon={<AddCircleOutlineIcon />}
                  onClick={() => setAddOpen(true)}
                >
                  Add Room
                </AppButton>
              </div>
            </div>
          </div>
        }
      >
        <AppTable
          headers={headers}
          isDataLoading={isLoading || isFetching}
          isSuccess={isSuccess}
          isError={isError}
          data={getTableData(rooms || [])}
        />
      </AppContainer>

      {/* Add Room */}
      <AppConfirmation
        open={addOpen}
        title="Add Room"
        handleClose={() => setAddOpen(false)}
        viewOnly
        closeButtonHidden
      >
        <RoomAddForm onSubmissionSuccess={() => setAddOpen(false)} />
      </AppConfirmation>

      {/* Edit Room */}
      <AppConfirmation
        open={editOpen}
        title="Edit Room"
        handleClose={() => {
          setEditOpen(false);
          setIdInAction(undefined);
        }}
        viewOnly
        closeButtonHidden
      >
        {idInAction && (
          <RoomEditForm
            roomId={idInAction}
            onSubmissionSuccess={() => {
              setEditOpen(false);
              setIdInAction(undefined);
            }}
          />
        )}
      </AppConfirmation>

      {/* Manage Beds */}
      <AppConfirmation
        open={bedsOpen}
        title="Manage Beds"
        handleClose={() => {
          setBedsOpen(false);
          setIdInAction(undefined);
        }}
        viewOnly
        closeButtonHidden
      >
        {idInAction && <BedsManagementForm roomId={idInAction} />}
      </AppConfirmation>

      {/* Delete Room */}
      <AppConfirmation
        open={deleteOpen}
        title="Delete Room"
        handleClose={() => {
          setDeleteOpen(false);
          setIdInAction(undefined);
        }}
        viewOnly
        closeButtonHidden
        dialogMaxWidth="sm"
      >
        <div className={MODAL_FORM_ROOT_CLASS}>
          <p className="mb-4">Are you sure you want to delete this room?</p>
          <AppButton
            variant="outlined"
            className="w-full"
            disabled={isDeleting}
            onClick={handleDeleteConfirm}
          >
            {isDeleting ? "Deleting..." : "Confirm delete"}
          </AppButton>
        </div>
      </AppConfirmation>
    </>
  );
}

const RoomAddForm = dynamic(
  () => import("@/app/components/Forms/RoomAddForm").then((mod) => mod.RoomAddForm),
  { loading: () => <ModalFormLoadingFallback /> }
);
const RoomEditForm = dynamic(
  () => import("@/app/components/Forms/RoomEditForm").then((mod) => mod.RoomEditForm),
  { loading: () => <ModalFormLoadingFallback /> }
);
const BedsManagementForm = dynamic(
  () =>
    import("@/app/components/Forms/BedsManagementForm").then((mod) => mod.BedsManagementForm),
  { loading: () => <ModalFormLoadingFallback /> }
);
