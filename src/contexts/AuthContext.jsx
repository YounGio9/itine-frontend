import client from "../utils/jwtInterceptor";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useAuthApi";
import { Get } from "../utils/axios";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    let userProfile = localStorage.getItem("userProfile");
    if (userProfile) {
      return JSON.parse(userProfile);
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
      signIn(payload, {
        onSuccess: () => {
          navigate("/admin/");
        },
        onError(error) {
          // TODO: Add a loading and show it when request is pending
        },
      });
      let apiResponse = await Get("auth/profile");
      localStorage.setItem("userProfile", JSON.stringify(apiResponse.data));
      setUser(apiResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("userProfile")) {
      navigate("/admin/login");
    }
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
