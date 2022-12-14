import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { BsPlusLg } from 'react-icons/Bs';

const UserAddress = () => {
   // pop up voucher
   const [isOpen, setIsOpen] = useState(false);
   function closeModal() {
     setIsOpen(false);
   }
   function openModal() {
     setIsOpen(true);
   }
  return  <div>
  
      <div className="flex items-center m-4">
      <h3 className="text-lg font-medium capitalize flex-1">
          Địa chỉ của tôi
      </h3>
      {/* <button type="button" class=" focus:outline-none text-white bg-red-500 hover:bg-red-400 focus:ring-4 focus:ring-red-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 flex items-center"><BsPlusLg className="mr-2"/>Thêm địa chỉ mới</button> */}

      
      <>
                  <button
                    type="button"
                    onClick={openModal}
                    className="flex items-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-rose-600 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                  >
                  <BsPlusLg className="mr-1"/>
                    Thêm địa chỉ mới
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
                            <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                              <Dialog.Title
                                as="h3"
                                className="text-lg font-medium leading-6 text-gray-900"
                              >
                                Địa chỉ mới
                              </Dialog.Title>
                              <div className="mt-2">
                                <div className=" p-2">
                                  <div className="flex items-center justify-evenly gap-4">
                                    
                                    <input
                                      type="text"
                                      placeholder="Họ và Tên"
                                      className="px-4 py-2 w-80 rounded border-gray-400"
                                    />
                                    <input
                                      type="text"
                                      placeholder="Số điện thoại"
                                      className="px-4 py-2 w-80 rounded"
                                    />
                                    
                                  </div>
                                  
                                  
                                  <div className="mt-3">
                                  <select id="countries" className=" border border-gray-400  text-gray-500 rounded w-full px-4 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  ">
                                    <option selected>Tỉnh/Thành phố, Quận/Huyện, Phường/Xã</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                  </select>
                                  </div>
                                  <input
                                      type="text"
                                      placeholder="Địa chỉ cựu thể"
                                      className="px-4 py-2 w-full rounded mt-4"
                                    />
                                </div>


                                <div className="mt-2">

                                  <div>
                                  <span>Loại địa chỉ:</span>
                                  <div className="mt-4 flex space-x-2">
                                <button type="button" class="text-gray-900 bg-white border  focus:outline-none  focus:ring-1 focus:ring-rose-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                  Nhà Riêng
                                </button>
                                <button type="button" class="text-gray-900 bg-white border  focus:outline-none  focus:ring-1 focus:ring-rose-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                  Văn Phòng
                                </button>
                              </div>
                                  </div>
                                </div>

                                <div className="flex items-center ml-2 mt-4">
                                  <span className="mr-2">
                                    <input type="checkbox"/>
                                  </span>
                                  <span>Đặt làm địa chỉ mặc định</span>
                                </div>
                                 
                              </div>

                              <div className="mt-4 flex justify-end space-x-2">
                                <button
                                  type="button"
                                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                  onClick={closeModal}
                                >
                                  Trở lại
                                </button>
                                <div
                                      href="#_"
                                      className="cursor-pointer rounded px-3 py-2 overflow-hidden group bg-rose-300 relative hover:bg-gradient-to-r hover:from-rose-500 hover:to-orange-400 text-rose-600 hover:text-black hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300 border border-rose-600"
                                    >
                                      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                      <div className="flex items-center space-x-2 ">
                                        <span className="relative">
                                          Áp dụng{" "}
                                        </span>
                                      </div>
                                    </div>
                              </div>
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </div>
                    </Dialog>
                  </Transition>
                </>
      


      </div>
      <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700 "></hr>

      <form action="">
              
                <div className="">
                <div className="flex items-center justify-center h-96">
                <svg fill="none" viewBox="0 0 121 120" className="w-32 h-32">
                <path d="M16 79.5h19.5M43 57.5l-2 19" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                </path>
                <path d="M56.995 78.791v-.001L41.2 38.195c-2.305-5.916-2.371-12.709.44-18.236 1.576-3.095 4.06-6.058 7.977-8 5.061-2.5 11.038-2.58 16.272-.393 3.356 1.41 7 3.92 9.433 8.43v.002c2.837 5.248 2.755 11.853.602 17.603L60.503 78.766v.001c-.617 1.636-2.88 1.643-3.508.024Z" fill="#fff" stroke="#BDBDBD" stroke-width="2"></path>
                <path d="m75.5 58.5 7 52.5M13 93h95.5M40.5 82.5 30.5 93 28 110.5" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M44.5 79.5c0 .55-.318 1.151-1.038 1.656-.717.502-1.761.844-2.962.844-1.2 0-2.245-.342-2.962-.844-.72-.505-1.038-1.105-1.038-1.656 0-.55.318-1.151 1.038-1.656.717-.502 1.761-.844 2.962-.844 1.2 0 2.245.342 2.962.844.72.505 1.038 1.105 1.038 1.656Z" stroke="#BDBDBD" stroke-width="2"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M48.333 68H18.5a1 1 0 1 0 0 2h30.667l-.834-2Zm20.5 2H102a1 1 0 0 0 0-2H69.667l-.834 2Z" fill="#BDBDBD"></path>
                <path d="M82 73h20l3 16H84.5L82 73ZM34.5 97H76l1.5 13H33l1.5-13ZM20.5 58h18l-1 7h-18l1-7Z" fill="#E8E8E8"></path>
                <path clip-rule="evenodd" d="M19.5 41a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM102.5 60a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="#E8E8E8" stroke-width="2"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M93.5 22a1 1 0 0 0-1 1v3h-3a1 1 0 1 0 0 2h3v3a1 1 0 1 0 2 0v-3h3a1 1 0 1 0 0-2h-3v-3a1 1 0 0 0-1-1Z" fill="#E8E8E8"></path>
                <circle cx="58.5" cy="27" r="7" stroke="#BDBDBD" stroke-width="2"></circle>
                </svg>
            </div>

            </div>
            
        </form>
 
  </div>;
};

export default UserAddress;

{/* <div
                                      href="#_"
                                      className="cursor-pointer rounded px-3 py-2 overflow-hidden group bg-rose-300 relative hover:bg-gradient-to-r hover:from-rose-500 hover:to-orange-400 text-rose-600 hover:text-black hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300 border border-rose-600"
                                    >
                                      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                      <div className="flex items-center space-x-2 ">
                                        <span className="relative">
                                          Áp dụng{" "}
                                        </span>
                                      </div>
                                    </div> */}
