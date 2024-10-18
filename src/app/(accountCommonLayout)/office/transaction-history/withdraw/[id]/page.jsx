import WithdrawalsRecord from "@/components/accountCommonLayout/TransactionHistory/withdrawalsRecord/WithdrawalsRecord";
import React from "react";

const page = ({ params }) => {
  return (
    <>
      <WithdrawalsRecord id={params?.id} />
    </>
  );
};

export default page;
