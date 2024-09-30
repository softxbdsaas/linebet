import Image from "next/image";
import React from "react";
import { BsClockFill } from "react-icons/bs";

const CrashHistory = () => {
  return (
    <div className="">  
      <div className="rounded-[25px]  mb-4   overflow-hidden">
        <div className="flex p-4  bg-gradient-to-r from-[#f06514] to-[#e53e54] justify-between items-center text-white overflow-hidden">
          <div className="text-[]">
            <div className="flex items-center gap-1">
              <BsClockFill className="text-[12px]" />
              <strong className="text-[12px]">History</strong>
            </div>
          </div>
        </div>
        <div className=" bg-[#181B39] p-3 pb-4">
          <div className="table-auto w-full text-left text-white">
            <div>
              <div className="flex justify-between ">
                <p className="px-4 text-[12px] font-light text-black-muted uppercase py-2">
                  Date
                </p>
                <p className="px-4 text-[12px] font-light text-black-muted uppercase py-2">
                  Time
                </p>
                <p className="px-4 text-[12px] font-light text-black-muted uppercase py-2">
                  Round ID
                </p>
                <p className="px-4 text-[12px] font-light text-black-muted uppercase py-2">
                  Bet
                </p>
                <p className="px-4 text-[12px] font-light text-black-muted uppercase py-2">
                  Odds
                </p>
                <p className="px-4 text-[12px] font-light text-black-muted uppercase py-2">
                  Win
                </p>
                <p className="px-4 text-[12px] font-light text-black-muted uppercase py-2">
                  Crash
                </p>
              </div>
            </div>
            <div className="w-full py-7">
              <div className="flex justify-center items-center flex-col">
                <Image
                  className="w-[150px] h-[150px] block"
                  width={250}
                  height={250}
                  src={
                    "https://cdngam.com/mfs/game-crash/empty-history-icoeb59dcca29ee.svg"
                  }
                  alt={"image"}
                ></Image>
                <p className=" text-center text-[18px] font-medium text-white/60">
                  {`You haven't placed any bets yet`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrashHistory;
