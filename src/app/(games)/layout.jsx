import Footer from "@/components/shared/footers/Footer";
import Navbar from "@/components/shared/headers/Navbar";
import React from "react";
const CommonLayout = ({ children }) => {
  return (
    <>
      <div className="w-full">
        <Navbar />
        <div className="">
          <div className="w-full text-white overflow-hidden">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CommonLayout;
