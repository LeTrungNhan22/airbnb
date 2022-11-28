import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../../../components/Layout";
import logo from "../../../../assets/Avatar.png";

const UserProfileScreen = () => {
  return (
    <Layout title={`Profile`}>
      <div className="bg-gray-200  ">
        <div className=" bg-gray-200 min-h-screen max-w-screen-xl mx-auto py-10">
          <div className="flex flex-row p-3">
            <div className="flex flex-col w-1/4">
              <div className="flex items-center  justify-center border-b-2 border-gray-500 mx-2 pb-5">
                <Image
                  src={logo}
                  alt=""
                  height={70}
                  width={70}
                  objectFit
                  className=" object-cover rounded-full cursor-pointer"
                ></Image>
                <div className="flex flex-col mx-3 space-y-2">
                  <span className="text-sm font-semibold">LeTrungNhan</span>
                  <button className="text-xs text-gray-700 font-thin">
                    Chỉnh sửa hồ sơ
                  </button>
                </div>
              </div>
              <div className="w-full px-4 pt-10">
                <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                          <span>Tài khoản của tôi</span>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-gray-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                          <div className="flex flex-col space-y-3 items-start ml-5">
                            <Link href="/user/account/profile">
                              <a>
                                <button>Hồ sơ</button>
                              </a>
                            </Link>
                            <Link href="/user/account/payment">
                              <a>
                                <button>Ngân hàng</button>
                              </a>
                            </Link>

                            <button>Địa chỉ</button>
                            <button>Mật khẩu</button>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                          <span>Thông báo</span>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-gray-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                          Cập nhật đơn hàng
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            </div>
            <div className="bg-white h-[500px] w-full mx-5 shadow-md rounded-md"></div>
          </div>
        </div>
      </div>
      
    </Layout>
    
  );
};

export default UserProfileScreen;
