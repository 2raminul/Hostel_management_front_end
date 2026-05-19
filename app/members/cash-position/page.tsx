"use client";

import { useMemo, useState } from "react";
import { AppContainer } from "@/app/components/AppContainer";
import { AppTable } from "@/app/components/AppTable";
import { TableHeader } from "@/app/components/types";
import { useGetSettlementBalancesQuery } from "@/app/store/reducer/reports";

const headers: TableHeader[] = [
  { label: "ID", width: "8%" },
  { label: "Account", width: "22%" },
  { label: "Kind", width: "16%" },
  { label: "Income (€)", width: "18%" },
  { label: "Expense (€)", width: "18%" },
  { label: "Net (€)", width: "18%" },
];

export default function CashPositionPage() {
  const defaultRange = useMemo(() => {
    const t = new Date();
    const from = new Date(t.getFullYear(), t.getMonth(), 1).toISOString().slice(0, 10);
    const to = t.toISOString().slice(0, 10);
    return { from, to };
  }, []);

  const [from, setFrom] = useState(defaultRange.from);
  const [to, setTo] = useState(defaultRange.to);

  const { data, isLoading, isFetching, isError, isSuccess, refetch } =
    useGetSettlementBalancesQuery({ dateFrom: from, dateTo: to });

  const rows =
    data?.accounts.map((a) => ({
      id: a.settlementAccountId,
      account: a.name,
      kind: a.accountKind.replace(/_/g, " "),
      income: `€ ${a.incomeTotal.toFixed(2)}`,
      expense: `€ ${a.expenseTotal.toFixed(2)}`,
      net: `€ ${a.net.toFixed(2)}`,
    })) ?? [];

  return (
    <AppContainer
      pageHeader="Cash position by settlement account"
      topPanel={
        <div className="border-x-2 px-5 border-gray-300">
          <div className="flex flex-wrap items-end gap-4 py-5">
            <div>
              <label className="block text-sm text-gray-600 mb-1">From</label>
              <input
                type="date"
                className="border rounded px-2 py-1"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">To</label>
              <input
                type="date"
                className="border rounded px-2 py-1"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="border rounded px-3 py-1.5 text-sm hover:bg-gray-50"
              onClick={() => void refetch()}
            >
              Apply
            </button>
          </div>
          <p className="pb-4 text-sm text-gray-600">
            Net = income tagged to the account minus expenses tagged to the same account in the
            selected period. Tag income and expenses when adding or editing entries.
          </p>
        </div>
      }
    >
      <AppTable
        headers={headers}
        isDataLoading={isLoading || isFetching}
        isSuccess={isSuccess}
        isError={isError}
        data={rows}
      />
    </AppContainer>
  );
}
