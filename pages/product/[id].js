import Image from "next/image";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import React, { useRef } from "react";
import { FaChevronRight, FaHome, FaStar } from "react-icons/fa";
import BreadCrumb from "../../components/BreadCrumb";
import Layout from "../../components/Layout";
import { dataDigitalBestSeller } from "../../data/mock-data";

export default function ProductScreen() {
  const router = useRouter();
  const { id } = router.query;

  const product = dataDigitalBestSeller.find((item) => item.id == id);

  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <>
      <Layout title={`${product.title}`}>
        <div className="bg-gray-400 min-h-screen">
          <BreadCrumb />
          <section>
            <div className=" w-[1200px] grid grid-cols-2 gap-6  mx-auto bg-white p-4">
              {/* product image */}
              <div>
                <Image
                  src={product.linkImg}
                  alt={product.title}
                  width={300}
                  height={170}
                  className="w-full"
                ></Image>
                <div className="grid grid-cols-5 gap-4 mt-4">
                  <Image
                    src={product.linkImg}
                    alt={product.title}
                    width={300}
                    height={170}
                    className="w-full cursor-pointer border border-rose-500"
                  ></Image>
                  <Image
                    src={product.linkImg}
                    alt={product.title}
                    width={300}
                    height={170}
                    className="w-full cursor-pointer border "
                  ></Image>
                  <Image
                    src={product.linkImg}
                    alt={product.title}
                    width={300}
                    height={170}
                    className="w-full cursor-pointer border "
                  ></Image>
                </div>
              </div>
              {/* product image */}

              {/* product content */}
              <div>
                <h2 className="text-3xl font-medium uppercase mb-2">
                  {product.title}
                </h2>
                <div className="flex mb-4 items-center">
                  <div className="flex gap-1 text-sm text text-yellow-400">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className="text-xs text-gray-300 ml-2">
                    (150 Reviews)
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-800 font-semibold space-x-2">
                    <span>Availability:</span>
                    <span className="text-green-600">In stock</span>
                  </p>
                  <p className="text-gray-800 font-semibold space-x-2">
                    <span>Brand:</span>
                    <span className="">INPEx</span>
                  </p>
                  <p className="text-gray-800 font-semibold space-x-2">
                    <span>Category:</span>
                    <span className="">{product.category}</span>
                  </p>
                  <p className="text-gray-800 font-semibold space-x-2">
                    <span>SKU:</span>
                    <span className="">ABC4AU21</span>
                  </p>
                </div>
                <div className="flex items-baseline mb-1 space-x-2 font-mono mt-4">
                  <p className="text-xl text-rose-600 font-semibold">
                    {product.price}
                  </p>
                  <p className="text-base text-gray-400 font-semibold">
                    $50.00
                  </p>
                </div>
                <p className="mt-4 text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus voluptate maxime, exercitationem at voluptas
                  consequatur asperiores fuga vitae fugit placeat ad, dolore
                  accusamus explicabo vero corrupti accusantium molestias labore
                  qui.
                </p>
                <div className="mt-4 flex items-center space-x-5">
                  <h3 className="text-md text-gray-800 uppercase font-medium">
                    Kích cỡ :
                  </h3>
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="size-selector">
                        <input
                          type="radio"
                          name="size"
                          className="hidden"
                          id="size-xs"
                        />
                        <label
                          htmlFor="size-xs"
                          className="text-xs border font-bold border-gray-200 shadow-sm rounded-sm h-8 w-8 flex items-center justify-center cursor-pointer text-gray-600"
                        >
                          XS
                        </label>
                      </div>
                      <div className="size-selector">
                        <input
                          type="radio"
                          name="size"
                          className="hidden"
                          id="size-s"
                        />
                        <label
                          htmlFor="size-s"
                          className="text-xs border font-bold border-gray-200 shadow-sm rounded-sm h-8 w-8 flex items-center justify-center cursor-pointer text-gray-600"
                        >
                          S
                        </label>
                      </div>

                      <div className="size-selector">
                        <input
                          type="radio"
                          name="size"
                          className="hidden"
                          id="size-m"
                        />
                        <label
                          htmlFor="size-m"
                          className="text-xs border font-bold border-gray-200 shadow-sm rounded-sm h-8 w-8 flex items-center justify-center cursor-pointer text-gray-600"
                        >
                          M
                        </label>
                      </div>
                      <div className="size-selector">
                        <input
                          type="radio"
                          name="size"
                          className="hidden"
                          id="size-l"
                        />
                        <label
                          htmlFor="size-l"
                          className="text-xs border font-bold border-gray-200 shadow-sm rounded-sm h-8 w-8 flex items-center justify-center cursor-pointer text-gray-600"
                        >
                          L
                        </label>
                      </div>
                      <div className="size-selector">
                        <input
                          type="radio"
                          name="size"
                          className="hidden"
                          id="size-xl"
                        />
                        <label
                          htmlFor="size-xl"
                          className="text-xs border font-bold border-gray-200 shadow-sm rounded-sm h-8 w-8 flex items-center justify-center cursor-pointer text-gray-600"
                        >
                          XL
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center space-x-5">
                  <h3 className="text-md text-gray-800 uppercase font-medium">
                    Màu sắc :
                  </h3>
                  <div>
                    <div className=" flex items-center gap-2">
                      {/* single color */}
                      <div className="color-selector">
                        <input
                          type="radio"
                          name="color"
                          className="hidden"
                          id="color-red"
                        />
                        <label
                          htmlFor="color-red"
                          className="border border-gray-200 rounded-sm h-5 w-5 block cursor-pointer shadow-sm bg-red-600"
                        ></label>
                      </div>
                      <div className="color-selector">
                        <input
                          type="radio"
                          name="color"
                          className="hidden"
                          id="color-white"
                        />
                        <label
                          htmlFor="color-white"
                          className="border border-gray-200 rounded-sm h-5 w-5 block cursor-pointer shadow-sm bg-white"
                        ></label>
                      </div>
                      <div className="color-selector">
                        <input
                          type="radio"
                          name="color"
                          className="hidden"
                          id="color-black"
                        />
                        <label
                          htmlFor="color-black"
                          className="border border-gray-200 rounded-sm h-5 w-5 block cursor-pointer shadow-sm bg-black"
                        ></label>
                      </div>
                      {/* single color */}
                    </div>
                  </div>
                </div>
              </div>

              {/* product content */}
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
