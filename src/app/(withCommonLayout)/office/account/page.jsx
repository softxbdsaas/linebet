import PaymentMethod from "@/components/accountCommonLayout/paymentMethods/PaymentMethod";
import TopMessage from "@/components/accountCommonLayout/topMessage/TopMessage";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="overflow-hidden">
        <div className="pb-2">
          <TopMessage />
        </div>
        <PaymentMethod />
      </div>
    </div>
  );
};

export default page;
