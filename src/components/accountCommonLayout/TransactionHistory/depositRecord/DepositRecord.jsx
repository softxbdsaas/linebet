"use client";
import { useGetSingleBetterDepositByIdQuery } from "@/redux/api/paymentApi";
import React from "react";

const DepositRecord = ({ id }) => {
  console.log(id);
  const { data } = useGetSingleBetterDepositByIdQuery(id);
  const depositLog = data?.data || {};
  return (
    <>
      <div class="mx-auto bg-light-muted p-4 md:p-6 min-h-[80vh] rounded-lg shadow-md">
        <h2 class="text-xl md:text-2xl font-bold text-black-base mb-4">
          Deposit History
        </h2>

        {/* <!-- Transaction Details --> */}
        <div class="bg-white w-full p-4 rounded-lg mb-6">
          <h3 class="text-lg md:text-xl text-primary-base font-medium mb-2">
            Transaction Details
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-black-base">
            <div>
              <strong>Amount:</strong> {depositLog?.amount}
            </div>
            <div>
              <strong>Payment Method:</strong> {depositLog?.payment_method}
            </div>
            <div>
              <strong>Number:</strong> {depositLog?.number}
            </div>
            <div>
              <strong>Transaction ID:</strong> {depositLog?.txn_id}
            </div>
            <div>
              <strong>Agent Recent Balance:</strong>{" "}
              {depositLog?.agent_recent_balance}
            </div>
            <div>
              <strong>Agent After Send Balance:</strong>{" "}
              {depositLog?.agent_after_send_balance}
            </div>
            <div>
              <strong>Bettor Recent Balance:</strong>{" "}
              {depositLog?.better_recent_balance}
            </div>
            <div>
              <strong>Bettor After Received Balance:</strong>{" "}
              {depositLog?.better_after_received_balance}
            </div>
          </div>
        </div>

        {/* <!-- Bettor Info --> */}
        <div class="bg-white p-4 rounded-lg mb-6">
          <h3 class="text-lg md:text-xl text-active-base mb-2">
            Bettor Information
          </h3>
          <div class="flex flex-col sm:flex-row items-center text-black-base">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center mr-0 sm:mr-4 mb-4 sm:mb-0">
              <span class="text-lg sm:text-xl font-bold">B</span>
            </div>
            <div>
              <p>
                <strong>Bettor ID:</strong> {depositLog?.better?.user_name}
              </p>
              <p>
                <strong>Name:</strong> {depositLog?.better?.name}
              </p>
              <p>
                <strong>Email:</strong> {depositLog?.better?.email}
              </p>
            </div>
          </div>
        </div>

        {/* <!-- Agent Info --> */}
        <div class="bg-white p-4 rounded-lg">
          <h3 class="text-lg md:text-xl text-active-base mb-2">
            Agent Information
          </h3>
          <div class="flex flex-col sm:flex-row items-center text-black-base">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-0 sm:mr-4 mb-4 sm:mb-0">
              <span class="text-lg sm:text-xl font-bold">A</span>
            </div>
            <div>
              <p>
                <strong>Agent ID:</strong> {depositLog?.agent?.user_name}
              </p>
              <p>
                <strong>Name:</strong> {depositLog?.agent?.name}
              </p>
              <p>
                <strong>Email:</strong> {depositLog?.agent?.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepositRecord;
