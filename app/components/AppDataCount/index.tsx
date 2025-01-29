import { FC } from "react";

export const AppDataCount: FC<{
  total: number;
  page: number;
  perPage: number;
  isDataLoading: boolean;
}> = ({ total, page, perPage, isDataLoading }) => {
  return (
    <>
      {!!total && !!page && !!perPage && !isDataLoading && total > 0 && (
        <div className="mx-3 font-bold text-gray-200 mb-3">
          {perPage * (page - 1) + 1} -{" "}
          {perPage * (page - 1) + perPage >= total
            ? total
            : perPage * (page - 1) + perPage}{" "}
          of {total}
        </div>
      )}
    </>
  );
};
