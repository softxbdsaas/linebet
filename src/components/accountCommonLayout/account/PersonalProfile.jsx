import React from "react";
import FillInProfileProgress from "./FillInProfileProgress ";
import AccountForm from "./AccountForm";

const PersonalProfile = () => {
  return (
    <>
      <div className="bg-light-muted min-h-screen">
        <div className=" p-2 md:p-4 ">
          <div>
            <div className="text-black-base b px-2">
              <h1 className="text-[16px] md:text-[22px] font-medium ">
                Personal profile{" "}
              </h1>
              <p className="text-[12px]  md:text-[14px] font-normal py-1">
                Fill in the empty fields to take advantage of the enhanced
                features of the website.{" "}
              </p>
            </div>
          </div>
          <div className="">
            <FillInProfileProgress />
          </div>
          <div className="py-2">
            <AccountForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalProfile;
