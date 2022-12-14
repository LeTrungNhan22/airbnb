import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaDollarSign } from "react-icons/fa";
import { getError } from "../../../utils/error";

const VerifyEmailScreen = () => {
  const basUrl = process.env.NEXT_PUBLIC_API_URL;
  const [otp, setOtp] = useState(Array(6).fill([""]));
  const [activeOTP, setActiveOTP] = useState(0);
  const inputRef = useRef(null);
  const axios = require("axios");
  const router = useRouter();
  const [isSend, setIsSend] = useState(false);

  const handleOnChange = (index, e) => {
    e.preventDefault();
    const { value } = e.target;
    const newOTP = [...otp];
    newOTP[index] = value.substring(value.length - 1);
    if (!value) setActiveOTP(index - 1);
    else setActiveOTP(index + 1);
    setOtp(newOTP);
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTP, otp]);

  const confirmOTP = async () => {
    const inputData = otp.join("");
    const regData = JSON.parse(localStorage.getItem("_regData"));
    const userId = regData.data.id;
    const message = regData.message;
    if (message === inputData) {
      try {
        await axios
          .put(`${basUrl}/user/1.0.0/user/${userId}/status`, {
            status: "ACTIVE",
          })
          .then(function (response) {
            if (response.status === 200) {
              console.log(response.status);
              toast.success("Đăng ký thành công");
              router.push("/user/account/login");
            }
          })
          .catch(function (error) {
            console.error(getError(error));
          });
      } catch (err) {
        console.log(getError(err));
      }
    } else {
      toast.error("mã OTP không chính xác");
    }
  };
  const resendMailHandler = async () => {
    const regData = JSON.parse(localStorage.getItem("_regData"));
    const email = regData.data.email;
    try {
      await axios
        .post(`${basUrl}/mail/1.0.0/send`, null, {
          params: {
            email: email,
          },
        })
        .then(function (response) {
          if (response.status === 200) {
            console.log(response.status);
            toast.success("Vui lòng kiểm tra lại email");
            setIsSend(true);
          }
        })
        .catch(function (error) {
          console.error(getError(error));
        });
    } catch (error) {
      console.log(getError(error));
    }
  };

  const registerHandler = (e) => {
    e.preventDefault();
    confirmOTP();
  };

  return (
    <>
      <Head>
        <title>Đăng ký</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon " href="/favicon.ico" />
      </Head>
      <header className="p-5 sticky z-50 top-0 bg-white md:px-10 shadow-md grid grid-cols-1">
        <div className="flex items-center justify-between w-full">
          <div>
            <h3 className="text-3xl font-semibold">Đăng ký</h3>
            <Link href="/">
              <a className="text-red-700 italic">Trang chủ</a>
            </Link>
          </div>

          <p>Bạn cần hỗ trợ?</p>
        </div>
      </header>

      <div className="min-h-screen shadow-md bg-gray-200 flex-col max-w-full flex justify-center items-center space-x-2">
        <div className="space-x-5 flex w-[1000px] h-[300px] shadow-md rounded bg-white px-10 py-2 items-center text-left justify-center -mt-40">
          <div className="text-left flex flex-col items-start">
            <span className="text-2xl">Xin chào đây là bước cùng</span>
            <p> Vui lòng nhập 6 chữa số gửi tới email</p>
            <span className="font-bold">
              {JSON.parse(localStorage.getItem("_regData")).data.email}
            </span>
            <Link href="/user/account/register">
              <button className="text-red-500">Sửa địa chỉ email</button>
            </Link>

            <button onClick={resendMailHandler} className="text-red-500">
              Gửi lại mã
              {isSend == false ? (
                ""
              ) : (
                <p>
                  Kiểm tra lại email của bạn<span>{timer}</span>
                </p>
              )}
            </button>
          </div>
          {otp.map((_, index) => (
            <Fragment key={index}>
              <div className="">
                <input
                  ref={index === activeOTP ? inputRef : null}
                  onChange={(e) => handleOnChange(index, e)}
                  value={otp[index]}
                  type="number"
                  name="otp"
                  id="otp"
                  className="w-12 h-12 border-2 rounded bg-transparent outline-none text-center font-semibold text-xl\
                  spin-button-none border-gray-400 focus:border-gray-700 focus:text-gray-700 text-gray-400 transition "
                />
                {index === otp.length - 1 ? null : (
                  <span className=" w-2 py-0.5 bg-gray-400"></span>
                )}
              </div>
            </Fragment>
          ))}

          <button
            onClick={(e) => registerHandler(e)}
            className="cursor-pointer rounded px-5 py-0.5 overflow-hidden group bg-rose-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
          >
            <span className="absolute right-0 w-16 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <div className="flex items-center space-x-2">
              <CheckCircleIcon />
              <span className="relative">Xác nhận</span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default VerifyEmailScreen;
