import axios from "axios";
import { useEffect } from "react";
import Banner from "../components/Banner";
import advisement from "../assets/home/advisement.png";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Image from "next/image";
import CategoryList from "../components/CategoryList";

export default function Home({ serviceData }) {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <Layout title={`Home`}>
        <Banner />
        <main className="max-w-[1000px] my-2 mx-auto px-8 md:px-16  bg-gray-100">
          <section className="pt-10 mb-5">
            <h2 className="section-title">Dịch vụ</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {serviceData?.map(({ img, serviceName }) => (
                <SmallCard img={img} key={img} serviceName={serviceName} />
              ))}
            </div>
          </section>
        </main>
        {/* category list */}
        <main className="max-w-[1000px] my-2 mx-auto px-8 md:px-16  bg-gray-100">
          <section className="pt-10 mb-5">
            <h2 className="section-title">Danh mục</h2>
            <CategoryList />
          </section>
        </main>
        <Footer />
      </Layout>
      {/* advisement */}
      <>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10 " onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full cursor-pointer max-w-md transform overflow-hidden rounded-2xl bg-transparent p-6 text-left align-middle  transition-all">
                    <div className="mt-12">
                      <Image
                        src={advisement}
                        width={500}
                        height={600}
                        alt=""
                        className="bg-transparent"
                      ></Image>
                    </div>

                    <div className="absolute top-0 right-1 mt-10">
                      <button
                        type="button"
                        className="inline-flex font-bold justify-center rounded-full border border-transparent bg-gray-100 px-4 py-2 text-sm  text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 transition focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        X
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
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
