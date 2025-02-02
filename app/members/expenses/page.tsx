"use client";

import AppButton from "@/app/components/AppButton";
import { AppContainer } from "@/app/components/AppContainer";
import useSnackbar from "@/app/components/AppSnackbar/hooks/useSnackbar";
import { AppTable } from "@/app/components/AppTable";
import { ExpenseFilter } from "@/app/components/AppTableFilters/expenseFilter";
import { ExpenseAddForm } from "@/app/components/Forms/ExpenseAddForm";
import { TableHeader } from "@/app/components/types";
import { useDispatch, useSelector } from "@/app/store/hooks";
import { useGetExpenseListQuery } from "@/app/store/reducer/expense";
import { Expense } from "@/app/store/reducer/expense/types";
import { formatDate } from "@/app/utils/date";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import dynamic from "next/dynamic";
import { useState } from "react";

const headers: TableHeader[] = [
    {
        label: "ID",
        width: "10%",
    },
    {
        label: "Category",
        width: "10%",
    },
    {
        label: "Brand",
        width: "10%",
    },
    {
        label: "Quantity",
        width: "10%",
    },
    {
        label: "Unit Price",
        width: "10%",
    },
    {
        label: "Total Price",
        width: "10%",
    },
    {
        label: "Expense Date",
        width: "10%",
    },
    {
        label: "Actions",
        width: "30%",
    },
];


export default function Expenses() {
    const dispatch = useDispatch();
    const snackbar = useSnackbar();
    const [addExpensePopupOpen, setAddExpensePopupOpen] = useState(false);
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
        caetgory: ed.categoryName,
        brand: ed.brand,
        quantity: ed.quantity,
        unitPrice: ed.unitPrice,
        totalPrice: ed.totalPrice,
        expenseDate: formatDate(ed.expenseDate),
        actions: <></>
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
    </>
}

const AppConfirmation = dynamic(() => import("@/app/components/AppConfirmation").then((mod) => mod.AppConfirmation));
