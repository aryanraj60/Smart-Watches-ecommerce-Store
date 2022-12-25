import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <>
      <Link href={`/product/${slug.current}`}>
        <div className="cursor-pointer transition-transform hover:scale-110 text=[#324d67]">
          <img
            src={urlFor(image && (image.length > 1 ? image[1] : image[0]))}
            width={250}
            height={250}
            className="rounded-2xl bg-[#ebebeb] w-64 h-64"
          />
          <p className="font-medium">{name}</p>
          <p className="font-extrabold mt-2 text-black">${price}</p>
        </div>
      </Link>
    </>
  );
};

export default Product;
