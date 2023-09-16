import client from "../jwtInterceptor";

export const post = async (url, data) => {
  try {
    const response = await client.post(url, data);
    const res = response.json();
    if (res.status === 401 && !localStorage.getItem("userProfile")) {
      return;
    }
    return res;
  } catch (error) {
    return { status: 606, result: "Network request failed", error };
  }
};