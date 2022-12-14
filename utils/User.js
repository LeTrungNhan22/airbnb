import { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { getError } from "./error";
import { useRouter } from "next/router";

export const AuthContext = createContext({
  user: {},
  logout: () => {},
  login: () => {},
});
export const AuthContextProvider = ({ children }) => {
  const axios = require("axios");
  const basUrl = process.env.NEXT_PUBLIC_API_URL;
  const [user, setUser] = useState({});
  const [isLogin, setIsLogin] = useState();
  const router = useRouter();
  const base64 = require("base-64");

  useEffect(() => {
    if (localStorage.getItem("userToken") != null) {
      getUserProfile();
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

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
            "X-RapidAPI-Host": "body-mass-index-bmi-calculator.p.rapidapi.com",
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
  const logout = () => {
    localStorage.removeItem("userToken");
    setIsLogin(false);
    setUser({});
    toast.error("Đăng xuất thành công");
  };
  const login = async ({ email, password }) => {
    try {
      await axios
        .post(`${basUrl}/user/1.0.0/login/customer`, null, {
          params: {
            email: email,
            password: base64.encode(password),
            "full-name": "null",
            image: "null",
            "service-type": "NORMALLY",
          },
        })
        .then(function (result) {
          if (result.data.status == "success") {
            localStorage.setItem("userToken", result.data.data);
            getUserProfile();
            setIsLogin(true);
            toast.success("Đăng nhập thành công");
            router.push("/");
          } else {
            toast.error(
              "Đăng nhập không thành công tài khoản hoặc mật khẩu không chính xác"
            );
          }
        });
    } catch (error) {
      console.log(getError(error));
    }
  };

  const context = { user, logout, isLogin, login };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
export default AuthContext;
