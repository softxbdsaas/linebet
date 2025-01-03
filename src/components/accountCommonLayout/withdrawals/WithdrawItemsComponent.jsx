import WithdrawCard from "@/components/cards/WithdrawCard";
import React from "react";

const WithdrawItemsComponent = ({ title ,paymentMethod}) => {
  return (
    <div className=" bg-light-muted p-2 md:p-3">
      <h1 className=" uppercase py-2 text-black-base text-[12px] md:text-[16px]">{title}</h1>
      <div className="flex  justify-start items-center gap-2 flex-wrap">
        {paymentMethod?.map((item,index) => (
          <WithdrawCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default WithdrawItemsComponent;
