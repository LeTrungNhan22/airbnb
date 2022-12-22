import { Dialog, Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import Cookies from "js-cookie";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { GrLocation } from "react-icons/gr";
import { dataDigitalBestSeller } from "../data/mock-data";
import { getError } from "../utils/error";
import AuthContext from "../utils/User";

const CheckoutScreen = () => {
  const { user, isLogin } = useContext(AuthContext);
  const [cartDetailByUserId, setCartDetailByUserId] = useState([]);

  useEffect(() => {
    const getCartDetail = async () => {
      if (Cookies.get("cart") != null) {
        if (isLogin == true) {
          try {
            await axios
              .get(`${basUrl}/cart/1.0.0/cart/${user.id}/detail`)
              .then(function (response) {
                const { data } = response;
                const { cart, itemToShops } = data;
                const { totalPrice } = cart;
                setCartTotalPrice(totalPrice);
                setCartDetailByUserId(itemToShops);
              })
              .catch(function (error) {
                console.error(getError(error));
              });
          } catch (error) {
            console.log(getError(error));
          }
        }
      }
    };
    getCartDetail();
  }, [user.id]);
  const product = dataDigitalBestSeller.find((item) => item.id === 1);
  // pop up address
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  // pop up address

  return (
    <>
      <Head>
        <title>Thanh toán</title>
      </Head>
      <header className="sticky top-0 z-20 shadow-md  py-2 bg-white ">
        <div className="w-[1200px] mx-auto border-l px-6 my-5 border-red-600">
          <Link href="/">
            <a className="text-red-700">HOME</a>
          </Link>
          <h2 className="text-3xl text-rose-500">Thanh toán</h2>
        </div>
      </header>
      {/* checkout page */}

      <main className="bg-gray-300 py-3">
        <section className="bg-white  w-[1200px] mx-auto shadow-md mb-3  ">
          <div className="address-checkout"></div>
          <div className="p-3 flex items-center space-x-3 text-amber-500 text-xl mb-3">
            <GrLocation className="text-amber-500" />
            <h3>Địa chỉ nhận hàng</h3>
          </div>

          <div className="grid grid-cols-4 mx-auto items-center justify-center px-4 pb-6">
            <div className=" flex flex-col">
              <span>Lê Trung Nhân</span>
              <span className="font-bold">0353357781</span>
            </div>
            <div className="col-span-2">
              <p>
                Cổng Sau Trường Đh Thể Dục Thể Thao Khu Phố 6, Phường Linh
                Trung, Thành Phố Thủ Đức, TP. Hồ Chí Minh
              </p>
            </div>
            <div className="space-x-10">
              <span className=" text-xs border p-1 border-rose-500 text-red-600 ">
                Mặc định
              </span>
              <>
                <button
                  type="button"
                  onClick={openModal}
                  className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-rose-600 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                  Thay đổi địa chỉ
                </button>

                <Transition appear show={isOpen} as={Fragment}>
                  <Dialog
                    as="div"
                    className="relative z-10"
                    onClose={closeModal}
                  >
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                      <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <Dialog.Panel className="w-full max-w-2xl  transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <Dialog.Title
                              as="h3"
                              className="text-lg font-medium border-b  pb-3 leading-6 text-gray-900"
                            >
                              Địa chỉ của tôi
                            </Dialog.Title>
                            <div className="mt-2 flex justify-between items-center  border-b pb-4">
                              <div className="flex items-center justify-center space-x-3">
                                <input
                                  type="radio"
                                  className="text-red-500 text-sm focus:ring-red-500 cursor-pointer"
                                />
                                <div>
                                  <span className="font-semibold border-r pr-4">
                                    Lê Trung Nhân
                                  </span>
                                  <span>(+84) 353357781 </span>
                                  <p>
                                    Cổng Sau Trường Đh Thể Dục Thể Thao Khu Phố
                                    6, Phường Linh Trung, Thành Phố Thủ Đức, TP.
                                    Hồ Chí Minh
                                  </p>
                                  <span className=" text-xs border p-1 border-rose-500 text-red-600 ">
                                    Mặc định
                                  </span>
                                </div>
                              </div>
                              <div>
                                <span className="text-cyan-500">Cập nhật</span>
                              </div>
                            </div>
                            <div className="mt-2 flex justify-between items-center py-4">
                              <div className="flex items-center justify-center space-x-3">
                                <input
                                  type="radio"
                                  className="text-red-500 text-sm focus:ring-red-500 cursor-pointer"
                                />
                                <div>
                                  <span className="font-semibold border-r pr-4">
                                    Lê Trung Nhân
                                  </span>
                                  <span>(+84) 353357781 </span>
                                  <p>
                                    Cổng Sau Trường Đh Thể Dục Thể Thao Khu Phố
                                    6, Phường Linh Trung, Thành Phố Thủ Đức, TP.
                                    Hồ Chí Minh
                                  </p>
                                  <span className=" text-xs border p-1 border-rose-500 text-red-600 ">
                                    Địa chỉ giao hàng
                                  </span>
                                </div>
                              </div>
                              <div>
                                <span className="text-cyan-500">Cập nhật</span>
                              </div>
                            </div>
                            <div className="my-4 px-6">
                              <button
                                href="#_"
                                className="cursor-pointer rounded px-8 py-1 overflow-hidden group bg-white-300 relative hover:bg-gradient-to-r hover:from-gray-800 hover:to-white text-black hover:ring-2 hover:ring-offset-2 hover:ring-black transition-all ease-out duration-300 border border-black"
                              >
                                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                <div className="flex items-center justify-center space-x-2 text-white-600 hover:text-black">
                                  <span className="text-2xl">+</span>
                                  <span className="relative">
                                    Thêm địa chỉ mới
                                  </span>
                                </div>
                              </button>
                            </div>

                            <div className="mt-4 flex justify-end space-x-2">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={closeModal}
                              >
                                Trở lại
                              </button>
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={closeModal}
                              >
                                Áp dụng
                              </button>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>
              </>
            </div>
          </div>
        </section>

        {/* product checkout */}
        <section className="bg-white w-[1200px] mx-auto shadow-md px-2 py-4">
          <div className="grid grid-cols-2 items-center px-4 mb-2">
            <h3 className="text-2xl text-amber-600">Sản phẩm</h3>
            <div className="flex justify-between text-gray-400">
              <span>Đơn giá </span>
              <span>Số lượng </span>
              <span>Thành tiền</span>
            </div>
          </div>

          {cartDetailByUserId.map(
            ({ totalPrice, quantity, productVariant, id }) => (
              <div className="grid grid-cols-4" key={id}>
                <div className=" flex items-center space-x-3 px-2">
                  <div className="w-32 h-32 relative">
                    <Image
                      src={productVariant.imageUrl}
                      alt=""
                      layout="fill"
                      className="object-center object-contain "
                    ></Image>
                  </div>
                  <span>{productVariant.productName}</span>
                </div>
                <div className="items-center flex">
                  <span className="text-gray-400">
                    {productVariant.industrial}
                  </span>
                </div>
                <div className="flex col-span-2 justify-between items-center p-4">
                  <span>{product.price}</span>
                  <span>1</span>
                  <span>{product.price}</span>
                </div>
              </div>
            )
          )}

          <div className="bg-cyan-50 w-full  px-2 py-4 border border-cyan-200">
            <div className="grid grid-cols-3">
              <div className="space-x-3">
                <span className="text-sm">Lời nhắn: </span>
                <input
                  type="text"
                  placeholder="Lưu ý cho người bán"
                  className="rounded shadow"
                />
              </div>
              <div className="col-span-2 flex justify-between">
                <span className="text-green-500">Đơn vị vận chuyển:</span>
                <div className="flex flex-col">
                  <span>Nhanh</span>
                  <span className="text-gray-500 text-sm">
                    Nhận hàng vào ngày 16 Th12 - 19 Th12
                  </span>
                </div>
                <span className="text-blue-700">THAY ĐỔI</span>
                <span>đ37.700</span>
              </div>
            </div>
          </div>
          <div className="bg-rose-50 w-full  px-2 py-4 border border-rose-50">
            <div className="flex items-end justify-end space-x-4">
              <span>Tổng số tiền (1 sản phẩm ): </span>
              <span className="text-2xl text-red-500">đ137.000</span>
            </div>
          </div>
        </section>
        {/* product checkout */}
      </main>
    </>
  );
};

export default CheckoutScreen;
