import client from "../utils/jwtInterceptor";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    let userProfle = localStorage.getItem("userProfile");
    if (userProfle) {
      return JSON.parse(userProfle);
    }
    return null;
  });
  const navigate = useNavigate();
  const login = async (payload) => {
    try {
      await client.post("auth/login", payload);

      let apiResponse = await client.get("auth/profile");
      localStorage.setItem("userProfile", JSON.stringify(apiResponse.data));
      setUser(apiResponse.data);
      navigate("/admin/home");
    } catch (error) {
      console.log(error);
    }
  };

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
