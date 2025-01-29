import { API_URL } from "../../config";

export const renewToken = async (token: string) => {
  try {
    const response = await fetch(`${API_URL}/auth/refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken: token }),
    });
    return await response.json();
  } catch (err) {
    console.error({ err });
    throw err;
  }
};
