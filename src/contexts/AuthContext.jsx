import client from "../utils/jwtInterceptor";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin, useProfileInfos } from "../hooks/useAuthApi";
import { Get } from "../utils/axios";
import { getInStorageJson, saveInStorageJson } from "../utils/functions";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    let userProfile = getInStorageJson("userProfile");
    if (userProfile) {
      return getInStorageJson(userProfile);
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

  const { data } = useProfileInfos({
    onSuccess: (data) => {
      saveInStorageJson("userProfile", data);
      console.log(data);
      setUser(data);
    },
  });

  const login = async (payload) => {
    try {
      signIn(payload);

      console.log(data);
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
  }, [navigate]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && window.location.pathname.startsWith("/admin/login"))
      navigate("/admin/");
  }, [navigate]);

  const logout = async () => {
    await client.get("auth/logout");
    localStorage.removeItem("userProfile");
    setUser(null);
    navigate("/login");
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
