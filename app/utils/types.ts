import type { SerializedError } from "@reduxjs/toolkit";

export type PaginationProps = {
  page?: number;
  per_page?: number;
};

export type CustomError = {
  status: number;
  data?: ErrorResponse;
  message?: string;
};

export type PaginationResponseDto<T> = {
  data: T[];
  total: number;
};

export type Error = SerializedError | CustomError | undefined;

export type ErrorResponse = {
  statusCode: number;
  message: string;
};
