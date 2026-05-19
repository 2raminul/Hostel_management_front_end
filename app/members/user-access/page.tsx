"use client";

import { useEffect, useMemo, useState } from "react";
import AppButton from "@/app/components/AppButton";
import { AppContainer } from "@/app/components/AppContainer";
import {
  ModuleAccess,
  useGetModulesQuery,
  useGetMyPermissionsQuery,
  useGetUserPermissionsQuery,
  useUpdateUserPermissionsMutation,
} from "@/app/store/reducer/permissions";
import { useGetUsersQuery } from "@/app/store/reducer/users";
import useSnackbar from "@/app/components/AppSnackbar/hooks/useSnackbar";
import { getErrorMessage } from "@/app/utils/helpers";

const emptyAccess = (): ModuleAccess => ({
  view: false,
  edit: false,
  delete: false,
});

export default function UserAccessPage() {
  const snackbar = useSnackbar();
  const { data: me, isLoading: meLoading } = useGetMyPermissionsQuery();
  const { data: moduleList } = useGetModulesQuery();
  const { data: users } = useGetUsersQuery();
  const [userId, setUserId] = useState<number | "">("");
  const { data: target, refetch } = useGetUserPermissionsQuery(
    typeof userId === "number" ? userId : 0,
    { skip: typeof userId !== "number" || userId < 1 }
  );
  const [draft, setDraft] = useState<Record<string, ModuleAccess>>({});
  const [updatePerms, { isLoading: saving }] = useUpdateUserPermissionsMutation();

  useEffect(() => {
    if (target?.permissions) {
      setDraft(JSON.parse(JSON.stringify(target.permissions)) as Record<string, ModuleAccess>);
    }
  }, [target?.permissions]);

  const canUse = me?.isAdmin === true;

  const modules = moduleList?.modules ?? [];

  const matrix = useMemo(() => {
    return modules.map((m) => ({
      key: m,
      label: m.replace(/^\w/, (c) => c.toUpperCase()),
      ...(draft[m] ?? emptyAccess()),
    }));
  }, [draft, modules]);

  const toggle = (mod: string, field: keyof ModuleAccess) => {
    setDraft((prev) => ({
      ...prev,
      [mod]: {
        ...emptyAccess(),
        ...prev[mod],
        [field]: !prev[mod]?.[field],
      },
    }));
  };

  const save = () => {
    if (typeof userId !== "number") return;
    updatePerms({ userId, modules: draft })
      .unwrap()
      .then(() => {
        snackbar.success("Permissions saved.");
        refetch();
      })
      .catch((e) => snackbar.error(getErrorMessage(e)));
  };

  if (meLoading) return <div className="p-8">Loading…</div>;
  if (!canUse) {
    return (
      <div className="p-8 text-gray-600">
        Only administrators can manage module access. Ask an admin to run the database migration and set{" "}
        <code className="bg-gray-100 px-1 rounded">is_admin = 1</code> for your user, then sign in again.
      </div>
    );
  }

  return (
    <AppContainer
      pageHeader="User module access"
      topPanel={<div className="border-x-2 px-5 border-gray-300 py-2" />}
    >
      <div className="max-w-4xl space-y-6">
        <p className="text-sm text-gray-500">
          Grant view / edit / delete per module. Admin accounts ignore these rows and always have full access.
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <label className="text-sm font-medium">User</label>
          <select
            className="border rounded px-3 py-2 min-w-[240px]"
            value={userId === "" ? "" : String(userId)}
            onChange={(e) => {
              const v = e.target.value;
              setUserId(v ? Number(v) : "");
            }}
          >
            <option value="">Select user…</option>
            {users?.map((u) => (
              <option key={u.id} value={u.id}>
                {u.name} ({u.email})
              </option>
            ))}
          </select>
        </div>

        {typeof userId === "number" && userId > 0 && (
          <>
            <div className="overflow-x-auto border rounded-lg">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="p-3">Module</th>
                    <th className="p-3">View</th>
                    <th className="p-3">Edit</th>
                    <th className="p-3">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {matrix.map((row) => (
                    <tr key={row.key} className="border-t">
                      <td className="p-3 font-medium">{row.label}</td>
                      {(["view", "edit", "delete"] as const).map((f) => (
                        <td key={f} className="p-3">
                          <input
                            type="checkbox"
                            checked={!!draft[row.key]?.[f]}
                            onChange={() => toggle(row.key, f)}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <AppButton onClick={save} disabled={saving}>
              {saving ? "Saving…" : "Save permissions"}
            </AppButton>
          </>
        )}
      </div>
    </AppContainer>
  );
}
