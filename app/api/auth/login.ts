import { API_URL } from "../../config";

type ApiErrorBody = {
  status?: number;
  message?: string | string[];
  accessToken?: string;
};

function formatApiMessage(body: ApiErrorBody): string {
  const m = body?.message;
  if (Array.isArray(m)) return m.join(", ");
  if (typeof m === "string" && m.trim()) return m;
  return "";
}

export const userLogin = async (data: { email: string; password: string }) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const raw = await response.text();
  let body: ApiErrorBody = {};
  if (raw) {
    try {
      body = JSON.parse(raw) as ApiErrorBody;
    } catch {
      throw new Error(
        `Login failed (${response.status}). Server did not return JSON.`
      );
    }
  }

  if (response.ok && body?.accessToken) {
    return body;
  }

  const detail = formatApiMessage(body);
  throw new Error(
    detail ||
      (response.status === 401
        ? "Invalid email or password."
        : `Login failed (${response.status}).`)
  );
};
