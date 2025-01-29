"use client";

import AppButton from "@/app/components/AppButton";
import { AppContainer } from "@/app/components/AppContainer";
import useSnackbar from "@/app/components/AppSnackbar/hooks/useSnackbar";
import { TableHeader } from "@/app/components/types";
import { useDispatch, useSelector } from "@/app/store/hooks";
import { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { CategoryFilter } from "@/app/components/AppTableFilters/categoryFilter";
import { AppTable } from "@/app/components/AppTable";
import dynamic from "next/dynamic";
import { useGetCategoryListQuery } from "@/app/store/reducer/category";
import { Category } from "@/app/store/reducer/category/types";
import { BooleanType } from "@/app/schema/enum/booleanType";
import DeleteIcon from '@mui/icons-material/Delete';
import { AppPerPage } from "@/app/components/AppPerPage";
import { setCategoryPage, setCategoryPerPage } from "@/app/store/reducer/category/slice";
import { AppDataCount } from "@/app/components/AppDataCount";
import { AppPagination } from "@/app/components/AppPagination";

const headers: TableHeader[] = [
    {
        label: "ID",
        width: "10%",
    },
    {
        label: "Name",
        width: "20%",
    },
    {
        label: "Reusable",
        width: "10%",
    },
    {
        label: "Unit",
        width: "10%",
    },
    {
        label: "Inventory Item",
        width: "20%",
    },
    {
        label: "Actions",
        width: "30%",
    },
];


export default function Categories() {
    const dispatch = useDispatch();
    const snackbar = useSnackbar();
    const { categoryFilter } = useSelector(state => state.category)
    const [idInAction, setIdInAction] = useState<number | undefined>();
    const [addCategoryPopupOpen, setAddCategoryPopupOpen] = useState(false);
    const [categoryDeletePopupOpen, setCategoryDeletePopupOpen] = useState(false);
    const { data: categoryList, isLoading: isCategoryListLoading, isFetching: isCategoryListFetching, isError: isCategoryListErr, isSuccess: isCategoryListSuccess } = useGetCategoryListQuery({ page: categoryFilter.page, perPage: categoryFilter.perPage, name: categoryFilter.name, unit: categoryFilter.unit, reusable: categoryFilter.reusable, isInventoryItem: categoryFilter.isInventoryItem });
    const getTableData = (data: Category[]) => data.map((c) => Object.assign({
        id: c.id,
        name: c.name,
        reusable: !!c.reusable ? BooleanType.TRUE : BooleanType.FALSE,
        unit: c.unit,
        isInventoryItem: !!c.isInventoryItem ? BooleanType.TRUE : BooleanType.FALSE,
        actions: <>
            <div className="mr-2"><AppButton variant="outlined" startIcon={<DeleteIcon />} onClick={() => {
                setIdInAction(c.id);
                setCategoryDeletePopupOpen(true);
            }}>Delete</AppButton></div>
        </>
    }));
    const deleteCategory = (reason: string) => {
        // delete mutation handler code here
    }
    return <>
        <AppContainer pageHeader="Caterories" topPanel={<div className="border-x-2 px-5 border-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 py-5">
                <div>
                    <AppButton
                        className="w-full"
                        startIcon={<AddCircleOutlineIcon />}
                        onClick={() => setAddCategoryPopupOpen(true)}
                        disabled={/*
                    !!!userData?.permissions?.category?.[
                      PermissionTypeEnum.CREATE
                    ]
                  */
                            false}
                    >
                        Add Category
                    </AppButton>
                </div>
                <CategoryFilter />
            </div>
        </div>}
        >
            <AppTable
                headers={headers}
                isDataLoading={isCategoryListFetching || isCategoryListLoading}
                isSuccess={isCategoryListSuccess}
                isError={isCategoryListErr}
                data={getTableData(categoryList?.data || [])}
            />
            <div className="mt-2 flex flex-col md:flex-row justify-end items-center">
                {!!categoryList?.count && categoryList.count > 0 && (<AppPerPage
                    defaultValue={categoryFilter.perPage}
                    handleChange={(e) => dispatch(setCategoryPerPage(+e.target.value))}
                />)}
                <AppDataCount
                    total={categoryList?.count || 0}
                    page={categoryFilter?.page || 1}
                    isDataLoading={isCategoryListFetching || isCategoryListLoading}
                    perPage={categoryFilter?.perPage || 10}
                />
                {!!categoryList && categoryList.count > 0 && (
                    <AppPagination
                        count={Math.ceil(
                            categoryList.count / (categoryFilter?.perPage || 10)
                        )}
                        page={categoryFilter.page}
                        onPageChange={(page: number) => dispatch(setCategoryPage(page))}
                    />
                )}
            </div>
        </AppContainer>
        <AppConfirmation
            open={addCategoryPopupOpen}
            title="Add Category"
            handleClose={() => setAddCategoryPopupOpen(false)}
            viewOnly
            closeButtonHidden
        >
            <CategoryAddForm
                onSubmissionSuccess={() => setAddCategoryPopupOpen(false)}
            />
        </AppConfirmation>
        <AppConfirmation
            open={categoryDeletePopupOpen}
            title="Delete Category"
            handleClose={() => setCategoryDeletePopupOpen(false)}
            viewOnly
            closeButtonHidden
        >
            <DeleteForm
                onFormSubmit={(reason) => deleteCategory(reason)}
                customErrorMessage="Category removal reason is required"
                disabledSubmitButton={false}
            />
        </AppConfirmation>
    </>
}

const AppConfirmation = dynamic(() => import("@/app/components/AppConfirmation").then((mod) => mod.AppConfirmation));
const CategoryAddForm = dynamic(() => import("@/app/components/Forms/CategoryAddForm").then((mod) => mod.CategoryAddForm));
const DeleteForm = dynamic(() => import("@/app/components/Forms/DeleteForm").then((mod) => mod.DeleteForm));