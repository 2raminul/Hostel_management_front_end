import { FC } from "react";

import { useDispatch } from "../../store/hooks";
import {
  useFetchApiCategoryListQuery,
  useFetchApiKeyListQuery,
  useFetchApiUsersListQuery,
  useFetchBusinessListQuery,
} from "../../store/reducer/ensureAccess";
import {
  setCategoryAccessApiKeyId,
  setCategoryAccessBusinessId,
  setCategoryAccessCategoryId,
  setCategoryAccessJwtUserId,
} from "../../store/reducer/ensureAccess/slice";
import { AppSearchableDropdown } from "../AppSearchableDropdown";

export const CategoryAccessFilter: FC = () => {
  const dispatch = useDispatch();
  const {
    data: existingApiCategoryList,
    isLoading: isApiCategoryLoading,
    isFetching: isApiCategoryFetching,
  } = useFetchApiCategoryListQuery();
  const {
    isLoading: isBusinessesLoading,
    isFetching: isBusinessesFetching,
    data: existingBusinesses,
  } = useFetchBusinessListQuery();
  const {
    data: apiUsers,
    isLoading: isApiUsersLoading,
    isFetching: isApiUsersFetching,
  } = useFetchApiUsersListQuery({ page: 1, per_page: Number.MAX_SAFE_INTEGER });
  const {
    isLoading: isKeysLoading,
    isFetching: isKeysFetching,
    isError: isKeysLoadingError,
    isSuccess: isKeysLoadingSuccess,
    data: keysList,
  } = useFetchApiKeyListQuery({
    page: 1,
    per_page: Number.MAX_SAFE_INTEGER,
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div>
        <AppSearchableDropdown
          labelText="Category"
          placeHolder="API category name"
          freeSolo={false}
          optionList={
            !(isApiCategoryLoading || isApiCategoryFetching)
              ? existingApiCategoryList?.map((ac) => ac.name) || []
              : []
          }
          onInputChange={(value) =>
            dispatch(
              setCategoryAccessCategoryId(
                existingApiCategoryList?.find((ac) => ac.name === value)?.id ||
                  0
              )
            )
          }
          field=""
        />
      </div>
      <div>
        <AppSearchableDropdown
          labelText="Business"
          placeHolder="Business name"
          freeSolo={false}
          optionList={
            !(isBusinessesLoading || isBusinessesFetching)
              ? existingBusinesses?.map((eb) => eb.name) || []
              : []
          }
          onInputChange={(value) =>
            dispatch(
              setCategoryAccessBusinessId(
                existingBusinesses?.find((eb) => eb.name == value)?.id || 0
              )
            )
          }
          field=""
        />
      </div>
      <div>
        <AppSearchableDropdown
          labelText="JWT based API User"
          freeSolo={false}
          placeHolder="JWT based API user"
          optionList={
            !(isApiUsersLoading || isApiUsersFetching)
              ? (apiUsers?.data || [])?.map((au) => au.name) || []
              : []
          }
          onInputChange={(value) =>
            dispatch(
              setCategoryAccessJwtUserId(
                (apiUsers?.data || []).find((au) => au.name == value)?.id || 0
              )
            )
          }
          field=""
        />
      </div>
      <div>
        <AppSearchableDropdown
          labelText="Key Alias"
          freeSolo={false}
          placeHolder="Key Alias"
          optionList={
            !(isKeysLoading || isKeysFetching)
              ? (keysList?.data || [])?.map((ak) => ak.alias) || []
              : []
          }
          onInputChange={(value) =>
            dispatch(
              setCategoryAccessApiKeyId(
                (keysList?.data || []).find((ak) => ak.alias == value)?.id || 0
              )
            )
          }
          field=""
        />
      </div>
    </div>
  );
};
