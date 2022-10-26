import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div
      className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 
    2xl:h-[650px] "
    >
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        alt=""
        objectFit="cover"
      />
      <div className="absolute top-1/2 text-center w-full">
        <p className="text-sm font-semibold">
          Bạn có đồ cần bán? Đăng tin ngay{" "}
        </p>
        <button
          className="text-purple-500
         bg-white px-10 py-4 shadow-md rounded-full
         font-bold my-3 hover:shadow-lg transition duration-200
            active:scale-90
         "
        >
          I am flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
