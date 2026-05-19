"use client";

import { useGetRoomsQuery } from "@/app/store/reducer/rooms";
import {
  useGetIncomeSummaryQuery,
} from "@/app/store/reducer/income";
import { useGetExpenseSummaryQuery } from "@/app/store/reducer/expense";
import { useGetInventoryListQuery } from "@/app/store/reducer/inventory";

const StatCard = ({ title, value, sub }: { title: string; value: string | number; sub?: string }) => (
  <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
    <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">{title}</p>
    <p className="text-3xl font-bold text-gray-800">{value}</p>
    {sub && <p className="text-xs text-gray-400">{sub}</p>}
  </div>
);

const today = new Date().toISOString().split("T")[0];
const firstOfMonth = today.slice(0, 7) + "-01";

export default function Dashboard() {
  const { data: rooms } = useGetRoomsQuery();
  const { data: incomeSummary } = useGetIncomeSummaryQuery({
    dateFrom: firstOfMonth,
    dateTo: today,
  });
  const { data: expenseMonth } = useGetExpenseSummaryQuery({
    dateFrom: firstOfMonth,
    dateTo: today,
  });
  const { data: expenseAll } = useGetExpenseSummaryQuery({});
  const { data: inventoryData } = useGetInventoryListQuery({ page: 1, perPage: 1 });

  const totalBeds = rooms?.reduce((acc, r) => acc + r.totalBeds, 0) ?? 0;
  const occupiedBeds = rooms?.reduce((acc, r) => acc + (r.occupiedBeds ?? 0), 0) ?? 0;
  const availableBeds = totalBeds - occupiedBeds;
  const occupancyRate = totalBeds > 0 ? Math.round((occupiedBeds / totalBeds) * 100) : 0;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-700 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Rooms"
          value={rooms?.length ?? "—"}
          sub={`${totalBeds} beds total`}
        />
        <StatCard
          title="Occupied Beds"
          value={occupiedBeds}
          sub={`${occupancyRate}% occupancy rate`}
        />
        <StatCard
          title="Available Beds"
          value={availableBeds}
          sub="Ready to book"
        />
        <StatCard
          title="Income This Month"
          value={
            incomeSummary
              ? `€ ${Number(incomeSummary.totalAmount).toFixed(2)}`
              : "—"
          }
          sub={`${incomeSummary?.entryCount ?? 0} entries · ${firstOfMonth} → ${today}`}
        />
        <StatCard
          title="Expenses This Month"
          value={
            expenseMonth
              ? `€ ${Number(expenseMonth.totalAmount).toFixed(2)}`
              : "—"
          }
          sub={`${expenseMonth?.entryCount ?? 0} entries (same period)`}
        />
        <StatCard
          title="Total Expenses (all time)"
          value={
            expenseAll
              ? `€ ${Number(expenseAll.totalAmount).toFixed(2)}`
              : "—"
          }
          sub={`${expenseAll?.entryCount ?? 0} entries`}
        />
        <StatCard
          title="Inventory Items"
          value={inventoryData?.count ?? "—"}
          sub="All tracked items"
        />
      </div>
    </div>
  );
}
