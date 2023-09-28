import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getInStorageJson, saveInStorageJson, getInStorage } from '../utils/functions';
import { login as Login, getProfile } from '../services/auth.service';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [user, setUser] = useState(() => {
    const userProfile = getInStorageJson('userProfile');
    if (userProfile) {
      console.log('userProfile', userProfile);
      return userProfile;
    }
    return null;
  });

  const navigate = useNavigate();

  const login = async (payload) => {
    try {
      const response = await Login(payload);

      if (!response.success) {
        return response;
      }
      console.log(response);

      const responseProfile = await getProfile();

      console.log(response);

      saveInStorageJson('userProfile', responseProfile);
      setUser(responseProfile);
      navigate('/admin/app');
      return { success: true };
    } catch (error) {
      console.log(error);

      return { success: false, message: error.message };
    }
  };

  useEffect(() => {
    const token = getInStorage('token');
    if (!token) {
      navigate('/admin/login');
    }

    // eslint-disable-nextline
  }, []);

  useEffect(() => {
    if (user != null) saveInStorageJson('userProfile', user);

    console.log(user);
  }, [user]);

  useEffect(() => {
    const token = getInStorage('token');
    if (token && window.location.pathname.startsWith('/admin/login')) navigate('/admin/');
  }, [navigate]);

  const logout = async () => {
    // await client.get("auth/logout"); TODO: Add logout
    localStorage.removeItem('userProfile');
    localStorage.removeItem('token');
    setUser(null);
    navigate('admin/login');
  };

  return (
    <>
      <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
    </>
  );
};

export const useAuthContext = () => useContext(AuthContext);
