import React, { useContext, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { FaShopify } from "react-icons/fa";
import AuthContext from "../../utils/User";
const RegisterSellerScreen = () => {
  const basUrl = process.env.NEXT_PUBLIC_API_URL;
  const { user, userById, logout, isLogin, updateUserAddress } =
    useContext(AuthContext);

  // pop up voucher
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  // pop up voucher
  const [provinceList, setProvinceList] = useState([]);
  const [provinceId, setProvinceId] = useState("");
  const [districtId, setDistrictId] = useState("");
  const [districtList, setDistrictList] = useState([]);
  const [wardList, setWardList] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  return (
    <>
      <Head>
        <title>Đăng ký người bán</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon " href="/favicon.ico" />
      </Head>
      <header className="p-5 sticky z-50 top-0 bg-white md:px-10 shadow-md grid grid-cols-1">
        <div className="flex items-center justify-between w-full">
          <div>
            <h3 className="text-3xl font-semibold">
              Đăng ký kênh người bán
            </h3>
            <Link href="/">
              <a className="text-red-700 italic">Trang chủ</a>
            </Link>
          </div>

          <p>Bạn cần hỗ trợ?</p>
        </div>
      </header>
      <div className="min h-screen bg-gray-300 ">
        <div className="pt-3 w-[1200px] mx-auto">
          <div className="col-span-9 bg-white mx-3 shadow rounded px-6 pt-6 pb-7  ">
            <form>
              <h3 className="text-lg font-medium capitalize mb-4">
                Điền thông tin 
              </h3>
              <div className="space-y-4 w-[900px] mx-auto">
                <div className="grid sm:grid-cols-1 gap-4">
                  <div>
                    <label className="text-gray-600 mb-2 block">Tên shop</label>
                    <input
                      {...register("username", {})}
                      id="username"
                      name="username"
                      type="text"
                      className="input-box"
                    />
                  </div>
                  <div>
                    <label className="text-gray-600 mb-2 block">
                      Địa chỉ lấy hàng
                    </label>
                    <input
                      {...register("fullName", {
                        required: "fullName không thể trống",
                        pattern: {
                          message: "Vui lòng nhập fullName",
                        },
                      })}
                      id="fullName"
                      name="fullName"
                      type="text"
                      className="input-box"
                    />
                  </div>
                </div>
        
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-600 mb-2 block">Email</label>
                    <input
                      type="text"
                      {...register("email", {
                        required: "fullName không thể trống",
                        pattern: {
                          message: "Vui lòng nhập fullName",
                        },
                      })}
                      id="email"
                      name="email"
                      className="input-box"
                    />
                  </div>
                  <div>
                    <label className="text-gray-600 mb-2 block">
                      Phone Number
                    </label>
                    <input
                      {...register("telephone", {
                        required: "fullName không thể trống",
                        pattern: {
                          message: "Vui lòng nhập fullName",
                        },
                      })}
                      id="telephone"
                      name="telephone"
                      type="text"
                      className="input-box"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <div
                    href="#_"
                    className="w-1/4 cursor-pointer rounded px-3 py-2 overflow-hidden group bg-white-300 relative hover:bg-gradient-to-r hover:from-gray-800 hover:to-white text-black hover:ring-2 hover:ring-offset-2 hover:ring-black transition-all ease-out duration-300 border border-black"
                  >
                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    <div className="flex items-center space-x-2 text-white-600 hover:text-black">
                      <FaShopify />
                      <span className="relative">Đăng ký</span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterSellerScreen;
