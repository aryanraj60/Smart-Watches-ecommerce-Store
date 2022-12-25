import React, { useState, useEffect } from "react";

import { client, urlFor } from "../../lib/client";

import { Product } from "../../components";

import { useStateContext } from "../../context/StateContext";

import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);

  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuy = () => {
    onAdd(product, qty);

    setShowCart(true);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-10 m-10 mt-14 text-[#324d67]">
        <div>
          <div className="image-container">
            <img
              src={urlFor(image && image[index])}
              className="product-detail-image rounded-2xl bg-gray-400 w-[400px] h-[400px] cursor-pointer hover:bg-[#f02d34]"
            />
          </div>
          <div className="flex gap-3 mt-5">
            {image?.map((item, i) => (
              <img
                key={item._key}
                src={urlFor(item)}
                onMouseEnter={() => setIndex(i)}
                className={
                  i === index
                    ? "rounded-lg w-[70px] h-[70px] cursor-pointer bg-[#f02d34]"
                    : "rounded-lg bg-[#ebebeb] w-[70px] h-[70px] cursor-pointer"
                }
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1 className="text-3xl">{name}</h1>
          <div className="reviews">
            <div className="flex">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details:</h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc flex flex-row">
              <span className="minus" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() => onAdd(product, qty)}
            >
              Add To Cart
            </button>
            <button type="button" className="buy-now" onClick={handleBuy}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="mt-28">
        <h2 className="text-center m-12 text-[#324d67] text-2xl">
          You may also like
        </h2>
        <div className="relative w-full h-[400px] overflow-x-hidden">
          <div className="track flex justify-center gap-4 mt-5 ">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';
  const product = await client.fetch(query);

  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
