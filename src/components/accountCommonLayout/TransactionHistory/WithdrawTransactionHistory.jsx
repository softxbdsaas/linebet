"use client";
import { useGetAllWithdrawRequestQuery } from "@/redux/api/paymentApi";
import React from "react";
import Moment from "react-moment";

const WithdrawTransactionHistory = () => {
  const { data } = useGetAllWithdrawRequestQuery();
  console.log(data);
  return (
    <>
      <div className=" bg-white rounded mt-5 min-h-[75vh]">
        {data?.data?.length > 0 ? (
          <div className="overflow-x-auto   rounded-lg ">
            <table className="min-w-full   ">
              <thead>
                <tr className="text-sm bg-light-muted ">
                  <th className="px-4 text-start py-3 ">
                    Gateway | Transaction
                  </th>
                  <th className="px-4 py-2 text-center">Initiated</th>
                  <th className="px-4 py-2">User</th>
                  <th className="px-4 py-2">Amount</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.map((tx, index) => (
                  <tr
                    key={index}
                    className="text-center border-b  border-light-muted hover:bg-light-muted transition duration-150 ease-in-out"
                  >
                    <td className="px-4 text-start py-2">
                      <p className={"text-blue"}>{tx.payment_method} </p>
                      <p className={"text-xs"}> {tx.txn_id}</p>
                    </td>

                    <td className="px-6 py-2  text-center  ">
                      {/* Display the created_at time in a human-readable format */}
                      <Moment
                        className="text-sm"
                        format="yyyy-mm-d hh:mm:ss A"
                        date={tx.created_at}
                      />{" "}
                      <br />
                      <span className=" text-xs  px-1">
                        {<Moment fromNow>{tx.created_at}</Moment>}
                      </span>
                    </td>

                    <td className="px-4 py-2">
                      <p className={" text-xs md:text-sm capitalize"}>
                        {tx.better?.name ? tx.better?.name : "unknown name"}{" "}
                      </p>
                      <span className={" text-xs md:text-sm text-blue"}>
                        {tx.better?.email
                          ? tx.better?.email
                          : tx.better?.phone_number
                          ? tx.better?.phone_number
                          : tx.better?.user_name}
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <p className={" text-xs md:text-sm"}>{tx.amount} </p>
                      <span className={" text-xs md:text-sm text-blue"}>
                        {tx.total}
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="  rounded-full text-xs px-4 py-[2px]  ">
                        {tx?.status == 0
                          ? "Pending"
                          : tx?.status == 1
                          ? "Approved"
                          : "Rejected"}
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <button className=" duration-200  text-sm  py-1 px-2 rounded">
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex justify-center min-h-[75vh] text-center items-center h-full">
            <div>
              <h1 className="text-xl font-medium">No transactions</h1>
              <p className="text-xs md:text-sm">
                Your monetary transactions will be displayed here
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WithdrawTransactionHistory;
