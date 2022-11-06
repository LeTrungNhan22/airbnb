
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData, cardData }) {
  return (
    <>
      <Layout title={`Home`}>
        <Banner />
        <main className="max-w-[1000px] mx-auto px-8 md:px-16">
          <section className="pt-6">
            <h2 className="section-title">Explore</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {exploreData?.map(({ img, distance, location }) => (
                <SmallCard
                  img={img}
                  key={img}
                  distance={distance}
                  location={location}
                />
              ))}
            </div>
          </section>
          <section className="pt-6">
            <h className="section-title py-10">Live anywhere</h>
            <div
              className="flex space-x-3 overflow-scroll scrollbar-hide
          p-3 -ml-3"
            >
              {cardData?.map(({ img, title }) => (
                <MediumCard key={title} img={img} title={title} />
              ))}
            </div>
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
  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
