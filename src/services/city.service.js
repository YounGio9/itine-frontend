import { Post, Get, Delete } from '../utils/axios';

export const addCity = async (payload) => {
  try {
    const response = await Post('cities', payload);
    console.log(response);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('userProfile');
      window.location.reload();
    }
    return { success: false, message: error.response ? error.response.data.message : 'Erreur lors de l\'ajout de la ville.' }; 
  }
};

export const getCities = async () => {
  try {
    const response = await Get('cities');  
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('userProfile');
      window.location.reload();
    }
    return { success: false, message: error.response ? error.response.data.message : 'Erreur lors de la récupération des villes.' };
  }
};

export const deleteCity = async (id) => {
  try {
    const response = await Delete(`cities/${id}`);
    console.log(response);
    return response;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('userProfile');
      window.location.reload();
    }
    return { success: false, message: error.response ? error.response.data.message : 'Erreur lors de la récupération des villes.' };
  }
};


