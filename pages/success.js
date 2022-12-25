import React, { useState, useEffect } from "react";

import Link from "next/link";

import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";

import { runFirwork } from "../lib/utlis";

const success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFirwork();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>

        <h2>Thank you for your order!</h2>
        <p className="description">
          If you have any question please email!
          <a className="email" href="mailto:order@aryanstore.com">
            order@aryanstore.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default success;
