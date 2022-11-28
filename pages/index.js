import axios from "axios";
import { useEffect } from "react";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData, cardData, categories }) {
  const URI = "";
  useEffect(() => {
    const fetch = async () => {
      const data = await axios.get(URI);
      console.log(data);
    };
    fetch();
  });
  return (
    <>
      <Layout title={`Home`}>
        {/* <Banner /> */}
        <main className="max-w-[1000px] mx-auto px-8 md:px-16">
          <section className="pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {/* //todo */}
            </div>
          </section>
          <section className="pt-6">
            <div
              className="flex space-x-3 overflow-scroll scrollbar-hide
          p-3 -ml-3"
            ></div>
          </section>
        </main>
      </Layout>
    </>
  );
}
export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
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
      exploreData,
      cardData,
      categories,
    },
  };
}
