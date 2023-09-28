import { Post } from '../utils/axios';

export const createProduct = async (payload) => {
  try {
    const data = await Post('products', payload);
    return data;
  } catch (error) {
    return { success: false, message: error.response.data.message };
  }
};
