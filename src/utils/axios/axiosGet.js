import client from "../jwtInterceptor";

export const get = async (url, params) => {
  return client({
    method: "GET",
    url: url,
    params: params,
  })
    .then((response) => {
      const res = response.data;
      if (res.status !== 200) {
        return;
      }
      return res;
    })
    .catch((error) => {
      return { status: 606, result: "Network request failed", error };
    });
};