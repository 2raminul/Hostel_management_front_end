import { FC } from "react";
import { TableHeader } from "../types";
import { useGetExpenseHistoryQuery } from "@/app/store/reducer/expense";
import { AppTable } from "../AppTable";
import { AppLoader } from "../AppLoader";
import { formatDate, formatDateTime } from "@/app/utils/date";
import { ExpenseHistoryType } from "@/app/store/reducer/expense/types";
import { MODAL_FORM_ROOT_CLASS } from "@/app/components/modalLayout";

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
        label: "Remarks",
        width: "10%"
    },
    {
        label: "Updated By",
        width: "10%"
    },
    {
        label: "Version",
        width: "10%",
    },
];

export const ExpenseHistory: FC<{ expenseId: number; }> = ({ expenseId }) => {
    const { data, isLoading, isFetching, isError, isSuccess } = useGetExpenseHistoryQuery(expenseId);

    const getTableData = (data: ExpenseHistoryType[]) => data.map(ed => Object.assign({
        id: ed.id,
        category: ed.categoryName,
        brand: ed.brand,
        quantity: ed.quantity,
        unitPrice: ed.unitPrice,
        totalPrice: ed.totalPrice,
        expenseDate: formatDate(ed.expenseDate),
        remarks: ed.remarks,
        updatedBy: ed.updatedBy,
        version: formatDateTime(ed.version)
    }))

    return (
        <div className={MODAL_FORM_ROOT_CLASS}>
            {(isLoading || isFetching) ? (
                <AppLoader />
            ) : (
                <AppTable
                    headers={headers}
                    isDataLoading={isLoading || isFetching}
                    isSuccess={isSuccess}
                    isError={isError}
                    data={getTableData(data?.data || [])}
                />
            )}
        </div>
    );
}