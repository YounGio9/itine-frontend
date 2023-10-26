import { Get, Post } from '../utils/axios';

export async function login(payload) {
  try {
    const data = await Post('auth/login', payload);
    return { success: true, data };
  } catch (error) {
    if (error.response.data.status === 400) return { success: false, message: error.response.data.message };
    const errors = error.response.data.errors;
    const invalidFields = Object.keys(errors);
    console.log(invalidFields);
    return { success: false, message: invalidFields.map((field) => `Invalid ${field}`).join(' and ') };
  }
}

export const getProfile = async () => Get('auth/profile/CUSTOMER');
