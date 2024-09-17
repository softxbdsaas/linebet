import Footer from "@/components/shared/footers/Footer";
import Navbar from "@/components/shared/headers/Navbar";
import LeftSiteSidebar from "@/components/shared/sidebars/leftSiteSidebar/LeftSiteSidebar";
import RightSiteSidebar from "@/components/shared/sidebars/rightSiteSidebar/RightSiteSidebar";
import React from "react";

const CommonLayout = ({ children }) => {
  return (
    <>
      <div className=" w-full">
        <Navbar />
        <div className=" flex items-start gap-2 px-1 md:px-2 w-full">
          <div className={`w-[15%]`}>
            <LeftSiteSidebar />
          </div>
          <div className="w-[70%]">{children}</div>
          <div className={`w-[15%]`}>
            <RightSiteSidebar />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CommonLayout;
