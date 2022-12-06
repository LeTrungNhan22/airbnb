import React from "react";
import { dataDigitalBestSeller } from "../../data/mock-data";

const ProductList = () => {
  return (
    <>
      {dataDigitalBestSeller.map(({ id, title, price, category, linkImg }) => (
        <div key={id}>
          <p>{id}</p>
          <p>{title}</p>
          <p>{price}</p>
        </div>
      ))}
    </>
  );
};

export default ProductList;
