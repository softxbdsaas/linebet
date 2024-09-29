import CrashRocket from "@/components/games/crash/CrashRocket";
import CrashUsersTable from "@/components/games/crash/CrashUsersTable";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className=" bg-slot_dark-base w-full px-1 md:px-2">
        <div>
          <div className=" hidden  lg:block">
            <div className=" flex items-center gap-[6px] text-white  py-4">
              <Link
                href={"/"}
                className={`text-[15px] md:text-[18px] underline  uppercase`}
              >
                Games
              </Link>
              <p>/</p>
              <Link
                className={`text-[15px] md:text-[18px] underline uppercase`}
                href={"/"}
              >
                Lotteries
              </Link>
              <p>/</p>
              <p className={`text-[15px] md:text-[18px] underline uppercase`}>
                Crash
              </p>
            </div>
          </div>
        </div>
        {/* games sections  */}
        <div className=" max-w-[1740px]  mx-auto flex   flex-col-reverse md:flex-row justify-center  items-start gap-4 mt-4">
          <div className=" w-full md:max-w-[450px]">
            <CrashUsersTable />
          </div>
          <div className="flex-1 w-full xl:min-w-[500px] mx-auto">
            <CrashRocket />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
