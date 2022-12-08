import Link from "next/link";
import React from "react";
import { FaChevronRight, FaHome } from "react-icons/fa";

const BreadCrumb = () => {
  return (
    <>
      {/* breadcrumb */}
      <div className="w-[1200px] py-4 flex items-center gap-3 mx-auto">
        <Link href="/">
          <a className="text-red-500 text-base">
            <FaHome />
          </a>
        </Link>
        <span className="text-sm text-gray-200">
          <FaChevronRight />
        </span>
        <p className="text-gray-600 font-medium">Product view</p>
      </div>
      {/* breadcrumb */}
    </>
  );
};

export default BreadCrumb;
