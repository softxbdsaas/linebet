import TopMessage from "@/components/accountCommonLayout/recharge/topMessage/TopMessage";
import Withdrawals from "@/components/accountCommonLayout/withdrawals/Withdrawals";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="overflow-hidden">
        <div className="pb-2">
          <TopMessage />
        </div>
        <Withdrawals />
      </div>
    </div>
  );
};

export default page;
