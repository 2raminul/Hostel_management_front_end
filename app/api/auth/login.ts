import { API_URL } from "../../config";

export const userLogin = async (data: { email: string; password: string }) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    console.log(responseData);
    if (!responseData?.accessToken) {
      throw Error("Login failed. Wrong user ID or password.");
    }
    return responseData;
  } catch (err) {
    console.error({ err });
    throw err;
  }
};
