import Head from "next/head";
import Link from "next/link";
import React, { Fragment, useEffect, useRef, useState } from "react";

const VerifyEmailScreen = () => {
  const [otp, setOtp] = useState(Array(6).fill([""]));
  const [activeOTP, setActiveOTP] = useState(0);
  const inputRef = useRef(null);

  const handleOnChange = (index, e) => {
    e.preventDefault();
    const { value } = e.target;
    const newOTP = [...otp];
    newOTP[index] = value.substring(value.length - 1);
    setOtp(newOTP);
  };
  useEffect(() => {
    inputRef.current?.focus();
  });
  console.log(otp);
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
      <div className="h-screen flex justify-center items-center space-x-2">
        {otp.map((_, index) => (
          <Fragment key={index}>
            <input
              ref={index === activeOTP ? inputRef : null}
              onChange={(e) => handleOnChange(index, e)}
              type="number"
              className="w-12 h-12 border-2 rounded bg-transparent outline-none text-center font-semibold text-xl\
                  spin-button-none border-gray-400 focus:border-gray-700 focus:text-gray-700 text-gray-400 transition "
            />
            {index === otp.length - 1 ? null : (
              <span className=" w-2 py-0.5 bg-gray-400"></span>
            )}
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default VerifyEmailScreen;
