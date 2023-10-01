import client from '../jwtInterceptor';

export const dlte = async (url) => client.delete(url).then((response) => response);
