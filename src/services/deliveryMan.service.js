import { Get } from '../utils/axios';

export const getDeliveryMen = async () => {
  try {
    const data = await Get('deliveryMen');
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
