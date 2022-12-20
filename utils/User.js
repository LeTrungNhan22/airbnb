import { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { getError } from "./error";
import { useRouter } from "next/router";
import moment from "moment";

export const AuthContext = createContext({
  user: {},
  logout: () => {},
  login: () => {},
  updateUserProfile: () => {},
});
export const AuthContextProvider = ({ children }) => {
  const axios = require("axios");
  const basUrl = process.env.NEXT_PUBLIC_API_URL;
  const [user, setUser] = useState({});
  const [userById, setUserById] = useState({});
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  const { redirect } = router.query;

  const base64 = require("base-64");

  const updateUserAddress = async ({
    district,
    districtCode,
    province,
    provinceCode,
    ward,
    wardCode,
    subAddress,
  }) => {
    if (isLogin == true) {
      try {
        await axios
          .put(`${basUrl}/user/1.0.0/user/${user.id}/info-address`, {
            address1:
              ward.toString() +
              " " +
              district.toString() +
              " " +
              province.toString() +
              " " +
              subAddress.toString(),
            district: district,
            districtCode: districtCode,
            province: province,
            provinceCode: provinceCode,
            ward: ward,
            wardCode: wardCode,
          })
          .then(function (response) {
            if (response.status == 200) {
              const { data } = response;
              console.log(data);
              toast.success("Thay đổi địa chỉ thành công");
            }
          })
          .catch(function (error) {
            console.error(getError(error));
          });
      } catch (error) {
        console.log(getError(error));
        toast.error("có lỗi trong quá trình xử lý");
      }
    }
  };

  const updateUserProfile = async ({
    email,
    fullName,
    telephone,
    dob,
    gender,
  }) => {
    if (localStorage.getItem("userToken") != null) {
      try {
        await axios
          .put(`${basUrl}/user/1.0.0/user/${user.id}/info-basic`, {
            email: email,
            fullName: fullName,
            telephone: telephone,
            birthday: dob,
            gender: gender,
          })
          .then(function (response) {
            if (response.status == 200) {
              const { data } = response;
              console.log(data);
              toast.success("Thay đổi địa chỉ thành công");
            }
          })
          .catch(function (error) {
            console.error(getError(error));
          });
      } catch (error) {
        console.log(getError(error));
        toast.error("có lỗi trong quá trình xử lý");
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("userToken");
    setIsLogin(false);
    setUser({});
    toast.error("Đăng xuất thành công");
    router.push("/");
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
  useEffect(() => {
    const getUserProfile = async () => {
      if (localStorage.getItem("userToken") != null) {
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
      }
    };

    getUserProfile();
  }, [isLogin]);
  useEffect(() => {
    const getUserProfileById = async () => {
      if (isLogin == true) {
        try {
          await axios
            .get(`${basUrl}/user/1.0.0/user/${user.id}`)
            .then(function (response) {
              const { data } = response;
              setUserById(data);
            })
            .catch(function (error) {
              console.error(getError(error));
            });
        } catch (error) {
          console.log(getError(error));
        }
      }
    };
    getUserProfileById();
  }, [isLogin]);

  const context = {
    user,
    userById,
    logout,
    isLogin,
    login,
    updateUserProfile,
    updateUserAddress,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;

export function getStaticProps() {
  return {
    props: {},
  };
}
