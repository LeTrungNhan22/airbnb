import Image from "next/image";
import React from "react";

const SmallCard = ({ img, distance, location }) => {
  return (
    <div
      className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer
    hover:bg-gray-300 hover:scale-105 transition duration-200 ease-out 
    "
    >
      <div className="relative h-16 w-16">
        <Image
          src={img}
          alt="category"
          layout="fill"
          loading="lazy"
          className="rounded-lg"
        />
      </div>
      <div>
        <h2 className="font-bold ">{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>

    // Left
  );
};

export default SmallCard;
