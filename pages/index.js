import axios from "axios";
import { useEffect } from "react";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ serviceData }) {
  return (
    <>
      <Layout title={`Home`}>
        <Banner />
        <main className="max-w-[1000px] mx-auto px-8 md:px-16 min-h-screen">
          <section className="pt-6">
            <h2 className="section-title">Dịch vụ </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {serviceData?.map(({ img, serviceName }) => (
                <SmallCard img={img} key={img} serviceName={serviceName} />
              ))}
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
export async function getStaticProps() {
  const serviceData = await fetch("https://www.jsonkeeper.com/b/U9M4").then(
    (res) => res.json()
  );
  const cardData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );

  const categories = await fetch(
    "https://ali-express1.p.rapidapi.com/categories",
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f95e3dfdc1msh1b798593affc221p130ecbjsn21014b80d408",
        "X-RapidAPI-Host": "ali-express1.p.rapidapi.com",
      },
    }
  ).then((res) => res.json());

  return {
    props: {
      serviceData,
      cardData,
      categories,
    },
  };
}
