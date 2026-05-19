"use client";

import { AppConfirmation } from "@/app/components/AppConfirmation";
import { ModalFormLoadingFallback } from "@/app/components/ModalFormLoadingFallback";
import AppButton from "@/app/components/AppButton";
import { AppContainer } from "@/app/components/AppContainer";
import { AppTable } from "@/app/components/AppTable";
import { TableHeader } from "@/app/components/types";
import { useGetUsersQuery, useDeactivateUserMutation } from "@/app/store/reducer/users";
import { User } from "@/app/store/reducer/users/types";
import useSnackbar from "@/app/components/AppSnackbar/hooks/useSnackbar";
import { getErrorMessage } from "@/app/utils/helpers";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import dynamic from "next/dynamic";
import { useState } from "react";

const headers: TableHeader[] = [
    {
        label: "ID",
        width: "8%",
    },
    {
        label: "Name",
        width: "25%",
    },
    {
        label: "Email",
        width: "30%",
    },
    {
        label: "Status",
        width: "15%",
    },
    {
        label: "Actions",
        width: "22%",
    },
];

export default function Users() {
    const [addUserOpen, setAddUserOpen] = useState(false);
    const snackbar = useSnackbar();
    const { data, isLoading, isFetching, isError, isSuccess } = useGetUsersQuery();
    const [deactivateUser] = useDeactivateUserMutation();

    const handleDeactivate = (id: number) => {
        deactivateUser(id)
            .unwrap()
            .then(() => snackbar.success("User has been deactivated."))
            .catch((err) => snackbar.error(getErrorMessage(err)));
    };

    const getTableData = (data: User[]) =>
        data.map((user) =>
            Object.assign({
                id: user.id,
                name: user.name,
                email: user.email,
                status: user.isActive ? (
                    <span className="text-green-600 font-medium">Active</span>
                ) : (
                    <span className="text-red-500 font-medium">Inactive</span>
                ),
                actions: (
                    <div className="flex">
                        {user.isActive === true && (
                            <AppButton
                                className="w-32"
                                startIcon={<PersonOffIcon />}
                                variant="outlined"
                                onClick={() => handleDeactivate(user.id)}
                            >
                                Deactivate
                            </AppButton>
                        )}
                    </div>
                ),
            })
        );

    return (
        <>
            <AppContainer
                pageHeader="User Management"
                topPanel={
                    <div className="border-x-2 px-5 border-gray-300">
                        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 py-5">
                            <div>
                                <AppButton
                                    className="w-full"
                                    startIcon={<AddCircleOutlineIcon />}
                                    onClick={() => setAddUserOpen(true)}
                                >
                                    Add User
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
                    data={getTableData(data || [])}
                />
            </AppContainer>
            <AppConfirmation
                open={addUserOpen}
                title="Add User"
                handleClose={() => setAddUserOpen(false)}
                viewOnly
                closeButtonHidden
            >
                <UserAddForm onSubmissionSuccess={() => setAddUserOpen(false)} />
            </AppConfirmation>
        </>
    );
}

const UserAddForm = dynamic(
  () => import("@/app/components/Forms/UserAddForm").then((mod) => mod.UserAddForm),
  { loading: () => <ModalFormLoadingFallback /> }
);
