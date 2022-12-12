import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FaAddressCard, FaSignOutAlt } from "react-icons/fa";
import AuthContext from "../../utils/User";

const SideBar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const { fullName, imageUrl } = user;

  return (
    <>
      {/* account profile */}
      <div className="px-4 py-3 bg-white shadow flex items-center gap-4 rounded">
        <div className="flex-shrink-0 flex ">
          <div className="w-14 h-14 relative">
            <Image
              src={imageUrl}
              alt=""
              layout="fill"
              className=" rounded-full border border-gray-200 p-1 object-cover"
            ></Image>
          </div>
        </div>
        <div className="flex-grow">
          <p className="text-gray-600"> Xin chào,</p>
          <h4 className="text-gray-800 font-bold">{fullName}</h4>
        </div>
      </div>
      {/* account profile */}
      <div className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-0 text-gray-600">
        <div className="space-y-1">
          <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-rose-100 px-4 py-2 text-left text-sm font-medium text-rose-900 hover:bg-rose-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
                    <div className="flex  items-center justify-center space-x-4">
                      <FaAddressCard />
                      <span>Tài khoản của tôi</span>
                    </div>

                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-rose-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <div className="flex flex-col space-y-2 ml-5">
                      <Link href="/user/account/profile">
                        <a className="hover:text-rose-600 transition capitalize block">
                          Hồ sơ
                        </a>
                      </Link>
                      <Link href="/user/account/address">
                        <a className="hover:text-rose-600 transition capitalize block">
                          Địa chỉ
                        </a>
                      </Link>
                      <Link href="/user/account/payment">
                        <a className="hover:text-rose-600 transition capitalize block">
                          Ngân hàng
                        </a>
                      </Link>
                      <Link href="/user/profile">
                        <a className="hover:text-rose-600 transition capitalize block">
                          Đổi mật khẩu
                        </a>
                      </Link>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
        <div className="space-y-1">
          <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-rose-100 px-4 py-2 text-left text-sm font-medium text-rose-900 hover:bg-rose-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
                    <div className="flex  items-center justify-center space-x-4">
                      <FaAddressCard />
                      <span>Tài khoản của tôi</span>
                    </div>

                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-rose-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <div className="flex flex-col space-y-2 ml-5">
                      <Link href="/user/profile">
                        <a className="hover:text-rose-600 transition capitalize block">
                          Hồ sơ
                        </a>
                      </Link>
                      <Link href="/user/profile">
                        <a className="hover:text-rose-600 transition capitalize block">
                          Địa chỉ
                        </a>
                      </Link>
                      <Link href="/user/profile">
                        <a className="hover:text-rose-600 transition capitalize block">
                          Ngân hàng
                        </a>
                      </Link>
                      <Link href="/user/profile">
                        <a className="hover:text-rose-600 transition capitalize block">
                          Đổi mật khẩu
                        </a>
                      </Link>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
        <div className="space-y-1">
          <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
            <button className="flex w-full justify-between rounded-lg bg-rose-100 px-4 py-2 text-left text-sm font-medium text-rose-900 hover:bg-rose-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
              <div className="flex  items-center justify-center space-x-4">
                <FaSignOutAlt />
                <span>Đăng xuất</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* profile link */}
    </>
  );
};

export default SideBar;
