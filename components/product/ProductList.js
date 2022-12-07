import Image from "next/image";
import React from "react";
import { dataDigitalBestSeller } from "../../data/mock-data";
import { AiOutlineSearch } from "react-icons/ai";
import { HeartIcon } from "@heroicons/react/24/outline";
import { FaHeart, FaStar } from "react-icons/fa";
import Link from "next/link";

const ProductList = () => {
  return (
    <>
      <div className="container pb-16 my-7">
        <div className="grid grid-cols-4 gap-6">
          {dataDigitalBestSeller.map(
            ({ id, title, price, category, linkImg }) => (
              <div
                className="bg-white shadow-md rounded overflow-hidden group p-3"
                key={id}
              >
                <div className="relative h-[150px]">
                  <div>
                    <Image
                      src={linkImg}
                      alt={title}
                      layout="fill"
                      className=" rounded object-fit object-center"
                    />
                  </div>
                  <div className="absolute opacity-0 rounded group-hover:opacity-100 transition gap-2 inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <Link href={`/product/${id}`}>
                      <a className=" text-white text-lg w-9 h-9 rounded-full bg-rose-500 flex items-center justify-center transition hover:bg-gray-800">
                        <AiOutlineSearch />
                      </a>
                    </Link>

                    <a
                      href="#"
                      className=" text-white text-lg  w-9 h-9  rounded-full bg-rose-500 flex items-center justify-center transition hover:bg-gray-800"
                    >
                      <FaHeart />
                    </a>
                  </div>
                </div>

                <div className="pt-4 pb-3 px-4">
                  <a>
                    <div className="uppercase line-clamp-1 font-medium text-sm  text-gray-800 hover:text-red-600 transition">
                      {title}
                    </div>
                  </a>

                  <div className="flex items-baseline space-x-2">
                    <p className="text-xl text-rose-600 font-semibold">
                      {price}
                    </p>
                    <p className="text-gray-500 line-through">{price}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex gap-1 text-sm text-yellow-400">
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 ml-2">(100)</div>
                  </div>
                </div>
                <a
                  href=""
                  className=" flex items-center justify-center mx-4 py-1 text-center text-white bg-gradient-to-r from-[#626262] to-[#9DC5C3]  rounded hover:bg-transparent hover:text-gray-500 transition"
                >
                  Xem thêm
                </a>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;
