"use client";

import { useMemo, useState } from "react";
import AppButton from "@/app/components/AppButton";
import {
  useGetFinancialReportQuery,
  useGetIncomeReportQuery,
  useGetExpenseReportQuery,
} from "@/app/store/reducer/reports";
import { API_URL } from "@/app/config";
import { getToken } from "@/app/utils/helpers";
import useSnackbar from "@/app/components/AppSnackbar/hooks/useSnackbar";
import { useGetPaymentMethodsQuery } from "@/app/store/reducer/income";
import { useGetBookingPlatformsQuery } from "@/app/store/reducer/settings";
import { useGetCategoryListQuery } from "@/app/store/reducer/category";

type ReportTab = "financial" | "income" | "expense";

export default function ReportsPage() {
  const snackbar = useSnackbar();
  const defaultRange = useMemo(() => {
    const t = new Date();
    const from = new Date(t.getFullYear(), t.getMonth(), 1).toISOString().slice(0, 10);
    const to = t.toISOString().slice(0, 10);
    return { from, to };
  }, []);

  const [tab, setTab] = useState<ReportTab>("financial");
  const [from, setFrom] = useState(defaultRange.from);
  const [to, setTo] = useState(defaultRange.to);

  const [paymentMethodId, setPaymentMethodId] = useState<number | "">("");
  const [bookingPlatformId, setBookingPlatformId] = useState<number | "">("");
  const [directOnly, setDirectOnly] = useState(false);
  const [categoryId, setCategoryId] = useState<number | "">("");

  const { data: paymentMethods } = useGetPaymentMethodsQuery();
  const { data: platforms } = useGetBookingPlatformsQuery();
  const { data: categoriesData } = useGetCategoryListQuery({
    page: 1,
    perPage: 200,
  });

  const incomeArgs = useMemo(
    () => ({
      dateFrom: from,
      dateTo: to,
      ...(typeof paymentMethodId === "number" ? { paymentMethodId } : {}),
      ...(typeof bookingPlatformId === "number" && !directOnly
        ? { bookingPlatformId }
        : {}),
      ...(directOnly ? { directBookingOnly: true as const } : {}),
    }),
    [from, to, paymentMethodId, bookingPlatformId, directOnly]
  );

  const expenseArgs = useMemo(
    () => ({
      dateFrom: from,
      dateTo: to,
      ...(typeof categoryId === "number" ? { categoryId } : {}),
    }),
    [from, to, categoryId]
  );

  const finQ = useGetFinancialReportQuery(
    { dateFrom: from, dateTo: to },
    { skip: tab !== "financial" }
  );
  const incQ = useGetIncomeReportQuery(incomeArgs, { skip: tab !== "income" });
  const expQ = useGetExpenseReportQuery(expenseArgs, { skip: tab !== "expense" });

  const activeLoading =
    tab === "financial"
      ? finQ.isLoading
      : tab === "income"
        ? incQ.isLoading
        : expQ.isLoading;
  const activeError =
    tab === "financial" ? finQ.isError : tab === "income" ? incQ.isError : expQ.isError;
  const refetch = () => {
    if (tab === "financial") void finQ.refetch();
    if (tab === "income") void incQ.refetch();
    if (tab === "expense") void expQ.refetch();
  };

  const buildPdfUrl = async (): Promise<string> => {
    const sp = new URLSearchParams({ dateFrom: from, dateTo: to });
    if (tab === "income") {
      if (typeof paymentMethodId === "number") {
        sp.set("paymentMethodId", String(paymentMethodId));
      }
      if (directOnly) {
        sp.set("directBookingOnly", "true");
      } else if (typeof bookingPlatformId === "number") {
        sp.set("bookingPlatformId", String(bookingPlatformId));
      }
      return `${API_URL}/reports/income/pdf?${sp}`;
    }
    if (tab === "expense") {
      if (typeof categoryId === "number") {
        sp.set("categoryId", String(categoryId));
      }
      return `${API_URL}/reports/expense/pdf?${sp}`;
    }
    return `${API_URL}/reports/financial/pdf?${sp}`;
  };

  const downloadPdf = async () => {
    try {
      const token = await getToken();
      const url = await buildPdfUrl();
      const res = await fetch(url, { headers: { authorization: token } });
      if (!res.ok) throw new Error("Download failed");
      const blob = await res.blob();
      const href = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = href;
      a.download = `${tab}-report-${from}-${to}.pdf`;
      a.click();
      URL.revokeObjectURL(href);
      snackbar.success("PDF downloaded.");
    } catch {
      snackbar.error("Could not download PDF. Check report access and filters.");
    }
  };

  return (
    <div className="p-6 max-w-5xl">
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">Reports</h1>
      <p className="text-sm text-gray-500 mb-6">
        Choose report type, set the period and filters, then review in the browser or download PDF.
        Requires <strong>reports → view</strong>.
      </p>

      <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200 pb-4">
        {(
          [
            ["financial", "Financial overview"],
            ["income", "Income"],
            ["expense", "Expenses"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              tab === id
                ? "bg-primary-100 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 items-end mb-6">
        <div>
          <label className="block text-xs text-gray-500 mb-1">From</label>
          <input
            type="date"
            className="border rounded px-3 py-2"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-xs text-gray-500 mb-1">To</label>
          <input
            type="date"
            className="border rounded px-3 py-2"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>

        {tab === "income" && (
          <>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Payment method</label>
              <select
                className="border rounded px-3 py-2 min-w-[180px]"
                value={paymentMethodId === "" ? "" : String(paymentMethodId)}
                onChange={(e) =>
                  setPaymentMethodId(e.target.value ? Number(e.target.value) : "")
                }
              >
                <option value="">All methods</option>
                {paymentMethods?.map((pm) => (
                  <option key={pm.id} value={pm.id}>
                    {pm.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Booking platform</label>
              <select
                className="border rounded px-3 py-2 min-w-[180px]"
                disabled={directOnly}
                value={bookingPlatformId === "" ? "" : String(bookingPlatformId)}
                onChange={(e) =>
                  setBookingPlatformId(e.target.value ? Number(e.target.value) : "")
                }
              >
                <option value="">All platforms</option>
                {platforms?.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>
            <label className="flex items-center gap-2 text-sm cursor-pointer pb-2">
              <input
                type="checkbox"
                checked={directOnly}
                onChange={(e) => {
                  setDirectOnly(e.target.checked);
                  if (e.target.checked) setBookingPlatformId("");
                }}
              />
              Direct / no platform only
            </label>
          </>
        )}

        {tab === "expense" && (
          <div>
            <label className="block text-xs text-gray-500 mb-1">Category</label>
            <select
              className="border rounded px-3 py-2 min-w-[200px]"
              value={categoryId === "" ? "" : String(categoryId)}
              onChange={(e) =>
                setCategoryId(e.target.value ? Number(e.target.value) : "")
              }
            >
              <option value="">All categories</option>
              {categoriesData?.data?.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        )}

        <AppButton variant="outlined" onClick={() => refetch()}>
          Refresh
        </AppButton>
        <AppButton onClick={downloadPdf}>Download PDF</AppButton>
      </div>

      {activeLoading && <p className="text-gray-500">Loading…</p>}
      {activeError && (
        <p className="text-red-600">
          Could not load report. Check permissions or sign in again.
        </p>
      )}

      {tab === "financial" && finQ.data && (
        <div className="bg-white rounded-xl shadow overflow-hidden border border-gray-100">
          <table className="w-full text-left text-sm">
            <tbody>
              <tr className="border-b">
                <th className="p-4 text-gray-500 font-medium">Period</th>
                <td className="p-4">
                  {finQ.data.period.dateFrom ?? "—"} → {finQ.data.period.dateTo ?? "—"}
                </td>
              </tr>
              <tr className="border-b bg-green-50/50">
                <th className="p-4">Income total</th>
                <td className="p-4 font-semibold">
                  € {finQ.data.income.totalAmount.toFixed(2)} ({finQ.data.income.entryCount}{" "}
                  entries)
                </td>
              </tr>
              <tr className="border-b bg-red-50/50">
                <th className="p-4">Expense total</th>
                <td className="p-4 font-semibold">
                  € {finQ.data.expense.totalAmount.toFixed(2)} (
                  {finQ.data.expense.entryCount} entries)
                </td>
              </tr>
              <tr>
                <th className="p-4">Net</th>
                <td className="p-4 font-bold text-lg">€ {finQ.data.net.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {tab === "income" && incQ.data && (
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow border border-gray-100 p-4 text-sm">
            <p className="text-gray-600 mb-2">
              <span className="font-medium">Filters: </span>
              {incQ.data.filters.paymentMethodName ?? "All payment methods"}
              {" · "}
              {incQ.data.filters.directBookingOnly
                ? "Direct / no platform"
                : incQ.data.filters.bookingPlatformName ?? "All platforms"}
            </p>
            <p className="text-lg font-semibold">
              Total € {incQ.data.summary.totalAmount.toFixed(2)} —{" "}
              {incQ.data.summary.entryCount} entries
            </p>
          </div>
          <div className="bg-white rounded-xl shadow overflow-x-auto border border-gray-100">
            <table className="w-full text-left text-sm min-w-[720px]">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="p-3">Date</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Room</th>
                  <th className="p-3">Bed</th>
                  <th className="p-3">Payment</th>
                  <th className="p-3">Platform</th>
                  <th className="p-3">Remarks</th>
                </tr>
              </thead>
              <tbody>
                {incQ.data.rows.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="p-6 text-center text-gray-500">
                      No rows for this period and filters.
                    </td>
                  </tr>
                ) : (
                  incQ.data.rows.map((row) => (
                    <tr key={row.id} className="border-t border-gray-100">
                      <td className="p-3 whitespace-nowrap">{row.incomeDate}</td>
                      <td className="p-3">€ {Number(row.amount).toFixed(2)}</td>
                      <td className="p-3">{row.roomNumber}</td>
                      <td className="p-3">{row.bedLabel}</td>
                      <td className="p-3">{row.paymentMethod}</td>
                      <td className="p-3">{row.bookingPlatform ?? "—"}</td>
                      <td className="p-3 max-w-[200px] truncate">{row.remarks ?? "—"}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {tab === "expense" && expQ.data && (
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow border border-gray-100 p-4 text-sm">
            <p className="text-gray-600 mb-2">
              <span className="font-medium">Category: </span>
              {expQ.data.filters.categoryName ?? "All categories"}
            </p>
            <p className="text-lg font-semibold">
              Total € {expQ.data.summary.totalAmount.toFixed(2)} —{" "}
              {expQ.data.summary.entryCount} entries
            </p>
          </div>
          <div className="bg-white rounded-xl shadow overflow-x-auto border border-gray-100">
            <table className="w-full text-left text-sm min-w-[800px]">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="p-3">Date</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Brand</th>
                  <th className="p-3">Qty</th>
                  <th className="p-3">Unit</th>
                  <th className="p-3">Total</th>
                  <th className="p-3">Remarks</th>
                </tr>
              </thead>
              <tbody>
                {expQ.data.rows.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="p-6 text-center text-gray-500">
                      No rows for this period and filters.
                    </td>
                  </tr>
                ) : (
                  expQ.data.rows.map((row) => (
                    <tr key={row.id} className="border-t border-gray-100">
                      <td className="p-3 whitespace-nowrap">{row.expenseDate}</td>
                      <td className="p-3">{row.categoryName}</td>
                      <td className="p-3">{row.brand}</td>
                      <td className="p-3">{row.quantity}</td>
                      <td className="p-3">€ {Number(row.unitPrice).toFixed(2)}</td>
                      <td className="p-3 font-medium">
                        € {Number(row.totalPrice).toFixed(2)}
                      </td>
                      <td className="p-3 max-w-[180px] truncate">{row.remarks ?? "—"}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
