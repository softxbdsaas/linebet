import RegisterModal from "@/components/register/RegisterModal";
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
        <div className=" flex items-start gap-2 px-1 md:px-2 w-full mt-2">
          <LeftSiteSidebar />

          <div className="flex-1 min-w-[280px] md:min-w-[500px] mx-auto">{children}</div>

          <RightSiteSidebar />

          <RegisterModal />
        </div>
        <Footer />
       
      </div>
    </>
  );
};

export default CommonLayout;
