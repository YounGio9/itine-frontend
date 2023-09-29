import { Post, Get } from '../utils/axios';

export const createProduct = async (payload) => {
  try {
    const data = await Post('products', payload);
    return data;
  } catch (error) {
    if (error.response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('userProfile');
      window.location.reload();
    }
    return { success: false, message: error.response.data.message };
  }
};

export const getProducts = async () => {
  try {
    const data = await Get('products');
    console.log(data);
    return data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('userProfile');
      window.location.reload();
    }
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};
