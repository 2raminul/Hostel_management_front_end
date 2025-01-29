import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import {
  Pagination,
  PaginationItem,
  PaginationRenderItemParams,
} from "@mui/material";
import { FC } from "react";

import { StyledPaginationProps } from "../types";
import { ActionButtonBox } from "./ActionButtonBox";

const ActionButtonTypes = ["first", "last", "previous", "next"];

export const AppPagination: FC<StyledPaginationProps> = ({
  count,
  page,
  onPageChange,
}) => {
  return (
    <Pagination
      count={count}
      showFirstButton
      showLastButton
      variant="outlined"
      shape="rounded"
      color="secondary"
      className="mb-2"
      {...{ page }}
      // OnPageChange should not be optional. We are doing it for now to avoid breaking changes.
      onChange={onPageChange ? (_event, page) => onPageChange(page) : undefined}
      renderItem={({ variant, type, ...rest }: PaginationRenderItemParams) => (
        <PaginationItem
          variant={ActionButtonTypes.indexOf(type) !== -1 ? "text" : variant}
          type={type}
          classes={{ outlined: "font-bold text-sm" }}
          components={{
            first: (props) => (
              <ActionButtonBox {...props}>
                <FirstPageIcon sx={{ color: "secondary.light" }} />
              </ActionButtonBox>
            ),
            last: (props) => (
              <ActionButtonBox {...props}>
                <LastPageIcon sx={{ color: "secondary.light" }} />
              </ActionButtonBox>
            ),
            previous: (props) => (
              <ActionButtonBox {...props}>
                <KeyboardArrowLeftIcon sx={{ color: "secondary.light" }} />
              </ActionButtonBox>
            ),
            next: (props) => (
              <ActionButtonBox {...props}>
                <KeyboardArrowRightIcon sx={{ color: "secondary.light" }} />
              </ActionButtonBox>
            ),
          }}
          {...rest}
        />
      )}
    />
  );
};
