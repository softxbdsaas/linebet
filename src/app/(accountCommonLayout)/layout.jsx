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
        <footer className="py-4 bg-[#2D5822] text-center text-[#ffffff]">
          <p>�� 2022 Asian IT Inc.</p>
        </footer>
      </div>
    </>
  );
};

export default CommonLayout;
