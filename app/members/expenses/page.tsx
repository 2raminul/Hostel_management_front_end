"use client";

import AppButton from "@/app/components/AppButton";
import { AppContainer } from "@/app/components/AppContainer";
import { AppDataCount } from "@/app/components/AppDataCount";
import { AppPagination } from "@/app/components/AppPagination";
import { AppPerPage } from "@/app/components/AppPerPage";
import { AppTable } from "@/app/components/AppTable";
import { ExpenseFilter } from "@/app/components/AppTableFilters/expenseFilter";
import { AppTableFooter } from "@/app/components/AppTableFooter";
import { AppConfirmation } from "@/app/components/AppConfirmation";
import { ModalFormLoadingFallback } from "@/app/components/ModalFormLoadingFallback";
import { TableHeader } from "@/app/components/types";
import { useDispatch, useSelector } from "@/app/store/hooks";
import { setExpensePage, setExpensePerPage, useGetExpenseListQuery } from "@/app/store/reducer/expense";
import { Expense } from "@/app/store/reducer/expense/types";
import { formatDate } from "@/app/utils/date";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import dynamic from "next/dynamic";
import { useState } from "react";
import EditNoteIcon from '@mui/icons-material/EditNote';
import HistoryIcon from '@mui/icons-material/History';

const headers: TableHeader[] = [
    { label: "ID", width: "8%" },
    { label: "Category", width: "9%" },
    { label: "Settlement", width: "10%" },
    { label: "Brand", width: "8%" },
    { label: "Quantity", width: "8%" },
    { label: "Unit Price", width: "9%" },
    { label: "Total Price", width: "9%" },
    { label: "Expense Date", width: "9%" },
    { label: "Actions", width: "22%" },
];


export default function Expenses() {
    const dispatch = useDispatch();
    const [addExpensePopupOpen, setAddExpensePopupOpen] = useState(false);
    const [editExpensePopupOpen, setEditExpensePopupOpen] = useState(false);
    const [historyExpensePopupOpen, setHistoryExpensePopupOpen] = useState(false);
    const [idInAction, setIdInAction] = useState<number | undefined>();
    const { expenseFilter } = useSelector(state => state.expense);
    const { data: expenseData, isLoading, isFetching, isError, isSuccess } = useGetExpenseListQuery({
        page: expenseFilter.page,
        perPage: expenseFilter.perPage,
        ...(expenseFilter.categoryId && { categoryId: expenseFilter.categoryId }),
        ...(expenseFilter.brand && { brand: expenseFilter.brand }),
        ...(expenseFilter.purchaseDateBefore && { purchaseDateBefore: expenseFilter.purchaseDateBefore }),
        ...(expenseFilter.purchaseDateAfter && { purchaseDateAfter: expenseFilter.purchaseDateAfter }),
    });

    const getTableData = (data: Expense[]) => data.map((ed) => Object.assign({
        id: ed.id,
        category: ed.categoryName,
        settlement: ed.settlementAccount || "—",
        brand: ed.brand,
        quantity: ed.quantity,
        unitPrice: ed.unitPrice,
        totalPrice: ed.totalPrice,
        expenseDate: formatDate(ed.expenseDate),
        actions: <>
            <div className="float-start mr-2">
                <AppButton
                    startIcon={<EditNoteIcon />}
                    variant="outlined"
                    className="w-full md:w-24"
                    onClick={() => { setIdInAction(ed.id); setEditExpensePopupOpen(true); }}>
                    Edit
                </AppButton>
            </div>
            <div className="float-start mr-2">
                <AppButton
                    startIcon={<HistoryIcon />}
                    variant="outlined"
                    className="w-full md:w-24"
                    onClick={() => { setIdInAction(ed.id); setHistoryExpensePopupOpen(true); }}>
                    History
                </AppButton>
            </div>
        </>
    }))

    return <>
        <AppContainer pageHeader="Expense Management" topPanel={<div className="border-x-2 px-5 border-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 py-5">
                <div>
                    <AppButton
                        className="w-full"
                        startIcon={<AddCircleOutlineIcon />}
                        onClick={() => setAddExpensePopupOpen(true)}
                        disabled={/*
                    !!!userData?.permissions?.category?.[
                      PermissionTypeEnum.CREATE
                    ]
                  */
                            false}
                    >
                        Add Expense
                    </AppButton>
                </div>
                <ExpenseFilter />
            </div>
        </div>}>
            <AppTable
                headers={headers}
                isDataLoading={isLoading || isFetching}
                isSuccess={isSuccess}
                isError={isError}
                data={getTableData(expenseData?.data || [])}
            />
            <AppTableFooter>
                <>
                    {!!expenseData?.count && expenseData.count > 0 && (<AppPerPage
                        defaultValue={expenseFilter.perPage}
                        handleChange={(e) => dispatch(setExpensePerPage(+e.target.value))}
                    />)}
                    <AppDataCount
                        total={expenseData?.count || 0}
                        page={expenseFilter?.page || 1}
                        isDataLoading={isFetching || isLoading}
                        perPage={expenseFilter?.perPage || 10}
                    />
                    {!!expenseData && expenseData.count > 0 && (
                        <AppPagination
                            count={Math.ceil(
                                expenseData.count / (expenseFilter?.perPage || 10)
                            )}
                            page={expenseFilter.page}
                            onPageChange={(page: number) => dispatch(setExpensePage(page))}
                        />
                    )}
                </>
            </AppTableFooter>
        </AppContainer>
        <AppConfirmation
            open={addExpensePopupOpen}
            title="Add Expense"
            handleClose={() => setAddExpensePopupOpen(false)}
            viewOnly
            closeButtonHidden
        >
            <ExpenseAddForm
                onSubmissionSuccess={() => setAddExpensePopupOpen(false)} />
        </AppConfirmation>
        <AppConfirmation
            open={editExpensePopupOpen}
            title="Edit Expense"
            handleClose={() => setEditExpensePopupOpen(false)}
            viewOnly
            closeButtonHidden
        >
            {
                idInAction && <ExpenseEditForm
                    onSubmissionSuccess={() => setEditExpensePopupOpen(false)}
                    expenseId={idInAction} />
            }
        </AppConfirmation>
        <AppConfirmation
            open={historyExpensePopupOpen}
            title="Expense History"
            handleClose={() => setHistoryExpensePopupOpen(false)}
            viewOnly
            closeButtonHidden
            dialogMaxWidth="xl"
        >
            {idInAction && <ExpenseHistory expenseId={idInAction} />}
        </AppConfirmation>
    </>
}

const ExpenseAddForm = dynamic(
  () => import("@/app/components/Forms/ExpenseAddForm").then((mod) => mod.ExpenseAddForm),
  { loading: () => <ModalFormLoadingFallback /> }
);
const ExpenseEditForm = dynamic(
  () => import("@/app/components/Forms/ExpenseEditForm").then((mod) => mod.ExpenseEditForm),
  { loading: () => <ModalFormLoadingFallback /> }
);
const ExpenseHistory = dynamic(
  () => import("@/app/components/ExpenseHistory").then((mod) => mod.ExpenseHistory),
  { loading: () => <ModalFormLoadingFallback /> }
);