import client from "../utils/jwtInterceptor";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin, useProfileInfos } from "../hooks/useAuthApi";
import { Get } from "../utils/axios";
import React from "react";
import { getInStorageJson, saveInStorageJson } from "../utils/functions";
import { getProfile } from "../services/auth.service";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [user, setUser] = useState(() => {
    let userProfile = getInStorageJson("userProfile");
    if (userProfile) {
      console.log("userProfile", userProfile);
      return userProfile;
    }
    return null;
  });

  const navigate = useNavigate();
  const { mutate: signIn } = useLogin({
    onSuccess: (data) => {
      // props.onSuccess?.(data.data);
    },
    onError(error) {
      console.error("[on error]", error);
    },
  });

  const login = async (payload) => {
    try {
      signIn(payload);

      const response = await getProfile();

      console.log(response);

      saveInStorageJson("userProfile", response);
      setUser(response);
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/admin/login");
      }
    } catch (error) {
      return;
    }
    // eslint-disable-nextline
  }, []);

  useEffect(() => {
    if (user != null) saveInStorageJson("userProfile", user);

    console.log(user);
  }, [user]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && window.location.pathname.startsWith("/admin/login"))
      navigate("/admin/");
  }, [navigate]);

  const logout = async () => {
    // await client.get("auth/logout"); TODO: Add logout
    localStorage.removeItem("userProfile");
    localStorage.removeItem("token");
    setUser(null);
    navigate("admin/login");
  };

  return (
    <>
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuthContext = () => useContext(AuthContext);
