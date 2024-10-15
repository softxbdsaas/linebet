import PaymentMethodsCard from "@/components/cards/PaymentMethodsCard";
import React from "react";

const PaymentItemsComponent = ({ title ,paymentMethod}) => {
  return (
    <div className=" bg-light-muted p-2 md:p-3">
      <h1 className=" uppercase py-2 text-black-base text-[16px]">{title}</h1>
      <div className="flex  justify-center sm:justify-start items-center gap-2 flex-wrap">
        {paymentMethod?.map((item,index) => (
          <PaymentMethodsCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PaymentItemsComponent;
