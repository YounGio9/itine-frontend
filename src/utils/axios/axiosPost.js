import client from "../jwtInterceptor";

export const post = async (url, data) => {
  const response = await client.post(url, data);
  const res = response.json();
  return res;
};
