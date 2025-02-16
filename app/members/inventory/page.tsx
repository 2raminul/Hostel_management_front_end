"use client";

import AppButton from "@/app/components/AppButton";
import { AppContainer } from "@/app/components/AppContainer";
import { AppDataCount } from "@/app/components/AppDataCount";
import { AppPagination } from "@/app/components/AppPagination";
import { AppPerPage } from "@/app/components/AppPerPage";
import { AppTable } from "@/app/components/AppTable";
import { InventoryFilter } from "@/app/components/AppTableFilters/inventoryFilter";
import { AppTableFooter } from "@/app/components/AppTableFooter";
import { TableHeader } from "@/app/components/types"
import { useDispatch, useSelector } from "@/app/store/hooks";
import { useGetInventoryListQuery } from "@/app/store/reducer/inventory";
import { setInventoryPage, setInventoryPerPage } from "@/app/store/reducer/inventory/slice";
import { InventoryItemData } from "@/app/store/reducer/inventory/types";
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
        label: "In Stock",
        width: "10%",
    },
    {
        label: "Reusable Available",
        width: "10%",
    },
    {
        label: "Actions",
        width: "50%",
    },
];

export default function Inventory() {
    const dispatch = useDispatch();
    const [idInAction, setIdInAction] = useState<number | undefined>();
    const [addToInventoryOpen, setAddToInventoryOpen] = useState(false);
    const { inventoryFilter } = useSelector(state => state.inventory);
    const { data, isLoading, isFetching, isError, isSuccess } = useGetInventoryListQuery({ page: inventoryFilter.page, perPage: inventoryFilter.perPage, categoryId: inventoryFilter.categoryId, brand: inventoryFilter.brand });

    const getTableData = (data: InventoryItemData[]) => data.map((inv) => Object.assign({
        id: inv.id,
        category: inv.categoryName,
        brand: inv.brand,
        inStock: inv.inStockCount,
        reusableCount: inv.reusableCount,
        actions: <></>
    }));
    return <>
        <AppContainer pageHeader="Inventory Management" topPanel={<div className="border-x-2 px-5 border-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 py-5">
                <div>
                    <AppButton
                        className="w-full"
                        startIcon={<AddCircleOutlineIcon />}
                        onClick={() => setAddToInventoryOpen(true)}
                        disabled={/*
                    !!!userData?.permissions?.category?.[
                      PermissionTypeEnum.CREATE
                    ]
                  */
                            false}
                    >
                        Add to Inventory
                    </AppButton>
                </div>
                <InventoryFilter />
            </div>
        </div>}>
            <AppTable
                headers={headers}
                isDataLoading={isLoading || isFetching}
                isSuccess={isSuccess}
                isError={isError}
                data={getTableData(data?.data || [])}
            />
            <AppTableFooter>
                <>
                    {!!data?.count && data.count > 0 && (<AppPerPage
                        defaultValue={inventoryFilter.perPage}
                        handleChange={(e) => dispatch(setInventoryPerPage(+e.target.value))}
                    />)}
                    <AppDataCount
                        total={data?.count || 0}
                        page={inventoryFilter?.page || 1}
                        isDataLoading={isFetching || isLoading}
                        perPage={inventoryFilter?.perPage || 10}
                    />
                    {!!data && data.count > 0 && (
                        <AppPagination
                            count={Math.ceil(
                                data.count / (inventoryFilter?.perPage || 10)
                            )}
                            page={inventoryFilter.page}
                            onPageChange={(page: number) => dispatch(setInventoryPage(page))}
                        />
                    )}
                </>
            </AppTableFooter>
        </AppContainer>
        <AppConfirmation
            open={addToInventoryOpen}
            title="Add To Inventory"
            handleClose={() => setAddToInventoryOpen(false)}
            viewOnly
            closeButtonHidden
        >
            <InventoryItemAddForm onSubmissionSuccess={() => setAddToInventoryOpen(false)} />
        </AppConfirmation>
    </>
}

const AppConfirmation = dynamic(() => import("@/app/components/AppConfirmation").then((mod) => mod.AppConfirmation));
const InventoryItemAddForm = dynamic(() => import("@/app/components/Forms/InventoryItemAddForm").then((mod) => mod.InventoryItemAddForm));