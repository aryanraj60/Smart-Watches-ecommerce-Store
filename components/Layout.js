import React, { useState } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-white">
      <Head>
        <title>Aryan's Store</title>
      </Head>
      <header className="bg-black">
        <Navbar />
      </header>
      <section className="mb-10">
        <main className="">{children}</main>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
