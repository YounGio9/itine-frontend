import { Get, Post } from '../utils/axios';

export const getMessages = async () => {
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
export const getChats = async () => {
  try {
    const data = await Get('messages/chats');
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

export const reply = async (payload) => {
  try {
    const response = await Post('messages/reply', payload);
    console.log(response);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('userProfile');
      window.location.reload();
    }
    return { success: false, message: error.response ? error.response.data.message : "Erreur lors de l'ajout de la ville." }; 
  }
}
