"use client";

import { AppConfirmation } from "@/app/components/AppConfirmation";
import { ModalFormLoadingFallback } from "@/app/components/ModalFormLoadingFallback";
import { AppTable } from "@/app/components/AppTable";
import { TableHeader } from "@/app/components/types";
import useSnackbar from "@/app/components/AppSnackbar/hooks/useSnackbar";
import { getErrorMessage } from "@/app/utils/helpers";
import {
    useGetBookingPlatformsQuery,
    useDeleteBookingPlatformMutation,
    useGetBankInfoListQuery,
    useDeleteBankInfoMutation,
    useGetOnlineCardsQuery,
    useDeleteOnlineCardMutation,
} from "@/app/store/reducer/settings";
import { BookingPlatform, BankInfo, OnlineCard } from "@/app/store/reducer/settings/types";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Tab, Tabs } from "@mui/material";
import dynamic from "next/dynamic";
import { useState } from "react";
import AppButton from "@/app/components/AppButton";

// ─── Table headers ────────────────────────────────────────────────────────────

const bookingPlatformHeaders: TableHeader[] = [
    { label: "ID", width: "15%" },
    { label: "Name", width: "45%" },
    { label: "Status", width: "20%" },
    { label: "Actions", width: "20%" },
];

const bankInfoHeaders: TableHeader[] = [
    { label: "ID", width: "15%" },
    { label: "Account Number", width: "50%" },
    { label: "Status", width: "15%" },
    { label: "Actions", width: "20%" },
];

const onlineCardHeaders: TableHeader[] = [
    { label: "ID", width: "12%" },
    { label: "Name", width: "20%" },
    { label: "Card Number", width: "23%" },
    { label: "Bank Account", width: "25%" },
    { label: "Status", width: "10%" },
    { label: "Actions", width: "10%" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SettingsPage() {
    const snackbar = useSnackbar();
    const [activeTab, setActiveTab] = useState(0);

    // ── Booking Platforms ──────────────────────────────────────────────────────
    const [bpAddOpen, setBpAddOpen] = useState(false);
    const [bpEditOpen, setBpEditOpen] = useState(false);
    const [bpItemInAction, setBpItemInAction] = useState<BookingPlatform | undefined>();

    const {
        data: bookingPlatforms,
        isLoading: bpLoading,
        isFetching: bpFetching,
        isSuccess: bpSuccess,
        isError: bpError,
    } = useGetBookingPlatformsQuery();
    const [deleteBookingPlatform] = useDeleteBookingPlatformMutation();

    // ── Bank Info ──────────────────────────────────────────────────────────────
    const [biAddOpen, setBiAddOpen] = useState(false);
    const [biEditOpen, setBiEditOpen] = useState(false);
    const [biItemInAction, setBiItemInAction] = useState<BankInfo | undefined>();

    const {
        data: bankInfoList,
        isLoading: biLoading,
        isFetching: biFetching,
        isSuccess: biSuccess,
        isError: biError,
    } = useGetBankInfoListQuery();
    const [deleteBankInfo] = useDeleteBankInfoMutation();

    // ── Online Cards ───────────────────────────────────────────────────────────
    const [ocAddOpen, setOcAddOpen] = useState(false);
    const [ocEditOpen, setOcEditOpen] = useState(false);
    const [ocItemInAction, setOcItemInAction] = useState<OnlineCard | undefined>();

    const {
        data: onlineCards,
        isLoading: ocLoading,
        isFetching: ocFetching,
        isSuccess: ocSuccess,
        isError: ocError,
    } = useGetOnlineCardsQuery();
    const [deleteOnlineCard] = useDeleteOnlineCardMutation();

    // ── Table data builders ────────────────────────────────────────────────────

    const getBookingPlatformRows = (items: BookingPlatform[]) =>
        items.map((item) => ({
            id: item.id,
            name: item.name,
            status: item.status ? "Active" : "Inactive",
            actions: (
                <div className="flex gap-2">
                    <AppButton
                        variant="outlined"
                        startIcon={<EditNoteIcon />}
                        onClick={() => {
                            setBpItemInAction(item);
                            setBpEditOpen(true);
                        }}
                    >
                        Edit
                    </AppButton>
                    <AppButton
                        variant="outlined"
                        startIcon={<DeleteOutlineIcon />}
                        onClick={() =>
                            deleteBookingPlatform(item.id)
                                .unwrap()
                                .then(() => snackbar.success("Booking platform deleted."))
                                .catch((err) => snackbar.error(getErrorMessage(err)))
                        }
                    >
                        Delete
                    </AppButton>
                </div>
            ),
        }));

    const getBankInfoRows = (items: BankInfo[]) =>
        items.map((item) => ({
            id: item.id,
            accountNumber: item.accountNumber,
            status: item.status ? "Active" : "Inactive",
            actions: (
                <div className="flex gap-2">
                    <AppButton
                        variant="outlined"
                        startIcon={<EditNoteIcon />}
                        onClick={() => {
                            setBiItemInAction(item);
                            setBiEditOpen(true);
                        }}
                    >
                        Edit
                    </AppButton>
                    <AppButton
                        variant="outlined"
                        startIcon={<DeleteOutlineIcon />}
                        onClick={() =>
                            deleteBankInfo(item.id)
                                .unwrap()
                                .then(() => snackbar.success("Bank info deleted."))
                                .catch((err) => snackbar.error(getErrorMessage(err)))
                        }
                    >
                        Delete
                    </AppButton>
                </div>
            ),
        }));

    const getOnlineCardRows = (items: OnlineCard[]) =>
        items.map((item) => ({
            id: item.id,
            name: item.name,
            cardNumber: item.cardNumber || "—",
            bankAccount: item.bankAccountNumber || "—",
            status: item.status ? "Active" : "Inactive",
            actions: (
                <div className="flex gap-2">
                    <AppButton
                        variant="outlined"
                        startIcon={<EditNoteIcon />}
                        onClick={() => {
                            setOcItemInAction(item);
                            setOcEditOpen(true);
                        }}
                    >
                        Edit
                    </AppButton>
                    <AppButton
                        variant="outlined"
                        startIcon={<DeleteOutlineIcon />}
                        onClick={() =>
                            deleteOnlineCard(item.id)
                                .unwrap()
                                .then(() => snackbar.success("Online card deleted."))
                                .catch((err) => snackbar.error(getErrorMessage(err)))
                        }
                    >
                        Delete
                    </AppButton>
                </div>
            ),
        }));

    // ── Render ─────────────────────────────────────────────────────────────────

    return (
        <>
            <div className="p-6">
                <h1 className="text-2xl font-semibold mb-4">Settings</h1>

                <Tabs
                    value={activeTab}
                    onChange={(_e, newValue) => setActiveTab(newValue)}
                    className="mb-4"
                >
                    <Tab label="Booking Platforms" />
                    <Tab label="Bank Info" />
                    <Tab label="Online Cards" />
                </Tabs>

                {/* ── Tab 0: Booking Platforms ── */}
                {activeTab === 0 && (
                    <div>
                        <div className="mb-4">
                            <AppButton
                                startIcon={<AddCircleOutlineIcon />}
                                onClick={() => setBpAddOpen(true)}
                            >
                                Add Booking Platform
                            </AppButton>
                        </div>
                        <AppTable
                            headers={bookingPlatformHeaders}
                            isDataLoading={bpLoading || bpFetching}
                            isSuccess={bpSuccess}
                            isError={bpError}
                            data={getBookingPlatformRows(bookingPlatforms || [])}
                        />
                    </div>
                )}

                {/* ── Tab 1: Bank Info ── */}
                {activeTab === 1 && (
                    <div>
                        <div className="mb-4">
                            <AppButton
                                startIcon={<AddCircleOutlineIcon />}
                                onClick={() => setBiAddOpen(true)}
                            >
                                Add Bank Info
                            </AppButton>
                        </div>
                        <AppTable
                            headers={bankInfoHeaders}
                            isDataLoading={biLoading || biFetching}
                            isSuccess={biSuccess}
                            isError={biError}
                            data={getBankInfoRows(bankInfoList || [])}
                        />
                    </div>
                )}

                {/* ── Tab 2: Online Cards ── */}
                {activeTab === 2 && (
                    <div>
                        <div className="mb-4">
                            <AppButton
                                startIcon={<AddCircleOutlineIcon />}
                                onClick={() => setOcAddOpen(true)}
                            >
                                Add Online Card
                            </AppButton>
                        </div>
                        <AppTable
                            headers={onlineCardHeaders}
                            isDataLoading={ocLoading || ocFetching}
                            isSuccess={ocSuccess}
                            isError={ocError}
                            data={getOnlineCardRows(onlineCards || [])}
                        />
                    </div>
                )}
            </div>

            {/* ── Booking Platform popups ── */}
            <AppConfirmation
                open={bpAddOpen}
                title="Add Booking Platform"
                handleClose={() => setBpAddOpen(false)}
                viewOnly
                closeButtonHidden
            >
                <BookingPlatformAddForm onSubmissionSuccess={() => setBpAddOpen(false)} />
            </AppConfirmation>
            <AppConfirmation
                open={bpEditOpen}
                title="Edit Booking Platform"
                handleClose={() => setBpEditOpen(false)}
                viewOnly
                closeButtonHidden
            >
                {bpItemInAction && (
                    <BookingPlatformEditForm
                        item={bpItemInAction}
                        onSubmissionSuccess={() => setBpEditOpen(false)}
                    />
                )}
            </AppConfirmation>

            {/* ── Bank Info popups ── */}
            <AppConfirmation
                open={biAddOpen}
                title="Add Bank Info"
                handleClose={() => setBiAddOpen(false)}
                viewOnly
                closeButtonHidden
            >
                <BankInfoAddForm onSubmissionSuccess={() => setBiAddOpen(false)} />
            </AppConfirmation>
            <AppConfirmation
                open={biEditOpen}
                title="Edit Bank Info"
                handleClose={() => setBiEditOpen(false)}
                viewOnly
                closeButtonHidden
            >
                {biItemInAction && (
                    <BankInfoEditForm
                        item={biItemInAction}
                        onSubmissionSuccess={() => setBiEditOpen(false)}
                    />
                )}
            </AppConfirmation>

            {/* ── Online Card popups ── */}
            <AppConfirmation
                open={ocAddOpen}
                title="Add Online Card"
                handleClose={() => setOcAddOpen(false)}
                viewOnly
                closeButtonHidden
            >
                <OnlineCardAddForm onSubmissionSuccess={() => setOcAddOpen(false)} />
            </AppConfirmation>
            <AppConfirmation
                open={ocEditOpen}
                title="Edit Online Card"
                handleClose={() => setOcEditOpen(false)}
                viewOnly
                closeButtonHidden
            >
                {ocItemInAction && (
                    <OnlineCardEditForm
                        item={ocItemInAction}
                        onSubmissionSuccess={() => setOcEditOpen(false)}
                    />
                )}
            </AppConfirmation>
        </>
    );
}

// ─── Dynamic imports ───────────────────────────────────────────────────────────

const BookingPlatformAddForm = dynamic(
  () =>
    import("@/app/components/Forms/BookingPlatformForm").then((mod) => mod.BookingPlatformAddForm),
  { loading: () => <ModalFormLoadingFallback /> }
);
const BookingPlatformEditForm = dynamic(
  () =>
    import("@/app/components/Forms/BookingPlatformForm").then((mod) => mod.BookingPlatformEditForm),
  { loading: () => <ModalFormLoadingFallback /> }
);
const BankInfoAddForm = dynamic(
  () => import("@/app/components/Forms/BankInfoForm").then((mod) => mod.BankInfoAddForm),
  { loading: () => <ModalFormLoadingFallback /> }
);
const BankInfoEditForm = dynamic(
  () => import("@/app/components/Forms/BankInfoForm").then((mod) => mod.BankInfoEditForm),
  { loading: () => <ModalFormLoadingFallback /> }
);
const OnlineCardAddForm = dynamic(
  () => import("@/app/components/Forms/OnlineCardForm").then((mod) => mod.OnlineCardAddForm),
  { loading: () => <ModalFormLoadingFallback /> }
);
const OnlineCardEditForm = dynamic(
  () => import("@/app/components/Forms/OnlineCardForm").then((mod) => mod.OnlineCardEditForm),
  { loading: () => <ModalFormLoadingFallback /> }
);
