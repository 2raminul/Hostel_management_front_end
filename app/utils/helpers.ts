import { getSession } from "next-auth/react";
import { jwtDecode } from "jwt-decode";

export const getToken = async () => {
  const session = await getSession();
  return session ? `Bearer ${(session as any).accessToken}` : "";
};

export const getErrorMessage = (error: any): string =>
  error && "data" in error ? error.data.message : "Something went wrong";

export const maskUUID = (uuid: string) => {
  if (typeof uuid !== "string" || uuid.length < 10) {
    throw new Error("Invalid UUID");
  }

  const start = uuid.slice(0, 5); // First 5 characters
  const end = uuid.slice(-5); // Last 5 characters
  const masked = "*".repeat(uuid.length - 10); // Mask middle characters

  return `${start}${masked}${end}`;
};

export const getDecodedTokenData = async (): Promise<{
  userId?: number;
  name?: string;
  email?: string;
  isAdmin?: boolean;
  permissions?: Record<string, { view?: boolean; edit?: boolean; delete?: boolean }>;
}> => {
  const session = await getSession();
  const token = (session as any)?.accessToken;
  if (!token || typeof token !== "string") return {};
  return jwtDecode(token);
};
