
import Footer from "@/components/shared/footers/Footer";
import Navbar from "@/components/shared/headers/Navbar";
import AccountLeftSidebar from "@/components/shared/sidebars/accountLeftSidebar/AccountLeftSidebar";
import React from "react";

const CommonLayout = ({ children }) => {
  return (
    <>
      <div className="w-full">
        <Navbar />
        <div className=" flex items-start gap-2 px-1 md:px-2 w-full mt-2">
          <div className={`w-[250px]`}>
            <AccountLeftSidebar />
          </div>
          <div className="flex-1 min-w-[500px] mx-auto">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CommonLayout;
