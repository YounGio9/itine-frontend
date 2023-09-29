import { Get } from '../utils/axios';

export const getMessages = async (payload) => {
  try {
    const data = await Get('messages');
    console.log(data);
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
