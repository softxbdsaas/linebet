import React from "react";
import { FaRegUser } from "react-icons/fa";
import { GoDatabase } from "react-icons/go";
import { FaSackDollar } from "react-icons/fa6";
import { bettingData } from "../../../../public/database/bettingDB";

const BettingTable = () => {
  return (
    <div className="">
      <div className=" md:rounded-[25px]  mb-5   overflow-hidden">
        <div className="flex p-4 text-center md:text-start bg-gradient-to-r from-[#f06514] to-[#e53e54] justify-between items-center text-white overflow-hidden">
          <div className="text-center ">
            <p className="text-[12px] text-center md:text-start"> Number of players</p>
            <div className="flex  justify-center md:justify-start items-center gap-1">
              <FaRegUser className="text-[12px]" />
              <strong className="text-[12px]">604</strong>
            </div>
          </div>
          <div className="text-[]">
            <p className="text-[12px]"> Total bet</p>
            <div className="flex items-center gap-1">
              <GoDatabase className="text-[12px]" />
              <strong className="text-[12px]">203392.21 BDT</strong>
            </div>
          </div>
          <div className="text-[]">
            <p className="text-[12px]"> Total winnings</p>
            <div className="flex items-center gap-1">
              <FaSackDollar className="text-[12px]" />
              <strong className="text-[12px]">147139.11 BDT</strong>
            </div>
          </div>
        </div>
        <div className=" bg-[#181B39] p-3 pb-4">
          <table className="table-auto w-full text-left  text-white">
            <thead>
              <tr className="">
                <th className="px-1 sm:px-2 md:px-4 text-[14px] text-black-muted py-2">
                  USERNAME
                </th>
                <th className="px-1 sm:px-2 md:px-4 text-[14px] text-black-muted py-2">
                  ODDS
                </th>
                <th className="px-1 sm:px-2 md:px-4 text-[14px] text-black-muted py-2">
                  BET
                </th>
                <th className="px-1 sm:px-2 md:px-4 text-[14px] text-black-muted py-2">
                  WIN
                </th>
              </tr>
            </thead>
            <tbody className=" h-[50vh] overflow-y-auto selectBarScroll">
              {bettingData?.map((row, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "bg-[#181B39]" : ""}`}
                >
                  <td className="px-1 sm:px-2 md:px-4 py-2 text-[12px]">
                    {row.username}
                  </td>
                  <td className="px-1 sm:px-2 md:px-4 py-2  text-[12px]">
                    {row.odds}
                  </td>
                  <td className="px-1 sm:px-2 md:px-4 py-2 text-red-500  text-[12px]">
                    {row.bet}
                  </td>
                  <td
                    className={`px-1 sm:px-2 md:px-4 py-2  text-[12px] ${
                      row.win === "0 BDT" ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    {row.win}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BettingTable;
