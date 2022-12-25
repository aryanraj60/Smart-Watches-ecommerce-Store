import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="text-[#324d67] text-center mt-6 py-8 px-3 font-semibold flex flex-col items-center">
      <p>@2022 Aryan Raj - All rights reserved</p>
      <p className="flex gap-5 mt-5">
        <a href="https://twitter.com/aryanraj_60">
          <AiOutlineTwitter size={"40px"} />
        </a>
      </p>
    </div>
  );
};

export default Footer;
