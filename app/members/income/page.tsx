"use client";

import AppButton from "@/app/components/AppButton";
import { AppContainer } from "@/app/components/AppContainer";
import { AppDataCount } from "@/app/components/AppDataCount";
import { AppPagination } from "@/app/components/AppPagination";
import { AppPerPage } from "@/app/components/AppPerPage";
import { AppTable } from "@/app/components/AppTable";
import { IncomeFilter } from "@/app/components/AppTableFilters/incomeFilter";
import { AppTableFooter } from "@/app/components/AppTableFooter";
import { TableHeader } from "@/app/components/types";
import { AppConfirmation } from "@/app/components/AppConfirmation";
import { ModalFormLoadingFallback } from "@/app/components/ModalFormLoadingFallback";
import { MODAL_FORM_ROOT_CLASS } from "@/app/components/modalLayout";
import { useDispatch, useSelector } from "@/app/store/hooks";
import {
  setIncomePage,
  setIncomePerPage,
  useDeleteIncomeEntryMutation,
  useGetIncomeListQuery,
} from "@/app/store/reducer/income";
import { IncomeEntry } from "@/app/store/reducer/income/types";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditNoteIcon from "@mui/icons-material/EditNote";
import dynamic from "next/dynamic";
import { useState } from "react";

const headers: TableHeader[] = [
  { label: "ID", width: "7%" },
  { label: "Room", width: "9%" },
  { label: "Bed", width: "7%" },
  { label: "Amount (€)", width: "10%" },
  { label: "Payment", width: "10%" },
  { label: "Platform", width: "8%" },
  { label: "Settlement", width: "10%" },
  { label: "Date", width: "9%" },
  { label: "Remarks", width: "12%" },
  { label: "Actions", width: "14%" },
];

export default function IncomePage() {
  const dispatch = useDispatch();
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [idInAction, setIdInAction] = useState<number | undefined>();
  const { incomeFilter } = useSelector((state) => state.income);
  const { data, isLoading, isFetching, isError, isSuccess } = useGetIncomeListQuery({
    page: incomeFilter.page,
    perPage: incomeFilter.perPage,
    ...(incomeFilter.roomId && { roomId: incomeFilter.roomId }),
    ...(incomeFilter.bedId && { bedId: incomeFilter.bedId }),
    ...(incomeFilter.dateFrom && { dateFrom: incomeFilter.dateFrom }),
    ...(incomeFilter.dateTo && { dateTo: incomeFilter.dateTo }),
  });
  const [deleteIncomeEntry] = useDeleteIncomeEntryMutation();

  const getTableData = (rows: IncomeEntry[]) =>
    rows.map((ie) => ({
      id: ie.id,
      room: ie.roomNumber,
      bed: ie.bedLabel,
      amount: `€ ${Number(ie.amount).toFixed(2)}`,
      payment: ie.paymentMethod,
      platform: ie.bookingPlatform || "—",
      settlement: ie.settlementAccount || "—",
      date: ie.incomeDate,
      remarks: ie.remarks || "—",
      actions: (
        <>
          <div className="float-start mr-2">
            <AppButton
              startIcon={<EditNoteIcon />}
              variant="outlined"
              className="w-full md:w-24"
              onClick={() => {
                setIdInAction(ie.id);
                setEditOpen(true);
              }}
            >
              Edit
            </AppButton>
          </div>
          <div className="float-start mr-2">
            <AppButton
              startIcon={<DeleteOutlineIcon />}
              variant="outlined"
              className="w-full md:w-24"
              onClick={() => {
                setIdInAction(ie.id);
                setDeleteOpen(true);
              }}
            >
              Delete
            </AppButton>
          </div>
        </>
      ),
    }));

  return (
    <>
      <AppContainer
        pageHeader="Income Management"
        topPanel={
          <div className="border-x-2 px-5 border-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 py-5">
              <div>
                <AppButton
                  className="w-full"
                  startIcon={<AddCircleOutlineIcon />}
                  onClick={() => setAddOpen(true)}
                >
                  Add Income
                </AppButton>
              </div>
              <IncomeFilter />
            </div>
          </div>
        }
      >
        <AppTable
          headers={headers}
          isDataLoading={isLoading || isFetching}
          isSuccess={isSuccess}
          isError={isError}
          data={getTableData(data?.data || [])}
        />
        <AppTableFooter>
          <>
            {!!data?.count && data.count > 0 && (
              <AppPerPage
                defaultValue={incomeFilter.perPage}
                handleChange={(e) => dispatch(setIncomePerPage(+e.target.value))}
              />
            )}
            <AppDataCount
              total={data?.count || 0}
              page={incomeFilter?.page || 1}
              isDataLoading={isFetching || isLoading}
              perPage={incomeFilter?.perPage || 10}
            />
            {!!data && data.count > 0 && (
              <AppPagination
                count={Math.ceil(data.count / (incomeFilter?.perPage || 10))}
                page={incomeFilter.page}
                onPageChange={(page: number) => dispatch(setIncomePage(page))}
              />
            )}
          </>
        </AppTableFooter>
      </AppContainer>

      <AppConfirmation
        open={addOpen}
        title="Add Income Entry"
        handleClose={() => setAddOpen(false)}
        viewOnly
        closeButtonHidden
      >
        <IncomeEntryAddForm onSubmissionSuccess={() => setAddOpen(false)} />
      </AppConfirmation>

      <AppConfirmation
        open={editOpen}
        title="Edit Income Entry"
        handleClose={() => setEditOpen(false)}
        viewOnly
        closeButtonHidden
      >
        {idInAction && (
          <IncomeEntryEditForm
            entryId={idInAction}
            onSubmissionSuccess={() => setEditOpen(false)}
          />
        )}
      </AppConfirmation>

      <AppConfirmation
        open={deleteOpen}
        title="Delete Income Entry"
        handleClose={() => setDeleteOpen(false)}
        viewOnly
        closeButtonHidden
        dialogMaxWidth="sm"
      >
        <div className={MODAL_FORM_ROOT_CLASS}>
          <p className="mb-4">Are you sure you want to delete this income entry?</p>
          <AppButton
            startIcon={<DeleteOutlineIcon />}
            variant="outlined"
            className="w-full"
            onClick={() => {
              if (idInAction) {
                deleteIncomeEntry(idInAction);
                setDeleteOpen(false);
              }
            }}
          >
            Confirm Delete
          </AppButton>
        </div>
      </AppConfirmation>
    </>
  );
}

const IncomeEntryAddForm = dynamic(
  () =>
    import("@/app/components/Forms/IncomeEntryAddForm").then((mod) => mod.IncomeEntryAddForm),
  { loading: () => <ModalFormLoadingFallback /> }
);
const IncomeEntryEditForm = dynamic(
  () =>
    import("@/app/components/Forms/IncomeEntryEditForm").then((mod) => mod.IncomeEntryEditForm),
  { loading: () => <ModalFormLoadingFallback /> }
);
