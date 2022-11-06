import Image from "next/image";
import Link from "next/link";
import React from "react";
import loginImage from "../assets/banner-login.png";
import { FaFacebookF, FaGoogle, FaRegEnvelope } from "react-icons/fa";
import { TbLock } from "react-icons/tb";
import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import { getError } from "../utils/error";
import Footer from "../components/Footer";
import Head from "next/head";

const LoginScreen = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };
  return (
    <>
      <Head>
        <title>Đăng nhập</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon " href="/favicon.ico" />
      </Head>
      <header className="p-5 sticky z-50 top-0 bg-white md:px-10 shadow-md grid grid-cols-1">
        <div className="flex items-center justify-between w-full">
          <div>
            <h3 className="text-3xl font-semibold">Đăng nhập</h3>
            <Link href="/">
              <a className="text-red-700 italic">Trang chủ</a>
            </Link>
          </div>

          <p>Bạn cần hỗ trợ?</p>
        </div>
      </header>
      <div className="w-full">
        <Image
          alt=""
          src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          layout="fill"
          className="object-center object-cover"
        ></Image>
      </div>
      <main className="min-h-screen">
        <section className="bg-white h-[550px] absolute w-[370px] md:w-[470px] right-16  mt-14 flex items-center justify-center flex-col rounded-md shadow-md">
          <div className="p-5">
            <h3 className="text-2xl font-semibold mb-2">Đăng nhập</h3>
            <form
              className="flex items-center flex-col"
              onSubmit={handleSubmit(submitHandler)}
            >
              <div className="bg-gray-200 w-80 p-3 flex items-center my-3 rounded-2xl shadow-inner shadow-gray-400 transition duration-200 focus-within:shadow-gray-600 focus-within:scale-105">
                <label htmlFor="email"></label>
                <FaRegEnvelope className="text-gray-400 mr-2" />

                <input
                  {...register("email", {
                    required: "Please enter email",
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                      message: "Please enter valid email",
                    },
                  })}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email/Tên đăng nhập"
                  autoFocus
                  className="bg-gray-200 text-sm flex-1 rounded-full border-none outline-none "
                ></input>
              </div>

              {errors.email && (
                <div className="text-red-500 mb-2 w-full text-left font-medium italic inline-block duration-300 transition-all">
                  {errors.email.message}
                </div>
              )}

              <div className="bg-gray-200 w-80 p-3 flex items-center mb-3 rounded-2xl shadow-inner shadow-gray-400 transition duration-200 focus-within:shadow-gray-600 focus-within:scale-105">
                <TbLock className="text-gray-400 mr-2" />
                <label htmlFor="password"></label>
                <input
                  {...register("password", {
                    required: "Please enter password",
                    minLength: {
                      value: 6,
                      message: "Password is more than 5 chars",
                    },
                  })}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="bg-gray-200 text-sm flex-1 rounded-full border-none outline-none "
                />
              </div>
              {errors.password && (
                <div className="text-red-500 mb-2 w-full text-left font-medium italic inline-block duration-200 transition-all">
                  {errors.password.message}
                </div>
              )}
              <div className="flex w-80  mb-5 justify-between">
                <label
                  htmlFor=""
                  className="flex items-center text-xs italic font-semibold"
                >
                  <input
                    type="checkbox"
                    name="remember"
                    className="mr-1 border-none outline-none cursor-pointer bg-gray-300 "
                  />
                  Nhớ tài khoản
                </label>

                <a
                  href=""
                  className=" font-bold text-xs outline-none cursor-pointer text-red-600"
                >
                  Quên mật khẩu?
                </a>
              </div>

              <button>
                <div
                  href=""
                  className="font-semibold w-80 hover:scale-105 hover:bg-red-500 hover:text-white duration-300 transition shadow-md border-2 border-red-500 rounded-full px-12 py-2 inline-block"
                >
                  Đăng nhập
                </div>
              </button>
            </form>
            <div className="my-8 flex items-center space-x-2">
              <hr className="w-1/2" />
              <span className="text-sm">Hoặc</span>
              <hr className="w-1/2" />
            </div>
            <div className="flex justify-center my-2">
              <a className="border-2 cursor-pointer text-red-600 shadow-lg hover:text-blue-600  hover:scale-105  duration-300 transition border-gray-400 rounded-full p-3 mx-1">
                <FaFacebookF className="text-2xl" />
              </a>
              <a className="border-2 cursor-pointer text-red-600 shadow-lg hover:scale-105 hover:text-green-500  duration-300 transition  border-gray-400 rounded-full p-3 mx-1">
                <FaGoogle className="text-2xl" />
              </a>
            </div>
            <div className="w-full flex items-center justify-center mt-5">
              <span className="text-sm">
                Bạn chưa có tài khoản?{" "}
                <Link href="/register">
                  <a href="" className="text-red-700">
                    Đăng ký
                  </a>
                </Link>
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default LoginScreen;
