export const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
export const BILLING_CODE_API_KEY = process.env.BILLING_CODE_API_KEY;
export const BRAC_API_URL = process.env.BRAC_API_URL;
export const TOKEN_ISSUER_URL = process.env.TOKEN_ISSUER_URL || "";
export const TOKEN_ISSUER_CLIENT_ID = process.env.TOKEN_ISSUER_CLIENT_ID || "";
export const TOKEN_ISSUER_CLIENT_SECRET =
  process.env.TOKEN_ISSUER_CLIENT_SECRET || "";
export const MAX_IDLE_TIME_IN_MINUTES =
  process.env.MAX_IDLE_TIME_IN_MINUTES || 30;

export const getLocalhostURL = () => process.env.FRONTEND_EXPOSED_URL_PREFIX;
