import Router, { useRouter } from "next/router";
import React, { useRef } from "react";
import Layout from "../../components/Layout";
import { dataDigitalBestSeller } from "../../data/mock-data";

export default function ProductScreen() {
  const router = useRouter();
  const { id } = router.query;

  const product = dataDigitalBestSeller.find((item) => item.id == id);
  console.log(product);

  return (
    <>
      <Layout title={`${product.title}`}>
        <div></div>
      </Layout>
    </>
  );
}
