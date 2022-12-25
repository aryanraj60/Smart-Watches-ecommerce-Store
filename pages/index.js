import React, { useEffect } from "react";
import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";
import { AiFillStar } from "react-icons/ai";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <section className="max-w-7xl mx-auto">
        <div className="text-center my-10 text-gray-500">
          <h2 className="text-3xl font-extrabold md:text-5xl">
            Our Latest Product
          </h2>
          <p className="text-base font-bold md:text-xl mt-3 text-blue-300">
            Smart Watches of many variations
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-5 w-full">
          {products?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>

        <div className="testimonial w-full mt-20">
          <h3 className="text-gray-800 text-center text-3xl font-bold">
            What People Say About Us
          </h3>
          <div className="card-container flex flex-col md:flex-row p-5 gap-5">
            <div className="card rounded-2xl flex gap-4 p-5 bg-[#F6F6F6]">
              <div className="img-container">
                <img
                  src="/assests/pic1.jpeg"
                  width={180}
                  height={180}
                  className="rounded-xl"
                />
              </div>
              <div className="content-container">
                <h2 className="text-xl font-semibold text-[#1E1D1D]">Robert</h2>
                <p className="w-2/3 text-gray-500">
                  Don't waste time just order! This is the best website to
                  purcase smart watches
                </p>
                <p className="flex mt-3">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </p>
              </div>
            </div>

            <div className="card rounded-2xl flex gap-4 p-5 bg-[#F6F6F6]">
              <div className="img-container">
                <img
                  src="/assests/pic2.jpeg"
                  width={180}
                  height={180}
                  className="rounded-xl"
                />
              </div>
              <div className="content-container">
                <h2 className="text-xl font-semibold text-[#1E1D1D]">Hamza</h2>
                <p className="w-2/3 text-gray-500">
                  I've been purchasing smart watches of Aryan for a long time.
                  All the products are good quality.
                </p>
                <p className="flex mt-3">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </p>
              </div>
            </div>
          </div>
        </div>

        <FooterBanner footerBanner={bannerData && bannerData[0]} />
      </section>
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
