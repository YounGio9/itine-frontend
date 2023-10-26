import { Get, Post } from '../utils/axios';

export const getDeliveryMen = async () => {
  try {
    const data = await Get('deliverers');
    console.log(data);
    return { success: true, data: data.data };
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('userProfile');
      window.location.reload();
    }
    return { success: false, message: error.response.message };
  }
};

export const changeDeliveryManStatus = async (payload) => {
  try {
    const data = await Post('deliverers/changeStatus', payload);
    console.log(data);
    return { success: true, data: data.data };
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('userProfile');
      window.location.reload();
    }
    return { success: false, message: error.response.message };
  }
};
