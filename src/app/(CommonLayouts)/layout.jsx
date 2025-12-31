import React from "react";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const Commonlayout = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Commonlayout;
