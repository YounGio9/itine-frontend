import client from '../jwtInterceptor';

export const get = async (url, params) => {
  return client.get(url).then((response) => {
    const res = response.data;
    return res;
  });
};
