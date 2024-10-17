"use client";
import React, { useState } from "react";
import DepositTransactionHistory from "./DepositTransactionHistory";
import WithdrawTransactionHistory from "./WithdrawTransactionHistory";

const TransactionHistory = () => {
  const [activeTransaction, setActiveTransaction] = useState(false);
  return (
    <>
      <div className=" bg-[#EBF2E9] rounded p-1 sm:p-2 md:p-4">
        <div className="text-black-base">
          <h1 className=" text-xl md:text-2xl  font-medium">
            Transaction history
          </h1>
          <p className="text-xs md:text-sm">
            Includes deposits, withdrawals and transfers of funds
          </p>

          <div className="my-2">
            <div className=" flex items-center">
              <button
                onClick={() => setActiveTransaction(false)}
                className={` ${
                  activeTransaction == false
                    ? " bg-light-base text-white"
                    : "bg-light-muted "
                } text-sm hover:bg-light-base hover:text-white duration-300  px-3 py-1 rounded-l`}
              >
                Deposit
              </button>
              <button
                onClick={() => setActiveTransaction(true)}
                className={` ${
                  activeTransaction == true
                    ? " bg-light-base text-white"
                    : "bg-light-muted "
                } text-sm  hover:bg-light-base hover:text-white duration-300 px-3 py-1 rounded-r`}
              >
                Withdraw
              </button>
            </div>
          </div>

          {activeTransaction ? (
            <WithdrawTransactionHistory />
          ) : (
            <DepositTransactionHistory />
          )}
        </div>
      </div>
    </>
  );
};

export default TransactionHistory;
