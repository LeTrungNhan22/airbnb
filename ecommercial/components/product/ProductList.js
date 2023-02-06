import Image from "next/image";
import React, { useEffect, useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { HeartIcon } from "@heroicons/react/24/outline";
import { FaHeart, FaShopify, FaStar } from "react-icons/fa";
import Link from "next/link";

const ProductList = ({ productFilter }) => {
  const [productSingle, setProductSingle] = useState([]);

  useEffect(() => {
    setProductSingle(productFilter);
  }, [productFilter]);
  if (productFilter?.length === 0) {
    return <div className="text-center text-2xl font-bold">Loading...</div>;
  }

  return (
    <>
      <div className="container pb-16 my-7">
        <div className="grid grid-cols-4 gap-6">
          {productSingle?.map(({ featuredImageUrl, mediumPrice, name, id }) => (
            <div
              className="bg-white shadow-md rounded overflow-hidden group p-3 hover:shadow-xl transition"
              key={id}
            >
              <div className="relative h-[200px] w-full">
                <div>
                  <Image
                    src={featuredImageUrl}
                    alt={name}
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
                  <a className=" text-white text-lg  w-9 h-9  rounded-full bg-rose-500 flex items-center justify-center transition hover:bg-gray-800">
                    <FaHeart />
                  </a>
                </div>
              </div>

              <div className="pt-4 pb-3 px-4">
                <a>
                  <div className="uppercase line-clamp-1 font-medium text-sm  text-gray-800 hover:text-red-600 transition">
                    {name}
                  </div>
                </a>

                <div className="flex items-baseline space-x-2">
                  <p className="text-xl text-rose-600 font-semibold">
                    {mediumPrice.amount} {mediumPrice.currencyCode}
                  </p>
                  <p className="text-gray-500 line-through">
                    {" "}
                    {mediumPrice.amount}{" "}
                  </p>
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
              <Link href="/shop">
                <div
                  href="#_"
                  className="cursor-pointer rounded px-3 py-2 overflow-hidden group bg-white-300 relative hover:bg-gradient-to-r hover:from-gray-800 hover:to-white text-black hover:ring-2 hover:ring-offset-2 hover:ring-black transition-all ease-out duration-300 border border-black"
                >
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <div className="flex items-center justify-center space-x-2 text-white-600 hover:text-black">
                    <FaShopify />
                    <span className="relative">Xem Thêm</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
export async function getServerSideProps() {
  return {
    props: {},
  };
}
