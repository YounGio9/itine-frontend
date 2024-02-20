import { Post, Get, Delete } from '../utils/axios';

export const addSubCategory = async (payload) => {
  try {
    const response = await Post('sub-categories', payload);
    console.log(response);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('userProfile');
      window.location.reload();
    }
    return {
      success: false,
      message: error.response ? error.response.data.message : "Erreur lors de l'ajout de la sous categorie.",
    };
  }
};

export const getSubCategories = async (category) => {
  try {
    const response = await Get(`sub-categories/?category=${category}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('userProfile');
      window.location.reload();
    }
    return {
      success: false,
      message: error.response ? error.response.data.message : 'Erreur lors de la récupération de la sous categorie.',
    };
  }
};

export const deleteSubCategory = async (id) => {
  try {
    const response = await Delete(`sub-categories/${id}`);
    console.log(response);
    return response;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('userProfile');
      window.location.reload();
    }
    return {
      success: false,
      message: error.response ? error.response.data.message : 'Erreur lors de la suppression de la sous-categorie.',
    };
  }
};
