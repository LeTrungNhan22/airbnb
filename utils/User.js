import { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { getError } from "./error";

export const AuthContext = createContext({
  user: {},
  logout: () => {},
  isLogin: false,
});
export const AuthContextProvider = ({ children }) => {
  const axios = require("axios");
  const basUrl = process.env.NEXT_PUBLIC_API_URL;
  const [user, setUser] = useState({});
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        await axios
          .get(`${basUrl}/user/1.0.0/login/info`, {
            params: {
              "code-token": localStorage.getItem("userToken"),
              "service-type": "NORMALLY",
            },
            headers: {
              "X-RapidAPI-Key": "your-rapidapi-key",
              "X-RapidAPI-Host":
                "body-mass-index-bmi-calculator.p.rapidapi.com",
            },
          })
          .then(function (response) {
            const { data } = response;
            setUser(data);
            setIsLogin(true);
          })
          .catch(function (error) {
            console.error(getError(error));
          });
      } catch (error) {
        console.log(getError(error));
      }
    };
    getUserProfile();
  }, []);
  // logout
  const logout = () => {
    localStorage.removeItem("userToken");
    setIsLogin(false);
    setUser({});
    toast.error("Đăng xuất thành công");
  };

  const context = { user, logout };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
export default AuthContext;
