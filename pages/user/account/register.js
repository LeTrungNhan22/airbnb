import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaGoogle, FaRegEnvelope } from "react-icons/fa";
import { TbLock } from "react-icons/tb";

const RegisterScreen = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ email }) => {
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
    <div className="bg-gray-300">
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

      <main className="bg-gray-200 min-h-screen">
        <section>
          <div>
            
          </div>
        </section>
      </main>
    </div>
  );
};

export default RegisterScreen;
