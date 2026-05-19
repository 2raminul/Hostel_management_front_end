/** Base URL for Nest API (must include `/api/v1`). Server-side fetch requires an absolute URL. */
export const API_URL =
  (typeof process.env.NEXT_PUBLIC_API_URL === "string" &&
    process.env.NEXT_PUBLIC_API_URL.trim()) ||
  "http://127.0.0.1:8023/api/v1";
export const BILLING_CODE_API_KEY = process.env.BILLING_CODE_API_KEY;
export const BRAC_API_URL = process.env.BRAC_API_URL;
export const TOKEN_ISSUER_URL = process.env.TOKEN_ISSUER_URL || "";
export const TOKEN_ISSUER_CLIENT_ID = process.env.TOKEN_ISSUER_CLIENT_ID || "";
export const TOKEN_ISSUER_CLIENT_SECRET =
  process.env.TOKEN_ISSUER_CLIENT_SECRET || "";
export const MAX_IDLE_TIME_IN_MINUTES =
  process.env.MAX_IDLE_TIME_IN_MINUTES || 30;

/** RTK Query base URL for Nest API. Prefer FRONTEND_EXPOSED_URL_PREFIX if set; otherwise same as API_URL. */
export const getLocalhostURL = () => {
  const prefix = process.env.FRONTEND_EXPOSED_URL_PREFIX?.trim();
  return prefix || API_URL;
};
